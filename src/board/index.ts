import { Drawable, BlockColor, drawBox } from '../shared/drawable';
import { createBoard } from '../utils/transformations';

export class Board implements Drawable {
  state: number[][];
  constructor(board?: number[][]) {
    if (!!board) {
      this.state = board;
    } else {
      this.state = createBoard();
    }
  }
  draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.state.length; i++) {
      for (let j = 0; j < this.state.length; j++) {
        drawBox(j, i, this.state[i][j], ctx);
      }
    }
  }

  placePiece(x: number, y: number, block: number[][], color: BlockColor) {
    const newBoard = createBoard();
    for (let i = 0; i < this.state.length; i++) {
      for (let j = 0; j < this.state.length; j++) {
        newBoard[i][j] = this.state[i][j];
      }
    }
    for (let i = 0; i < block.length; i++) {
      for (let j = 0; j < block[i].length; j++) {
        if (y + i < this.state.length && x + j < this.state.length) {
          newBoard[y + i][x + j] = color;
        }
      }
    }
    return newBoard;
  }

  setBoardState(state: number[][]) {
    this.state = state;
  }
}
