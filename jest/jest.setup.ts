import '@testing-library/jest-dom';
import { format } from 'util';

// Globally mock svg4everybody. It's used to support IE in Icons
// and throws errors when used in tests.
jest.mock('svg4everybody');

// nanoid generates unique string IDs; we mock out that randomness to ensure
// consistent snapshots in tests.
jest.mock('nanoid', () => {
  return { nanoid: () => 'mock-id' };
});

/**
 * Ensure `console.error` calls throw an error in tests
 */
function throwOnConsoleError() {
  console.error = function (...args: unknown[]) {
    const [firstArg, ...restArgs] = args;

    if (firstArg instanceof Error) {
      throw firstArg;
    }

    throw new Error(format(firstArg, ...restArgs));
  };
}

throwOnConsoleError();
