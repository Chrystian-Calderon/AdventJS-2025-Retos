/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  const tree = [];
  let globalPosition = 0;

  for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat(height - i);
    const width = i * 2 - 1;
    let row = '';

    for (let j = 0; j < width; j++) {
      globalPosition++;
      if (globalPosition % frequency === 0) {
        row += ornament;
      } else {
        row += '*';
      }
    }

    tree.push(spaces + row);
  }

  tree.push(' '.repeat(height - 1) + '#');

  return tree.join('\n');
}

console.log(drawTree(5, 'o', 2))
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

console.log(drawTree(3, '@', 3))
//   *
//  *@*
// *@**@
//   #

console.log(drawTree(4, '+', 1))
//    +
//   +++
//  +++++
// +++++++
//    #