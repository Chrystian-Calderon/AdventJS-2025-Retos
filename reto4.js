/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  let match = [...code.matchAll(/\[(.*?)]/g)];
  let pin = '';
  if (match.length < 4) return null;
  for (let i = 0; i < match.length; i++) {
    if (match[i][1] === '<') {
      pin += pin[pin.length - 1];
      continue;
    }
    let digit = Number(match[i][1][0]);
    let plusCount = (match[i][1].match(/\+/g) || []).length;
    let minusCount = (match[i][1].match(/-/g) || []).length;
    digit = (digit + plusCount - minusCount + 10) % 10;
    pin += digit.toString();
  }
  return pin;
}

console.log(decodeSantaPin('[1++][2-][3+][<]'));
// "3144"

console.log(decodeSantaPin('[9+][0-][4][<]'));
// "0944"

console.log(decodeSantaPin('[1+][2-]'));
// null (solo 2 dígitos)