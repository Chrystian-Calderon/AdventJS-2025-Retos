/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const leftHands = {};
  const rightHands = {};
  const pairs = [];

  for (let i = 0; i < gloves.length; i++) {
    const { hand, color } = gloves[i];

    if (hand === 'L') {
      if (rightHands[color] && rightHands[color].length > 0) {
        const rightIndex = rightHands[color].shift();
        pairs.push({ color, completionIndex: i });
      } else {
        if (!leftHands[color]) leftHands[color] = [];
        leftHands[color].push(i);
      }
    } else {
      if (leftHands[color] && leftHands[color].length > 0) {
        const leftIndex = leftHands[color].shift();
        pairs.push({ color, completionIndex: i });
      } else {
        if (!rightHands[color]) rightHands[color] = [];
        rightHands[color].push(i);
      }
    }
  }

  return pairs.map(pair => pair.color);
}


const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

console.log(matchGloves(gloves));
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

console.log(matchGloves(gloves2));
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

console.log(matchGloves(gloves3));
// []

const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

console.log(matchGloves(gloves4));
// ['red', 'green']