import '@testing-library/jest-dom';

beforeAll(() => {
  // Mock out ResizeObserver, otherwise there are a bunch of failing tests
  // "ReferenceError: ResizeObserver is not defined"
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});
