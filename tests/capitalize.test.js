const capitalize = require('../functions/capitalize');

test('cap first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});