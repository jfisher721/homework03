const clamp = require('../src/clamp');

describe('clamp', () => {

  // Test that defaults are applied
  test('Should return value when no min or max', () => {
    expect(clamp(5)).toBe(1);
  });

  // Test that lower clamps are applied
  test('If value is lower than min, should return min', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  // Test that upper clamps are applied
  test('If value is higher than max, should return max', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
});