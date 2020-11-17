import {PATH, WALL, ENTRANCE, EXIT} from './constants.js';

function getRandomCell(rowsNumber, columnsNumber) {
  let row = Math.floor(Math.random() * rowsNumber);
  row === rowsNumber ? row - 1 : row;

  let column = Math.floor(Math.random() * columnsNumber);
  column === columnsNumber ? column - 1 : column;

  return { row, column };
}

function getPathOrWall() {
  return Math.random() > 0.5 ? PATH : WALL;
}

export function generateLabyrinth(rowsNumber, columnsNumber) {
  const labyrinth = [];
  for (let raw = 0; raw < rowsNumber; raw++) {
    labyrinth[raw] = [];
    for (let column = 0; column < columnsNumber; column++) {
      labyrinth[raw][column] = 0;
    }
  }

  const randomCellForEntrance = getRandomCell(rowsNumber, columnsNumber);
  labyrinth[randomCellForEntrance.row][randomCellForEntrance.column] = ENTRANCE;

  let randomCellForExit
  do {
    randomCellForExit = getRandomCell(rowsNumber, columnsNumber);
  } while (
    randomCellForExit.row === randomCellForEntrance.row 
    && randomCellForExit.column === randomCellForEntrance.column
  );

  labyrinth[randomCellForExit.row][randomCellForExit.column] = EXIT;

  for (let raw = 0; raw < rowsNumber; raw++) {
    for (let column = 0; column < columnsNumber; column++) {
      if (
        labyrinth[raw][column] === 0
      ) {
        labyrinth[raw][column] = getPathOrWall();
      }
    }
  }

  return labyrinth
}