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

      <div>
        <p>Notes:</p>
        <ul>
          <li>Any cross can be solved in 8 moves or less</li>
          <li>To train with these scrambles you only need a solved cross, not a solved cube.</li>
          <li>Reload the page for new scrambles</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
