/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  warehouse = warehouse.map(row => row.split(''));
  const rows = warehouse.length;
  const cols = warehouse[0].length;
  let unsafeGifts = 0;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (warehouse[i][j] === '*') {
        let isSafe = false;

        for (const [dx, dy] of directions) {
          const x = i + dx;
          const y = j + dy;

          if (x >= 0 && x < rows && y >= 0 && y < cols) {
            if (warehouse[x][y] === '#') {
              isSafe = true;
              break;
            }
          }
        }

        if (!isSafe) {
          unsafeGifts++;
        }
      }
    }
  }

  return unsafeGifts;
}

console.log(findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
])) // ➞ 0

// Todos los regalos están junto a una cámara

console.log(findUnsafeGifts([
  '...',
  '.*.',
  '...'
])) // ➞ 1

// Este regalo no tiene cámaras alrededor

console.log(findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
])) // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

console.log(findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
])) // ➞ 4

// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara
