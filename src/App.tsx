import React from 'react';
import './App.css';

import { Board } from './board';
import { Player } from './player';
import { Drawable } from './shared/drawable';

function App() {
  const board = new Board();
  const player = new Player();
  const drawables: Drawable[] = [board, player];

  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  React.useEffect(() => {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;
  }, []);

  React.useEffect(() => {
    if (!!ctx) {
      drawables.forEach((drawable) => {
        drawable.draw(
          canvas as HTMLCanvasElement,
          ctx as CanvasRenderingContext2D
        );
      });
    }
    if (!!canvas) {
      canvas.addEventListener('click', (e) => {
        const mousePos = {
          x: e.clientX - (canvas as HTMLCanvasElement).offsetLeft,
          y: e.clientY - (canvas as HTMLCanvasElement).offsetTop,
        };
        const blockClicked = player.onPieceClick(mousePos);
        if (!!blockClicked) {
          console.log(blockClicked);
        }
      });
    }
  }, [ctx, canvas]);

  return (
    <div className="App">
      <canvas
        id="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
    </div>
  );
}

export default App;
