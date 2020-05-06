export function rotateClockwise(blocks: number[][]): number[][] {
  let newArray: number[][] = new Array(5)
    .fill(null)
    .map(() => new Array(5).fill(null).map(() => 0));

  for (let row = 0; row < blocks.length; row++) {
    for (let col = 0; col < blocks[row].length; col++) {
      const newCol = blocks[row].length - row - 1;
      const newRow = col;
      newArray[newRow][newCol] = blocks[row][col];
    }
  }
  return newArray;
}

export function createBoard(size = 20) {
  return new Array(size)
    .fill(null)
    .map(() => new Array(size).fill(null).map(() => 0));
}
