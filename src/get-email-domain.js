const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = email.split('');
  email = email.slice(email.lastIndexOf("@") + 1, email.length);
  return email.join('');
}

module.exports = {
  getEmailDomain
};

// console.log(getEmailDomain("prettyandsimple@example.com"));