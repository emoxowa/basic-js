const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = [];
  let result = [];
  matrix = matrix.flat();
  for (let i = 0; i < matrix.length; i++) {
    let count = 0;
    if (i == 0 || i == 3 || i == 6) {
      if (matrix[i - 3] == true) { count++ }
      if (matrix[i - 2] == true) { count++ }
      if (matrix[i + 1] == true) { count++ }
      if (matrix[i + 3] == true) { count++ }
      if (matrix[i + 4] == true) { count++ }
    }
    if (i == 1 || i == 4 || i == 7) {
      if (matrix[i - 1] == true) { count++ }
      if (matrix[i - 2] == true) { count++ }
      if (matrix[i - 3] == true) { count++ }
      if (matrix[i - 4] == true) { count++ }
      if (matrix[i + 1] == true) { count++ }
      if (matrix[i + 2] == true) { count++ }
      if (matrix[i + 3] == true) { count++ }
      if (matrix[i + 4] == true) { count++ }
    }
    if (i == 2 || i == 5 || i == 8) {
      if (matrix[i - 1] == true) { count++ }
      if (matrix[i - 3] == true) { count++ }
      if (matrix[i - 4] == true) { count++ }
      if (matrix[i + 2] == true) { count++ }
      if (matrix[i + 3] == true) { count++ }
    }
    arr.push(count);
  }
  for (let i = 0; i < arr.length; i+=3) {
    result.push(arr.slice(i, i+3));
  }
  return result;
}

module.exports = {
  minesweeper
};

// console.log(minesweeper([
// [true, false, false],
// [false, true, false],
// [false, false, false]
// ]));

// console.log(
//   minesweeper([
//     [false, false, false],
//     [false, false, false],
//   ])
// );

