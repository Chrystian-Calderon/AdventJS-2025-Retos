/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
  const numRows = map.length;
  const numCols = map[0].length;
  let start = null;
  const giftLocations = [];

  // Locate the starting point 'S' and all gift locations 'G'
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      if (map[r][c] === 'S') start = [r, c];
      if (map[r][c] === 'G') giftLocations.push([r, c]);
    }
  }

  if (!start) return -1;

  // BFS function to find shortest path from start to all gifts
  function bfs(start) {
    const directions = [
      [1, 0], [-1, 0], [0, 1], [0, -1]
    ];
    const queue = [start];
    const distances = Array.from({ length: numRows }, () => Array(numCols).fill(Infinity));
    distances[start[0]][start[1]] = 0;

    while (queue.length > 0) {
      const [currentRow, currentCol] = queue.shift();

      for (const [dr, dc] of directions) {
        const newRow = currentRow + dr;
        const newCol = currentCol + dc;

        if (newRow < 0 || newRow >= numRows) continue;
        if (newCol < 0 || newCol >= numCols) continue;
        if (map[newRow][newCol] === '#') continue;
        if (distances[newRow][newCol] !== Infinity) continue;

        distances[newRow][newCol] = distances[currentRow][currentCol] + 1;
        queue.push([newRow, newCol]);
      }
    }

    return distances;
  }

  const distancesFromStart = bfs(start);
  let totalSteps = 0;

  for (const [gr, gc] of giftLocations) {
    const dist = distancesFromStart[gr][gc];
    if (dist === Infinity) return -1; // Gift is unreachable
    totalSteps += dist;
  }

  return totalSteps;
}

console.log(minStepsToDeliver([
  ['S', '.', 'G'],
  ['.', '#', '.'],
  ['G', '.', '.']
]))
// Result: 4

/* 
Explanation:
- Minimum distance from S (0,0) to G (0,2): 2 steps
- Minimum distance from S (0,0) to G (2,0): 2 steps
- Total: 2 + 2 = 4
*/

console.log(minStepsToDeliver([
  ['S', '#', 'G'],
  ['#', '#', '.'],
  ['G', '.', '.']
]))
// Result: -1
// (The house at (0,2) is unreachable due to obstacles)

console.log(minStepsToDeliver([['S', 'G']]))
// Result: 1