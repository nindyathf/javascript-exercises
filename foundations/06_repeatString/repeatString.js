const repeatString = function(a, b) {
    if (b<0) {
        return 'ERROR';
    }
    let teksHasil = "";
    for (let i=0; i<b; i++) {
        teksHasil+= a;
    }
    return teksHasil;
};

// Do not edit below this line
module.exports = repeatString;
