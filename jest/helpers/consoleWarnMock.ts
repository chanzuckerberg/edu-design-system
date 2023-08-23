/**
 * Purpose: mocks console.warn() to prevent unnecessary pollution of the console when running tests.
 * Usage:
 *   Use only when console.warn() messages are completely expected, since they might want to be seen for debugging.
 *   Call function at top level of test files, and in `describe` blocks. Not in `it` or `test` blocks.
 * ```
 * import consoleWarnMockHelper from 'jest/helpers/consoleWarnMock';
 *
 * consoleWarnMockHelper(); // if want to mock console.warn() for every test
 * ```
 *
 * ```
 * describe('some test group', () => {
 *   consoleWarnMockHelper(); // if want to mock console.warn() for every test in this describe block and the mock is not needed
 * })
 * ```
 *
 * ```
 * describe('some test group 2', () => {
 *   const consoleWarnMock = consoleWarnMockHelper(); // if want to mock console.warn() for every test in this describe block and the mock is needed for assertions
 *   expect(consoleWarnMock).toHaveBeenCalledWith("some console warning message");
 * })
 * ```
 */
export default function () {
  const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation();
  beforeEach(() => {
    consoleWarnMock.mockClear();
  });
  afterAll(() => {
    consoleWarnMock.mockRestore();
  });
  return consoleWarnMock;
}
