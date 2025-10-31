// First try, couldn't figure out how to make this work for
// subsequent tests
// 
// const removeFromArray = function(arr, item) {
//     const index = arr.indexOf(item);
//     if (index > -1) {
//         arr.splice(index, 1);
//     }
//     return arr;
// };

// Second try, used google a bunch for this one, turns out
// it's the more advanced way to solve this problem??

// const removeFromArray = function(arr, ...items) {
//     if (arr.indexOf(items > -1)) {
//         const newArray = arr.filter(output => !items.includes(output))
//         return newArray;
//     }
// };

// One More time, this time to learn the more basic way to do it

const removeFromArray = function(arr, ...items) {
    const newArray = [];
    arr.forEach((item) => {
        if(!items.includes(item)) {
            newArray.push(item);
        }
    })  ;
    return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;
