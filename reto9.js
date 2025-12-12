/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const boardStr = board.trim();
  const rows = boardStr.split('\n');

  const renoIndex = boardStr.indexOf('@');
  const rowWidth = rows[0].length + 1;
  let x = Math.floor(renoIndex / rowWidth);
  let y = renoIndex % rowWidth;

  const boardRows = rows.map(row => row.split(''));

  const movements = {
    'U': { x: -1, y: 0 },
    'D': { x: 1, y: 0 },
    'L': { x: 0, y: -1 },
    'R': { x: 0, y: 1 }
  };

  for (const move of moves) {
    const delta = movements[move];
    if (delta) {
      x += delta.x;
      y += delta.y;
    }

    if (x < 0 || x >= boardRows.length || y < 0 || y >= boardRows[x].length) {
      return 'crash';
    }

    const cell = boardRows[x][y];

    if (cell === '#') return 'crash';
    if (cell === '*') return 'success';
  }

  return 'fail';
}



const board = `
.....
.*#.*
.@...
.....
`

console.log(moveReno(board, 'D'))
// ➞ 'fail' -> se mueve pero no recoge nada

console.log(moveReno(board, 'U'))
// ➞ 'success' -> recoge algo (*) justo encima

console.log(moveReno(board, 'RU'))
// ➞ 'crash' -> choca contra un obstáculo (#)

console.log(moveReno(board, 'RRRUU'))
// ➞ 'success' -> recoge algo (*)

console.log(moveReno(board, 'DD'))
// ➞ 'crash' -> se choca con la parte de abajo del tablero

console.log(moveReno(board, 'UUU'))
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

console.log(moveReno(board, 'RR'))
// ➞ 'fail' -> se mueve pero no recoge nada
