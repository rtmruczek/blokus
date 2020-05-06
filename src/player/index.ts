import { blocks, Block } from '../constants/blocks';
import { Drawable, drawBox, BlockColor } from '../shared/drawable';
import { rotateClockwise } from '../utils/transformations';

export class Player implements Drawable {
  blocks: Block[];
  color: BlockColor;
  startX = 41;
  startY = 1;
  constructor(color: BlockColor = BlockColor.Yellow) {
    this.blocks = blocks.map((block) => ({
      ...block,
      occupiedSpaces: block.occupiedSpaces.filter(
        (row) => row.indexOf(1) !== -1
      ),
    }));
    this.color = color;
  }

  public onPieceClick(mousePos: { x: number; y: number }) {
    let blockClicked = null;
    this.blocks.forEach((block) => {
      if (handleClick(mousePos, block)) {
        blockClicked = block;
      }
    });
    return blockClicked;
  }

  public draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    const blockSize = 20;
    let modX = this.startX;
    let modY = this.startY;
    this.blocks.forEach((block, index) => {
      for (let i = 0; i < block.occupiedSpaces.length; i++) {
        for (let j = 0; j < block.occupiedSpaces[0].length; j++) {
          if (i === 0 && j === 0) {
            block.upperLeftRealPos = {
              x: (j + modX) * blockSize,
              y: (i + modY) * blockSize,
            };
          }
          if (
            i === block.occupiedSpaces.length - 1 &&
            j === block.occupiedSpaces[0].length - 1
          ) {
            block.lowerRightRealPos = {
              x: (j + modX) * blockSize + blockSize,
              y: (i + modY) * blockSize + blockSize,
            };
          }
          if (block.occupiedSpaces[i][j] === 1) {
            drawBox(j + modX, i + modY, this.color, ctx, 20);
          }
        }
      }
      modX += 7;
      if ((index + 1) % 6 === 0) {
        modX = 41;
        modY += 6;
      }
    });
  }
}

function handleClick(
  mousePos: { x: number; y: number },
  block: Block
): boolean {
  if (!block.upperLeftRealPos || !block.lowerRightRealPos) {
    throw new Error('no positions defined for block');
  }
  if (
    mousePos.x >= block.upperLeftRealPos.x &&
    mousePos.x <= block.lowerRightRealPos.x &&
    mousePos.y >= block.upperLeftRealPos.y &&
    mousePos.y <= block.lowerRightRealPos.y
  ) {
    return true;
  }
  return false;
}
