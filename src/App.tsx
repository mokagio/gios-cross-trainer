import React from 'react';
import './App.css';
import getRandomSolve from 'rubiks-cross-trainer';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
    </h1>

    <p>Scramble for a 1 move cross</p>
    <p>{ getRandomSolve(1) }</p>
  </div>
  );
}

export default App;
