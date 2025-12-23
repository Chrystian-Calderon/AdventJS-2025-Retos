/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
  const numRows = warehouse.length;
  const numCols = warehouse[0].length;

  for (const col of drops) {
    let placedRow = -1;
    for (let row = numRows - 1; row >= 0; row--) {
      if (warehouse[row][col] === '.') {
        warehouse[row][col] = '#';
        placedRow = row;
        break;
      }
    }

    if (placedRow !== -1 && warehouse[placedRow].every(cell => cell === '#')) {
      warehouse.splice(placedRow, 1);
      warehouse.unshift(new Array(numCols).fill('.'));
    }
  }

  return warehouse;
}

console.log(clearGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#']
  ],
  [1]
))
/*
1. The gift falls in column 1
2. Row 2 becomes [# # #].
3. Row 2 is complete, the robot clears it.
6. A new empty row is added at position 0.

Result:
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
]
*/

console.log(clearGifts(
  [
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
  ],
  [0, 1, 2]
))

/*
1. The gift falls in column 0
2. The gift falls in column 1
3. Row 2 becomes [# # #]
4. Row 2 is complete, the robot clears it

For now it looks like this:
[
  ['.', '.', '.']
  ['#', '.', '#'],
  ['#', '.', '#'],
]

5. The gift falls in column 2

Result:
[
  ['.', '.', '#'],
  ['#', '.', '#'],
  ['#', '.', '#']
]
*/
