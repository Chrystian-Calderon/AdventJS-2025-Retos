/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
  const numRows = maze.length;
  const numCols = maze[0].length;
  let start = null;
  let end = null;

  outer: for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      if (maze[r][c] === 'S') start = [r, c];
      if (maze[r][c] === 'E') end = [r, c];
      if (start && end) break outer;
    }
  }

  if (!start || !end) return false;

  const directions = [
    [1, 0], // down
    [-1, 0], // up
    [0, 1], // right
    [0, -1] // left
  ];

  const queue = [start];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [currentRow, currentCol] = queue.shift();
    if (currentRow === end[0] && currentCol === end[1]) return true;

    for (let i = 0; i < directions.length; i++) {
      const dr = directions[i][0];
      const dc = directions[i][1];
      const newRow = currentRow + dr;
      const newCol = currentCol + dc;
      const posKey = `${newRow},${newCol}`;
      if (newRow < 0 || newRow >= numRows) continue;
      if (newCol < 0 || newCol >= numCols) continue;
      if (maze[newRow][newCol] === '#') continue;
      if (visited.has(posKey)) continue;
      visited.add(posKey);
      queue.push([newRow, newCol]);
    }
  }

  return false;
}

console.log(canEscape([
  ['S', '.', '#', '.'],
  ['#', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['#', '#', '#', 'E']
]))
// → true

console.log(canEscape([
  ['S', '#', '#'],
  ['.', '#', '.'],
  ['.', '#', 'E']
]))
// → false

console.log(canEscape([
  ['S', 'E']
]))
// → true

console.log(canEscape([
  ['S', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', 'E']
]))
// → true

console.log(canEscape([
  ['S', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#'],
  ['.', '.', 'E']
]))
// → false