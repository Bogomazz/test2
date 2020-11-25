import { generateLabyrinth } from "./generator.js";
import { drawMaze } from "./presenter.js";

drawMaze(generateLabyrinth(5, 5))