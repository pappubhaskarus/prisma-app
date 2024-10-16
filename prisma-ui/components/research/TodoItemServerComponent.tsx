import { deleteTodoAction, updateTodoAction } from "@/app/research/_action";
import CheckBox from "./CheckBox";
import React from "react";
import { ITodo } from "@/server/models/Todo";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <form className="flex items-center space-x-2 mb-2">
      <button
        className={`px-2 py-1 flex-1 text-left ${
          todo.completed ? "line-through" : ""
        }`}
        formAction={async () => {
          "use server";
          await updateTodoAction(
            todo._id,
            { completed: !todo.completed },
            "/with-server-actions"
          );
        }}
      >
        {todo.title}
      </button>
      <div className="flex items-center">
        <CheckBox todo={todo} />
        <button
          className="px-2 py-1 ml-2 text-white rounded bg-red-500 "
          formAction={async () => {
            "use server";
            await deleteTodoAction({
              id: todo.id,
              path: "/with-server-actions",
            });
          }}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default TodoItem;
