import { findLowestTenMultiplier } from './findLowestTenMultiplier';

describe('findLowestTenMultiplier', () => {
  describe('error throws', () => {
    // expect console error from react, suppressed.
    const consoleErrorMock = jest.spyOn(console, 'error');
    consoleErrorMock.mockImplementation();
    it('throws an error with NaN', () => {
      () => {
        expect(findLowestTenMultiplier([NaN])).toThrow(
          /Number should be a real finite number/,
        );
      };
    });
    it('throws an error with Infinity', () => {
      () => {
        expect(findLowestTenMultiplier([Infinity])).toThrow(
          /Number should be a real finite number/,
        );
      };
    });
    consoleErrorMock.mockRestore();
  });
  it('works with negative numbers, positive numbers, zero, and numbers between negative one and one', () => {
    expect(
      findLowestTenMultiplier([-2.212, -0.01, 0.1, 2.0, 100, 1000.01]),
    ).toBe(1000);
  });
});
