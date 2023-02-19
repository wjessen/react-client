import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  // const [count, setCount] = useState(0);
  // const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }, { text: 'Learn React' }]);
  // fetch('https://clownfish-app-4kruw.ondigitalocean.app/')
  //   .then(response => response.json())
  //   .then((data) => { );
  // console.log("Here")
  function textHandler(text: string, index: number) {
    todos[index].text = text;
    setTodos([...todos]);
  }
  return (
    <div className="App">
      <table>
        {todos.map((todo, index) => (
          <div>
          <tr key={index}>
            <TodoItem text={todo.text} index={index} textHandler={textHandler}></TodoItem>
          </tr>
          <tr><td>{todo.text}</td></tr>
          </div>
        ))}
      </table>
    </div>
  );
}

export default App;
