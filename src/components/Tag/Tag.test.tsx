import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';

import { Tag } from './Tag';
import * as stories from './Tag.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Tag />', () => {
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

    it('errors when specifying hasOutline', () => {
      render(<Tag hasOutline label="click" />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(0);
      expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    });

    it('warns when variant is used', () => {
      render(<Tag label="click" variant="brand" />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(1);
      expect(consoleErrorMock).toHaveBeenCalledTimes(0);
    });

    it('warns when text is used', () => {
      render(<Tag text="click" />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(1);
      expect(consoleErrorMock).toHaveBeenCalledTimes(0);
    });
  });
});
