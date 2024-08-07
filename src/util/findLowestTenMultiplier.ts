import { assertEdsUsage } from './logging';

/**
 * Returns the lowest multiple of 10 that multiplies with all numbers in a list to make them integers.
 * Useful for floating point math.
 * @example
 * findLowestTenMultiplier([-2.212, 0.1, 2.0, 100, 1000.01])
 * // returns 1000
 * @param numbers
 * @returns {number} Lowest multiple of 10.
 */
export function findLowestTenMultiplier(numbers: number[]): number {
  assertEdsUsage(
    [numbers.some((number) => !Number.isFinite(number))],
    'Number should be a real finite number',
    'error',
  );

  let multiplier = 1;
  while (
    numbers.some((number) => !Number.isInteger((number * multiplier) % 1))
  ) {
    multiplier *= 10;
  }
  return multiplier;
}
