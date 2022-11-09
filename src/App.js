import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
