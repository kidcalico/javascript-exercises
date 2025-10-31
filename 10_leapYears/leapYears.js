// First Attempt
// 
// const leapYears = function(year) {
//     if (year % 100 === 0 && year % 400 === 0) {
//         return true;
//     } else if (year % 100 === 0) {
//         return false;
//     } else if (year % 4 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// Second attempt after looking at solution, this time I declared constants first
// First time using a grouped `||` statement within an `&&` statement

const leapYears = function(year) {
    const isDivByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivByFourHun = year % 400 === 0;
    
    if (isDivByFour &&
        (!isCentury || isDivByFourHun)
    ) {
        return true;
    } else {
        return false;
    }
};
// Do not edit below this line
module.exports = leapYears;
