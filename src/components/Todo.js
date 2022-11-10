import React from "react";
import "../App.css";
import { useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialTodoState = {
  todos: [],
  completed: [],
  activeTodos: [],
  remainingTodos: 0,
};

const todoReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newState = {
        todos: [...prevState.todos, action.playload],
        remainingTodos: prevState.remainingTodos + 1,
        activeTodos: [...prevState.activeTodos, action.playload],
      };
      // console.log("after add note", newState);
      return newState;
    }
    case "MARK_COMPLETE": {
    }
    default:
      return initialTodoState;
  }
};

const Todo = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const addTodo = (event) => {
    event.preventDefault();

    if (todoInput === "") return;

    const newTodo = {
      id: uuidv4(),
      text: todoInput,
    };
    dispatch({ type: "ADD_TODO", playload: newTodo });
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
          <form className={`input-form ${darkMode ? "darkMode" : ""}`}>
            {/* <label className='label-main'>
              <input className='radio' type='radio' checked />
              <span className='check-mark'></span>
            </label> */}
            <button className='add' onClick={addTodo}>
              +
            </button>

            <input
              className={`type ${darkMode ? "darkMode" : ""}`}
              type='text'
              value={todoInput}
              placeholder='Create a new todo...'
              onChange={(event) => setTodoInput(event.target.value)}
            />
          </form>
        </div>
        <div className={`todo-container ${darkMode ? "darkMode" : ""}`}>
          {todoState.todos.map((todo) => (
            <div className='main-container'>
              <div className='todo'>
                <div className='todo-check'>
                  <input type='radio' className='radio' />
                </div>
                <div className={`todo-text ${darkMode ? "darkMode" : ""}`}>
                  <p>{todo.text}</p>
                </div>
              </div>
              <hr />
            </div>
          ))}

          <div className='footer-menu'>
            <div className='counter'>
              <span>3 items left</span>
            </div>
            <div className='state'>
              <span className='active'>All</span>
              <span>Active</span>
              <span>Completed</span>
            </div>
            <div className='clear'>
              <span>Clear Completed</span>
            </div>
          </div>
        </div>
        <div className='instruction'>
          <p>Drag and drop to reorder the list</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
