export interface Drawable {
  draw: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void;
}

export enum BlockColor {
  Open = 0,
  Yellow = 1,
  Red = 2,
  Green = 3,
  Blue = 4,
}

export function drawBox(
  x: number,
  y: number,
  color: BlockColor,
  ctx: CanvasRenderingContext2D,
  size = 40
) {
  switch (color) {
    case BlockColor.Yellow:
      ctx.fillStyle = 'yellow';
      break;
    case BlockColor.Blue:
      ctx.fillStyle = 'blue';
      break;
    case BlockColor.Red:
      ctx.fillStyle = 'red';
      break;
    case BlockColor.Green:
      ctx.fillStyle = 'green';
      break;
  }

  ctx.fillRect(x * size, y * size, size - 5, size - 5);
  ctx.fillStyle = 'black';
}
