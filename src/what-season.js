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
function getSeason(date = 0) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const obj = {
        spring: [2, 3, 4],
        summer: [5, 6, 7],
        autumn: [8, 9, 10],
        winter: [0, 1, 11],
    }
    if (date instanceof Date) {
        for (let i of Object.values(obj)) {
            if (i.includes(date.getMonth())) {
                for (let j of Object.keys(obj)) {
                    if (obj[j] === i) {
                        return j;
                    }
                }
            }
        }
    } else if (date === undefined) {
        return "Invalid date!";
    } else if (arguments.length === 0) {
        return 'Unable to determine the time of year!';
    } else {
        return "Invalid date!";
    }
}

module.exports = {
    getSeason
};