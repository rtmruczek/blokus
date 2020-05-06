export interface Block {
  occupiedSpaces: number[][];
  upperLeftRealPos?: { x: number; y: number };
  lowerRightRealPos?: { x: number; y: number };
}

export const blocks: Block[] = [
  {
    occupiedSpaces: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1],
    ],
  },
  {
    occupiedSpaces: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
  },
  {
    occupiedSpaces: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
    ],
  },
  {
    occupiedSpaces: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
  },
  {
    occupiedSpaces: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
  },
  {
    occupiedSpaces: [[1, 1, 1, 1, 1]],
  },
  {
    occupiedSpaces: [
      [0, 0, 0, 1],
      [1, 1, 1, 1],
    ],
  },
  {
    occupiedSpaces: [
      [0, 1],
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  },
  {
    occupiedSpaces: [
      [0, 1],
      [1, 1],
      [1, 1],
    ],
  },
  {
    occupiedSpaces: [
      [1, 1],
      [0, 1],
      [1, 1],
    ],
  },
  {
    occupiedSpaces: [[1], [1, 1], [1], [1]],
  },
  {
    occupiedSpaces: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
  },
  {
    occupiedSpaces: [[1, 1, 1, 1]],
  },
  {
    occupiedSpaces: [
      [0, 1],
      [0, 1],
      [1, 1],
    ],
  },
  {
    occupiedSpaces: [
      [1, 0],
      [1, 1],
      [1, 0],
    ],
  },
  {
    occupiedSpaces: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    occupiedSpaces: [
      [1, 1],
      [0, 1, 1],
    ],
  },
  {
    occupiedSpaces: [[1, 1, 1]],
  },
  {
    occupiedSpaces: [
      [1, 0],
      [1, 1],
    ],
  },
  {
    occupiedSpaces: [[1, 1]],
  },
  { occupiedSpaces: [[1]] },
];
