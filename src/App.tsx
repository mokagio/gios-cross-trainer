import React, { useEffect } from 'react';
import './App.css';
import getRandomSolve from 'rubiks-cross-trainer';
import * as SRVisualizer from 'sr-visualizer';

function App() {
  // FIXME: I'm sure there's a better hook that this that doesn't require the `data-done` hack
  useEffect(() => {
    [...Array(8)].map(function(_, i) {
      let id = `scramble-${i + 1}`
      let element = document.getElementById(id)
      // FIXME: Remove once found proper hook for "page loaded"
      if (element?.getAttribute('data-done') == 'true') { return }

      let algorithm = element?.getAttribute('data-algorithm')

      SRVisualizer.cubePNG(element, { algorithm: algorithm })
      // FIXME: Remove once found proper hook for "page loaded"
      element?.setAttribute('data-done', 'true')
    })
  })

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Gio's Cross Trainer</h1>

      {[...Array(8)].map(function (_, i) {
        let moves = i + 1
        let scramble = getRandomSolve(moves)
        let imageNodeId = "scramble-" + moves

        return (
        <div>
          <p>Scramble for {moves}-moves cross</p>
          <p>{scramble}</p>
          <p id={imageNodeId} data-algorithm={scramble}></p>
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
