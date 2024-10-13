import TodoFormClientComponent from "@/components/research/TodoFormClientComponent";
import TodoItemClientComponent from "@/components/research/TodoItemClientComponent";
import { getTodos } from "@/server/lib/todos_db";

const Page = async () => {
  const { todos, total } = await getTodos();


  return (
    <div className="container mx-auto max-w-md p-4">
      <TodoFormClientComponent />
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      {total === 0 ? (
        <p className="text-center">No Todos Found</p>
      ) : (
        todos?.map((todo) => (
          <TodoItemClientComponent key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default Page;
