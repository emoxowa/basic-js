const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month;
  month = date.getMonth();

  if (date === undefined) {
    return "Unable to determine the time of year!";
  } else {
    if (month >= 0 && month <= 1) {
      return "winter";
    } else if (month >= 2 && month <= 4) {
      return "spring";
    } else if (month >= 5 && month <= 7) {
      return "summer";
    } else if (month >= 8 && month <= 10) {
      return "autumn";
    } else if (month >= 11 && month <= 12) {
      return "winter";
    } 
  }
}
  

module.exports = {
  getSeason
};

// console.log(getSeason(2020, 02, 31));