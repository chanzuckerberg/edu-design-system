import { getMinValue } from './getMinValue';

describe('getMinValue', () => {
  it.each`
    setOfNumbers              | expectedSmallest
    ${[1, 2, 3]}              | ${1}
    ${[1, 2, 3]}              | ${1}
    ${[3, 3, 3]}              | ${3}
    ${[undefined, 2, 3]}      | ${2}
    ${[1]}                    | ${1}
    ${[]}                     | ${undefined}
    ${[undefined, undefined]} | ${undefined}
  `(
    'returns $expectedSmallest when evaluating $setOfNumbers',
    ({ setOfNumbers = [], expectedSmallest }) => {
      expect(getMinValue(...setOfNumbers)).toEqual(expectedSmallest);
    },
  );
});
