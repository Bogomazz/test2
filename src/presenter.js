import { classMap, ROW_ELEMENT_CLASS } from "./constants.js";

export function drawMaze(maze) {
  document.body.style.background = 'red';
  maze.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.className = ROW_ELEMENT_CLASS;
    let container = document.querySelector('#maze-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'maze-container';
      document.body.append(container)
    }
    container.append(rowElement);
    row.forEach(cellType => {
      const div = document.createElement('div');
      div.className = classMap[cellType];
      rowElement.append(div);
    })
  })
}

