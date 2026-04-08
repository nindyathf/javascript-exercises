const removeFromArray = function(arr, ...itemRemove) {
    return arr.filter(item => {
        itemRemove.includes(item)
        return !itemRemove.includes(item)
    });
};

// Do not edit below this line
module.exports = removeFromArray;
