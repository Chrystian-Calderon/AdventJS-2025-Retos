/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
  let filteredGifts = gifts.filter(gift => !gift.includes('#'));
  return filteredGifts;
}

const gifts1 = ['car', 'doll#arm', 'ball', '#train'];
const gifts = filterGifts(gifts1);
console.log(gifts);