import { data } from '../app/data';
const COLS = 4;
const ROWS = 4;

export const validateCell = (cellIndex: number, prevIndex: number | null) => {
  if (prevIndex !== 0 && prevIndex === undefined) return true;

  const grid = generateGrid(COLS, ROWS);
  const possibleSiblings = getSiblings(prevIndex!);
  const wasFound = findSibling(cellIndex!, possibleSiblings);

  if (wasFound) {
    return true;
  }

  return false;
};

const generateGrid = (cols: number, rows: number) => {
  const grid: any[] = [];

  for (let i = 0; i < rows * cols; i += cols) {
    const row = data.slice(i, cols + i);
    grid.push(row);
  }

  return grid;
};

export const getCoordinates = (index: number) => {
  const indexRow = Math.floor(index / ROWS);
  const indexCol = index - COLS * indexRow;

  return [indexRow, indexCol];
};

export const getSiblings = (index: number) => {
  const [row, column] = getCoordinates(index);

  const possibleSiblings = [
    [row - 1, column],
    [row + 1, column],
    [row, column - 1],
    [row, column + 1],
    [row + 1, column + 1],
    [row + 1, column - 1],
    [row - 1, column + 1],
    [row - 1, column - 1],
  ];

  return possibleSiblings;
};

export const findSibling = (index: number, siblings: any[]) => {
  const [row, column] = getCoordinates(index);

  return siblings.find((coord) => {
    if (coord[0] === row && coord[1] === column) {
      return true;
    }
    return false;
  });
};
