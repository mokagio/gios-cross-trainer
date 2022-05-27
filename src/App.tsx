import React, { useEffect } from 'react';
import { Cube, Solver } from 'freecube';
import './App.css';
import getRandomSolve from 'rubiks-cross-trainer';
import * as SRVisualizer from 'sr-visualizer';

function App() {
  // FIXME: I'm sure there's a better hook that this that doesn't require the `data-done` hack
  useEffect(() => {
    [...Array(8)].map(function(_, i) {
      let id = `scramble-${i + 1}-front`
      let element = document.getElementById(id)
      // FIXME: Remove once found proper hook for "page loaded"
      if (element?.getAttribute('data-done') == 'true') { return }

      // FIXME: Cope with nullability
      let algorithm = element?.getAttribute('data-algorithm')

      SRVisualizer.cubePNG(element, { algorithm: algorithm, width: 400, height: 400 })
      // FIXME: Remove once found proper hook for "page loaded"
      element?.setAttribute('data-done', 'true')

      const canvas = document.querySelector(`#scramble-${i + 1}-canvas`)
      // free cube doesn't support R2, and the like so here's an hack to adjust
      // the scramble to it
      const moves = algorithm?.split(" ")
        .flatMap(m => m == "R2" ? "R R" : m)
        .flatMap(m => m == "L2" ? "L L" : m)
        .flatMap(m => m == "U2" ? "U U" : m)
        .flatMap(m => m == "D2" ? "D D" : m)
        .flatMap(m => m == "F2" ? "F F" : m)
        .flatMap(m => m == "B2" ? "B B" : m)
        .join(" ")
        .split(" ")
      const cube = new Cube(canvas, moves)
      cube.render(30, -45)
      // cube.shuffle(20, true)
      //
      const solver = new Solver(cube)
      // FIXME: No moves are given here. Plus, I tried it on the GitHub demo
      // site and it does a terrible cross solution 🙄
      console.log(solver.solveCross())
      const s = solver.solve()
    })
  })

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline mb-8">Gio's Cross Trainer</h1>

      {[...Array(8)].map(function (_, i) {
        let moves = i + 1
        let scramble = getRandomSolve(moves)
        let imageNodeId = "scramble-" + moves

        return (
        <div>
          <p>Scramble for {moves}-moves cross</p>
          <p>{scramble}</p>
          <p className="inline-block" id={`${imageNodeId}-front`} data-algorithm={scramble}></p>
          <p className="inline-block" id={`${imageNodeId}-top`} data-algorithm={scramble}></p>
          <canvas className="inline-block align-top" id={`${imageNodeId}-canvas`}></canvas>
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
