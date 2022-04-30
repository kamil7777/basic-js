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
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const arr = [];
    const regex = /\b\w/g;
    if (Array.isArray(members)) {
        members.filter(item => typeof item === 'string').forEach(element => {
            arr.push(element.match(regex)[0])
        });
        return arr.reduce((acc, item) => {
            return acc = acc.concat(item.toUpperCase())
        }, []).sort().join('')
    } else {
        return false
    }
}

module.exports = {
    createDreamTeam
};