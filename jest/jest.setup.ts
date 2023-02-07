import '@testing-library/jest-dom';
import { format } from 'util';

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
