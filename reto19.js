/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  const routeMap = new Map();
  const destinations = new Set();

  for (const [origin, destination] of routes) {
    routeMap.set(origin, destination);
    destinations.add(destination);
  }

  let start = null;
  for (const [origin] of routes) {
    if (!destinations.has(origin)) {
      start = origin;
      break;
    }
  }

  const result = [];
  while (start !== undefined) {
    result.push(start);
    start = routeMap.get(start);
  }

  return result;
}

console.log(revealSantaRoute([
  ['MEX', 'CAN'],
  ['UK', 'GER'],
  ['CAN', 'UK']
]))
// → ['MEX', 'CAN', 'UK', 'GER']

console.log(revealSantaRoute([
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['UAE', 'JPN'],
  ['CMX', 'HKN']
]))
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

console.log(revealSantaRoute([
  ['STA', 'HYD'],
  ['ESP', 'CHN']
]))
// → ['STA', 'HYD']