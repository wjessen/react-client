import React from 'react';
import './App.css';

function App() {

  fetch('https://clownfish-app-4kruw.ondigitalocean.app/')
    .then(response => response.json())
    .then(data => console.log(data));
  console.log("Here")
  return (
    <div className="App">
      <p>Here23</p>
    </div>
  );
}

export default App;
