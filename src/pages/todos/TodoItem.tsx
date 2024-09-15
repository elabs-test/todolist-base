// src/components/TodoItem.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todoSlice";
import { ArrowUUpLeft, Check, TrashSimple } from "@phosphor-icons/react";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeTodo(id));
  };

  const handleComplete = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <div className="flex mb-4 items-center">
        <p
          className="w-full line-through text-green"
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {text}
        </p>
        <button
          onClick={handleComplete}
          className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-grey border-grey hover:bg-grey"
        >
          {!completed ? <Check size={23} /> : <ArrowUUpLeft size={23} />}
        </button>
        <button
          onClick={handleRemoveItem}
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:bg-red"
        >
          <TrashSimple size={23} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
