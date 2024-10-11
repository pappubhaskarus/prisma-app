import Todo, { ITodo } from "../models/Todo";

interface TodoFilter {
  page?: number;
  limit?: number;
}

const transform = (t: T) => {
  t = t.toJSON();
  t.id = t._id.toString();
  t._id = "";
  return t;
};

export async function getTodos(filter: TodoFilter = {}) {
  try {
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const [todos, total] = await Promise.all([
      Todo.find({}).skip(skip).limit(limit),
      Todo.countDocuments(),
    ]);

    const transformed = todos.map((todo) => transform(todo));

    const totalPages = Math.ceil(total / limit);

    return {
      todos: transformed,
      page,
      limit,
      totalPages,
      total,
    };
  } catch (error) {
    return { error };
  }
}

export async function createTodo(title: string) {
  try {
    const todo: ITodo = await Todo.create({ title });

    return { todo: transform(todo) };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function getTodo(id: string) {
  try {
    const todo: ITodo = await Todo.findById(id);
    return { todo: transform(todo) };
  } catch (error) {
    return { error };
  }
}

export async function updateTodo(
  id: string,
  { title, completed }: { title?: string; completed?: boolean }
) {
  try {
    const todo: ITodo = await Todo.findByIdAndUpdate(id, {
      title,
      completed,
    });
    return { todo: transform(todo) };
  } catch (error) {
    return { error };
  }
}

export async function deleteTodo(id: string) {
  try {
    await Todo.deleteOne({ _id: id });
  } catch (error) {
    return { error };
  }
}
