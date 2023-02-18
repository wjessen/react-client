import React from 'react';
import './App.css';

function App() {

  fetch('https://clownfish-app-4kruw.ondigitalocean.app/', {mode: 'no-cors'})
  .then((response) => response.json()
  .then((data) => console.log(data)));

  return (
    <div className="App">
      <p>Here </p>
    </div>
  );
}

export default App;
