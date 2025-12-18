/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
  const numRows = board.length;
  const numCols = board[0].length;

  const directions = [
    { dr: 0, dc: 1 },
    { dr: 1, dc: 0 },
    { dr: 1, dc: 1 },
    { dr: 1, dc: -1 }
  ];

  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      const color = board[r][c];
      if (color === '.') continue;

      for (const { dr, dc } of directions) {
        let count = 1;

        for (let step = 1; step < 4; step++) {
          const nr = r + dr * step;
          const nc = c + dc * step;

          if (nr >= 0 && nr < numRows && nc >= 0 && nc < numCols && board[nr][nc] === color) {
            count++;
          } else {
            break;
          }
        }

        if (count === 4) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(hasFourInARow([
  ['R', '.', '.', '.'],
  ['.', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['.', '.', '.', 'R']
]))
// true → there are 4 red lights in a ↘ diagonal

console.log(hasFourInARow([
  ['.', '.', '.', 'G'],
  ['.', '.', 'G', '.'],
  ['.', 'G', '.', '.'],
  ['G', '.', '.', '.']
]))
// true → there are 4 green lights in a ↙ diagonal

console.log(hasFourInARow([
  ['R', 'R', 'R', 'R'],
  ['G', 'G', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.']
]))
// true → there are 4 red lights in a horizontal line

console.log(hasFourInARow([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
]))
// false → there are no 4 consecutive lights of the same color