import React from 'react';
import './App.css';
import getRandomSolve from 'rubiks-cross-trainer';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Gio's Cross Trainer</h1>

      {[...Array(8)].map((x, i) =>
        <div>
          <p>Scramble for {i + 1}-moves cross</p>
          <p>{ getRandomSolve(i + 1) }</p>
        </div>
      )}
    </div>
  );
}

export default App;
