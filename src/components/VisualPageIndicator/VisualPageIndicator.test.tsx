import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';

import React from 'react';
import { VisualPageIndicator } from './VisualPageIndicator';

import * as stories from './VisualPageIndicator.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<VisualPageIndicator />', () => {
  beforeEach(() => {
    // Add in mocks for the calls that can occur in implementation to suppress logging in tests
    const consoleMock = jest.spyOn(console, 'error');
    const consoleWarnMock = jest.spyOn(console, 'warn');
    consoleMock.mockImplementation();
    consoleWarnMock.mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  generateSnapshots(stories as StoryFile);

  describe('emits messages when misused', () => {
    let consoleErrorMock: jest.SpyInstance, consoleWarnMock: jest.SpyInstance;
    beforeEach(() => {
      consoleWarnMock = jest.spyOn(console, 'warn');
      consoleErrorMock = jest.spyOn(console, 'error');
      consoleWarnMock.mockImplementation();
      consoleErrorMock.mockImplementation();
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
