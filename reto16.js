/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  if (gifts.length === 0) return 0;
  if (Math.max(...gifts) > maxWeight) return null;

  const canFitInSleigh = (weight, gift) => weight + gift <= maxWeight;
  const markAsUsed = (used, index) => used[index] = true;
  
  let sleighs = 0;
  const used = new Array(gifts.length).fill(false);

  for (let i = 0; i < gifts.length; i++) {
    if (used[i]) continue;

    let currentWeight = gifts[i];
    markAsUsed(used, i);

    for (let j = i + 1; j < gifts.length; j++) {
      if (!used[j] && canFitInSleigh(currentWeight, gifts[j])) {
        currentWeight += gifts[j];
        markAsUsed(used, j);
      }
    }

    sleighs++;
  }

  return sleighs;
}

console.log(packGifts([2, 3, 4, 1], 5))
// 2 sleighs
// Sleigh 1: 2 + 3 = 5
// Sleigh 2: 4 + 1 = 5

console.log(packGifts([3, 3, 2, 1], 3))
// 3 sleighs
// Sleigh 1: 3
// Sleigh 2: 3
// Sleigh 3: 2 + 1 = 3

console.log(packGifts([1, 1, 1, 1], 2))
// 2 sleighs
// Sleigh 1: 1 + 1 = 2
// Sleigh 2: 1 + 1 = 2

console.log(packGifts([5, 6, 1], 5))
// null
// There is a gift weighing 6 that doesn’t fit

console.log(packGifts([], 10))
// 0 sleighs
// There are no gifts to deliver