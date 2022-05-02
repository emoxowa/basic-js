const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == "string") {
        let newLetter = members[i].trim().slice(0, 1).toUpperCase();
        teamName.push(newLetter);
      }
    }
    return teamName.sort().join("");
  } else {
    return false;
  };
  }

module.exports = {
  createDreamTeam
};



// console.log(createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]));
// console.log(createDreamTeam(["Olivia", 1111, "Lily", "Oscar", true, null]));
//   console.log(createDreamTeam([
//     ['David Abram'],
//     ['Robin Attfield'],
//     'Thomas Berry',
//     ['Paul R.Ehrlich'],
//     'donna Haraway',
//     ' BrIaN_gOodWiN  ',
//     'Erazim Kohak',
//     '  val_plumwood',
//   ]));
