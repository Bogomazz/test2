import { classMap, ROW_ELEMENT_CLASS } from "./constants.js";

export function drawMaze(maze) {
  maze.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.className = ROW_ELEMENT_CLASS;
    document.querySelector('#maze-container').append(rowElement);
    row.forEach(cellType => {
      const div = document.createElement('div');
      div.className = classMap[cellType];
      rowElement.append(div);
    })
  })
}

