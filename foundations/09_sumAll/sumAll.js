const sumAll = function(a, b) {
    min = Math.min(a, b)
    max = Math.max(a, b)
    let total = 0;
    for (i=min; i<= max; i++) {
        total += i
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
