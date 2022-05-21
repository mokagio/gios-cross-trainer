import React from 'react';
import './App.css';
import getRandomSolve from 'rubiks-cross-trainer';
import * as SRVisualizer from 'sr-visualizer';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Gio's Cross Trainer</h1>

      {[...Array(8)].map(function (_, i) {
      let moves = i + 1
      let scramble = getRandomSolve(moves)

      return (
      <div>
        <p>Scramble for {moves}-moves cross</p>
        <p>{ scramble }</p>
      </div>
      )})}

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
