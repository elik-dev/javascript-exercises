const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(...args) {
	return args.reduce((a, b) => a + b, 0);
};

const multiply = function(...args) {
return args.reduce((a, b) => a * b, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  let result = 1;
	for (let i = a; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
