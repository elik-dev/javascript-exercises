const fibonacci = function(orderNum) {
    if (orderNum < 0) return "OOPS";
    if (orderNum === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < orderNum; i++) {
        const temp = b;
        b += a;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
