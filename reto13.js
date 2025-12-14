/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  const rows = factory.length;
  const cols = factory[0].length;

  const directions = {
    '>': [0, 1],
    '<': [0, -1],
    '^': [-1, 0],
    'v': [1, 0]
  };

  let row = 0, col = 0;
  const visited = new Set();
  visited.add(`${row},${col}`);

  while (true) {
    const cell = factory[row][col];

    if (cell === '.') return 'completed';

    if (!directions[cell]) return 'broken';

    const [dr, dc] = directions[cell];
    row += dr;
    col += dc;

    if (row < 0 || row >= rows || col < 0 || col >= cols) return 'broken';

    const key = `${row},${col}`;
    if (visited.has(key)) return 'loop';

    visited.add(key);
  }
}

console.log(runFactory([
  '>>.'
])) // 'completed'

console.log(runFactory([
  '>>>'
])) // 'broken'

console.log(runFactory([
  '>><'
])) // 'loop'

console.log(runFactory([
  '>>v',
  '..<'
])) // 'completed'

console.log(runFactory([
  '>>v',
  '<<<'
])) // 'broken'

console.log(runFactory([
  '>v.',
  '^..'
])) // 'completed'

console.log(runFactory([
  'v.',
  '^.'
])) // 'loop'