const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let number = 0;
  const cat = "^^";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === cat) {
        number += 1;
      }
    }
  }
  return number;
}

module.exports = {
  countCats
};

// console.log(countCats([
// [0, '^^', 2],
// ['^^', 1, 2]
// [0, 1, '^^'],
// ]));


