import React, { useState } from "react";
import useTodoStore from "../app/todoStore";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import TodoList from "./TodoList";

const TodoForm = ({darkMode}) => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [todoTitle, setTodoTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoTitle) return alert("Please enter a todo title");
    addTodo({
      id: uuidv4(),
      title: todoTitle,
    });
    setTodoTitle("");
  };

  return (
    <div>
      <div className={`input-form ${darkMode ? "darkMode" : ""}`}>
        <button
          className={`add ${darkMode ? "darkMode" : ""}`}
          onClick={handleSubmit}
        >
          <span className='add-sign'>+</span>
        </button>
        <input
          className={`type ${darkMode ? "darkMode" : ""}`}
          type='text'
          value={todoTitle}
          placeholder='Create a new todo...'
          onChange={(event) => setTodoTitle(event.target.value)}
        />
      </div>
    </div>
  );
};

export default TodoForm;
