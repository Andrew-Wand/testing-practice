const reverseString = require('../functions/reverseString');

test('reverse string TEST 1', () => {
    expect(reverseString('hello')).toBe('olleh');
  });