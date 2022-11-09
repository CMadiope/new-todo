import React from "react";
import "../App.css";
import { useState } from "react";

const Todo = () => {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
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
            <input className='radio' type='radio' />
            <input
              className='type'
              type='text'
              placeholder='Create a new todo...'
            />
          </form>
        </div>
        <div className={`todo-container ${darkMode ? "darkMode" : ""}`}>
          <div className='main-container'>
            <div className='todo'>
              <div className='todo-check'>
                <input type='radio' className='radio' />
              </div>
              <div className={`todo-text ${darkMode ? "darkMode" : ""}`}>
                <p>Compile online portfolio</p>
              </div>
            </div>
            <hr />
          </div>
          <div className='main-container'>
            <div className='todo'>
              <div className='todo-check'>
                <input type='radio' className='radio' />
              </div>
              <div className={`todo-text ${darkMode ? "darkMode" : ""}`}>
                <p>Go for afternoon run</p>
              </div>
            </div>
            <hr />
          </div>
          <div className='main-container'>
            <div className='todo'>
              <div className='todo-check'>
                <input type='radio' className='radio' />
              </div>
              <div className={`todo-text ${darkMode ? "darkMode" : ""}`}>
                <p>Read for 1 hour</p>
              </div>
            </div>
            <hr />
          </div>

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
