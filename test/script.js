const test = require('node:test');
const { strictEqual } = require('node:assert/strict');
const simpleMath = require('simple-math-calcv2');

test('eq', () => {
    strictEqual(simpleMath.subtract(2, 1), 1);
});