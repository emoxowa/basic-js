const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[-1] == "--discard-next") {
        newArr.splice(i, 1);
      }
      if (newArr[i] == "--discard-next") {
        newArr.splice(i, 2);
      }

      if (newArr[0] == "--discard-prev") {
        newArr.splice(0, 1);
      }
      if (newArr[i] == "--discard-prev") {
        newArr.splice(i - 1, 2);
      }

      if (newArr[newArr.length - 1] == "--double-next") {
        newArr.splice(newArr.length - 1, 1);
      }
      if (newArr[i] == "--double-next") {
        newArr[i] = newArr[i + 1];
        }
        
      if (newArr[0] == "--double-prev") {
        newArr.splice(0, 1);
      }   
      if (newArr[i] == "--double-prev") {
        newArr[i] = newArr[i - 1];
      }
    }
    return newArr;
  } else {
    throw new RangeError("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};

// console.log(transform([1, 2, 3, "--double-next", 4, 5]));
// console.log(transform([1, 2, 3, "--double-prev", 4, 5]));
// console.log(transform(['--discard-prev', 1, 2, 3]));
// console.log(transform([1, 2, 3, "--discard-next"]));
// console.log(transform([1, 2, 3, "--double-next"]));
// console.log(transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5]));
