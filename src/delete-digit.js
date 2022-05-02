const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let b = String(n);

  for (let i = 0; i < b.length; i++) {
    if (max < b.replace(b[i], '')) {
      max = b.replace(b[i], '');
    } 
    }

  let c = Number(max);
  return c;
  }


module.exports = {
  deleteDigit
};

// console.log(deleteDigit(352));
// console.log(deleteDigit(1001));