// src/components/AddTodo.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/slices/todoSlice";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      console.log(text);
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="New item"
      />
      <button
        type="submit"
        data-testId="addButton"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
