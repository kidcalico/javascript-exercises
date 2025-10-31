const repeatString = function(string, num) {
    // after looking at solution, add ERROR message if num < 0
    if (num < 0) return 'ERROR';
    let finalString = '';
    for (i = 0; i < num; i++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
