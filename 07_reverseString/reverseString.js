// const reverseString = function(str) {
//     let arr = str.split('');
//     let arrReversed = arr.reverse();
//     let stringReversed = arrReversed.join('');
//     return stringReversed;
// };

const reverseString = function(str) {
    return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
