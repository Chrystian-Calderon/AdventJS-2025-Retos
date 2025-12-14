/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  let key = Object.keys(workshop);
  for (let i = 0; i < key.length; i++) {
    if (workshop[key[i]] === gift) {
      return [key[i]];
    } else if (typeof workshop[key[i]] === 'object') {
      const path = findGiftPath(workshop[key[i]], gift);
      if (path.length > 0) {
        return [key[i], ...path];
      }
    }
  }
  return [];
}


const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

console.log(findGiftPath(workshop, 'train'))
// ➜ ['storage', 'shelf', 'box1']

console.log(findGiftPath(workshop, 'switch'))
// ➜ ['storage', 'shelf', 'box2']

console.log(findGiftPath(workshop, 'car'))
// ➜ ['storage', 'box']

console.log(findGiftPath(workshop, 'doll'))
// ➜ ['gift']

console.log(findGiftPath(workshop, 'plane'))
// ➜ []