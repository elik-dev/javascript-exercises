const sumAll = function(a, b) {
    if (
        a < 0 
        || b < 0
        || typeof (a + b) !== 'number'
        ) {
        return "ERROR";
    }
    let minValue = Math.min(a, b);
    let maxValue = Math.max(a, b);
    let output = 0;
    for (let i = minValue; i <= maxValue; i++) {
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
