import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';

import { Hr } from './Hr';

import * as stories from './Hr.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Hr />', () => {
  generateSnapshots(stories as StoryFile);

  describe('emits messages when misused', () => {
    let consoleWarnMock: jest.SpyInstance;
    beforeEach(() => {
      // Add in mocks for the calls that can occur in implementation to suppress logging in tests
      consoleWarnMock = jest.spyOn(console, 'warn');
      consoleWarnMock.mockImplementation();
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('warns when Hr instances use size prop', () => {
      render(<Hr size="lg" />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    });

    it('warns when Hr instances use variant prop', () => {
      render(<Hr variant="brand" />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    });
  });
});
