// const removeFromArray = function(arr, item) {
//     const index = arr.indexOf(item);
//     if (index > -1) {
//         arr.splice(index, 1);
//     }
//     return arr;
// };

const removeFromArray = function(arr, ...items) {
    if (arr.indexOf(items > -1)) {
        const newArray = arr.filter(output => !items.includes(output))
        return newArray;
    }
};
// Do not edit below this line
module.exports = removeFromArray;
