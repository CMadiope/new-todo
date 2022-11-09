import React from 'react'
import '../App.css';


const Todo = () => {
  return (
    <div className='container'>
      <div className="hero-img">
        
      </div>
      <div className="main">
        <div className="header">
          <h1 className='logo'>
            TODO
          </h1>
          <div className="theme-toggle">
            <img src="/images/icon-moon.svg" alt="moon" />
          </div>
        </div>
        <div className="inputs">
          <form className='input-form'>
            <input className='radio' type="radio" />
            <input className='type' type="text" placeholder='Create a new todo...'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Todo
