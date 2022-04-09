const calculator = require('../functions/calculator');

test('calculator test 1', () => {
    expect(calculator.add(2, 3)).toBe(5)
});
test('calculator test 2', () => {
    expect(calculator.sub(10, 5)).toBe(5)
});

test('calculator test 3', () => {
    expect(calculator.div(10, 5)).toBe(2)
});

test('calculator test 4', () => {
    expect(calculator.mult(2, 3)).toBe(6)
});