const reverseString = function(str) {
    let arr = str.split('');
    let arrReversed = arr.reverse();
    let stringReversed = arrReversed.join('');
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
