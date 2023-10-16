export interface Point {
  x: number;
  y: number;
}

const dir = [
  [-1,0],
  [1,0],
  [0.-1],
  [0,1]
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {

  // 1. Base case
  // a .off the map
  if (curr.x < 0 || curr.x >= maze[0].length ||
      curr.y < 0 || curr.y >= maze.length) {
        
        return false;
      }

  // b. on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // c. its the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // d. if weve seen it
  if (seen[curr.y][curr.x]) {
    seen[curr.y][curr.x] = true;
    return false;
  }

  // 2. Recurse
  // pre
  path.push(curr);

  // recurse
  for (let i = 0; i < dir.length; i++) {
    const [x,y] = dir[i];
    if (walk(maze, wall, {
      x: curr.x + x,
      y: curr.y + y
    }, end, seen, path)) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}



function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

  const seen: boolean[][]= [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}


const maze = [
  "xxxxxxxxxx x",
  "x        x x",
  "x        x x",
  "x xxxxxxxx x",
  "x          x",
  "x xxxxxxxxxx"
];

solve(maze, "x", {x:10, y:0}, {x:1, y:5})