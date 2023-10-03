/**
 * Get the smallest number from a partially-defined set of numbers.
 *
 * @param args list of numbers, some of which may be undefined
 * @returns the smallest number from the set, or undefined if all args are undefined
 */
export function getMinValue(
  ...args: (number | undefined)[]
): number | undefined {
  const minValue = Math.min.apply(
    undefined,
    args.filter((v) => v !== undefined) as number[],
  );

  return Math.abs(minValue) === Infinity ? undefined : minValue;
}
