/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  const rows = board.length;
  const cols = board[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      const color = board[r][c];
      if (color !== '.' &&
        color === board[r][c + 1] &&
        color === board[r][c + 2] &&
        color === board[r][c + 3]) {
        return true;
      }
    }
  }

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r <= rows - 4; r++) {
      const color = board[r][c];
      if (color !== '.' &&
        color === board[r + 1][c] &&
        color === board[r + 2][c] &&
        color === board[r + 3][c]) {
        return true;
      }
    }
  }

  return false;
}

console.log(hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
]))
// true → there are 4 red lights horizontally

console.log(hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
]))
// true → there are 4 green lights vertically

console.log(hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
]))
// false → there are no 4 lights of the same color in a row