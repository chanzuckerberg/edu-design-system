import { render } from '@testing-library/react';

import React from 'react';
import {
  describe,
  expect,
  it,
  beforeEach,
  afterEach,
  vi,
  type Mock,
} from 'vitest';
import { VisualPageIndicator } from './VisualPageIndicator';

describe('<VisualPageIndicator />', () => {
  beforeEach(() => {
    // Add in mocks for the calls that can occur in implementation to suppress logging in tests
    const consoleMock = vi.spyOn(console, 'error');
    const consoleWarnMock = vi.spyOn(console, 'warn');
    consoleMock.mockImplementation(() => {});
    consoleWarnMock.mockImplementation(() => {});
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('emits messages when misused', () => {
    let consoleErrorMock: Mock, consoleWarnMock: Mock;
    beforeEach(() => {
      consoleWarnMock = vi.spyOn(console, 'warn');
      consoleErrorMock = vi.spyOn(console, 'error');
      consoleWarnMock.mockImplementation(() => {});
      consoleErrorMock.mockImplementation(() => {});
    });

    it('errors when active page is above range', () => {
      render(<VisualPageIndicator activePage={3} totalPageCount={2} />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(0);
      expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    });

    it('errors when active page is below range', () => {
      render(<VisualPageIndicator activePage={-1} totalPageCount={2} />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(0);
      expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    });

    it('warns when total page count is too small', () => {
      render(<VisualPageIndicator activePage={0} totalPageCount={1} />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(1);
      expect(consoleErrorMock).toHaveBeenCalledTimes(0);
    });
  });
});
