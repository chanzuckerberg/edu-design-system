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
