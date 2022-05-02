const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let first = s1.split('');
  let second = s2.split('');
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        second.splice(j, 1);
        if (first.indexOf(first[i]), 1)
        {
          first.splice(first.indexOf(first[i]), 1)
          i--;
        };
        console.log(second);
        count++;
      }
      
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};

// console.log(getCommonCharacterCount("aabcc", "adcaa"));
// console.log(getCommonCharacterCount("abca", "xyzbac"));
