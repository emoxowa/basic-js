const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let l = matrix.length;
  matrix = matrix.flat();
  let length = matrix.length;
  let sum = 0;
  let j = length / l;
  for (let i = 0; i < length; i++) {
    if (matrix[i - j] == 0) {
      continue;
    } 
    sum += matrix[i]
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};

