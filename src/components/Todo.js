import React from "react";
import "../App.css";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const dropTodo = (e) => {
    e.target.style.left = `${e.pageX - 50}px`;
    e.target.style.top = `${e.pageY - 50}px`;
  };

  const dragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className={`container ${darkMode ? "darkMode" : ""}`}>
      <div className='hero-img'></div>
      <div className='main'>
        <div className='header'>
          <h1 className='logo'>TODO</h1>
          <div className='theme-toggle' onClick={switchMode}>
            <div className={`moon ${darkMode ? "darkMode" : ""}`}></div>
          </div>
        </div>
        <div className='inputs'>
          <TodoForm darkMode={darkMode} />
        </div>
        <TodoList darkMode={darkMode} />
        <div className='instruction'>
          <p>Drag and drop to reorder the list</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;

// Still to complete:
// 1. style the checkbox
// 2. add drag and drop functionality
