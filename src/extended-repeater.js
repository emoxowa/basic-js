const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let i = 1;
  let j = 1;
  let subAdd = '';
  let subStr = '';
  // преобразование типов
  str = String(str);
  addition = String(options.addition);
  separator = String(options.separator);
  additionSeparator = String(options.additionSeparator);
  repeatTimes = Number(options.repeatTimes);
  additionRepeatTimes = Number(options.additionRepeatTimes);
  // значения по умолчанию
  if (separator == "undefined") {separator = "+" };
  if (additionSeparator == "undefined") {additionSeparator = "|";};
  if (addition == "undefined") { addition = ""};

  while (i < additionRepeatTimes) {
    subAdd += addition + additionSeparator;
    i++;
  }
  subAdd += addition;

  while (j < repeatTimes) {
    subStr += str + subAdd + separator;
    j++;
  }
  subStr += str + subAdd;

  return subStr;
}

module.exports = {
  repeater
};

// console.log(
//   repeater("STRING", {
//     repeatTimes: 3,
//     separator: "**",
//     addition: "PLUS",
//     additionRepeatTimes: 3,
//     additionSeparator: "00",
//   })
// );

// console.log(repeater("la", { repeatTimes: 3 }));