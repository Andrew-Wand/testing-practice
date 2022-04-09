const capitalize = require('../functions/capitalize');

test('CAP TEST 1', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('CAP TEST 2', () => {
  expect(capitalize('what is your name?')).toBe('What is your name?');
});

