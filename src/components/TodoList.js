import React from "react";
import "../App.css";
import useTodoStore from "../app/todoStore";

const TodoList = ({darkMode}) => {
  const { todos, todosLeft, activeTodos, deleteTodo, markComplete } =
    useTodoStore((state) => ({
      todos: state.todos,
      deleteTodo: state.deleteTodo,
      markComplete: state.markComplete,
      todosLeft: state.todosLeft,
      activeTodos: state.activeTodos,
    }));

  return (
    <div className={`todo-container ${darkMode ? "darkMode" : ""}`}>
      {todos.map((todo) => (
        <div className='main-container' draggable='true' key={todo.id}>
          <div className='todo'>
            <div className='todo-check'>
              <input
                type='checkbox'
                className='checkbox'
                onChange={(e) => markComplete(todo.id)}
              />
            </div>
            <div className='todo-and-delete'>
              <div className={`todo-text ${darkMode ? "darkMode" : ""}`}>
                <p className='checked'>{todo.title}</p>
              </div>
              <button
                onClick={() => deleteTodo(todo)}
                className={`delete-btn ${darkMode ? "darkMode" : ""}`}
              >
                X
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <div className='footer-menu'>
        <div className='counter'>
          <span>{todosLeft} items left</span>
        </div>
        <div className='state'>
          <span className='active'>All</span>
          <span>Active</span>
          <span>Completed </span>
        </div>
        <div className='clear'>
          <span>Clear Completed</span>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
