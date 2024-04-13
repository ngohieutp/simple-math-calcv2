var ops = require('simple-calc-ops');

function plus(a, b) {
  return ops.sum(a, b);
}

function subtract(a, b) {
  return ops.minus(a, b);
}

function multiply(a, b) {
  return ops.mul(a, b);
}

function divide(a, b) {
  return ops.div(a, b);
}

module.exports = {
	plus,
	subtract,
	multiply,
	divide
}