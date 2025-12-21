/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
  const numRows = warehouse.length;

  for (const col of drops) {
    for (let row = numRows - 1; row >= 0; row--) {
      if (warehouse[row][col] === '.') {
        warehouse[row][col] = '#';
        break;
      }
    }

  }
  return warehouse;
}

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['#', '#', '.']
  ],
  [0]
))
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#']
  ],
  [0, 2]
))
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
  ],
  [0, 1, 2]
))
/*
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#']
]
*/

console.log(dropGifts(
  [
    ['#', '#'],
    ['#', '#']
  ],
  [0, 0]
))
/*
[
  ['#', '#']
  ['#', '#']
]
*/