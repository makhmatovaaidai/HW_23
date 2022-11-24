import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "../todo/todos";

const Form = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");

  const addTodoHandler = () => {
    const todo = {
      id: Math.random().toString(),
      text: todoValue,
      completed: false,
    };
    dispatch(addTodo(todo));
    setTodoValue("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Введите текст..."
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button className="btn2" type="submit" onClick={() => addTodoHandler()}>
        Add
      </button>
    </form>
  );
};

export default Form;
