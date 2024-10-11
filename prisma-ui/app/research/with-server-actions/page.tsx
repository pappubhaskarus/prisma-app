import { getTodos } from "@/server/lib/todos_db";
import TodoFormServerComponent from "@/components/research/TodoFormServerComponent";
import TodoItemServerComponent from "@/components/research/TodoItemServerComponent";

const Page = async () => {
  const { todos, page, limit, totalPages, total } = await getTodos();

  return (
    <div className="container mx-auto max-w-md p-4">
      <TodoFormServerComponent />
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      {total === 0 ? (
        <p className="text-center">No Todos Found</p>
      ) : (
        todos?.map((todo) => (
          <TodoItemServerComponent key={todo._id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default Page;
