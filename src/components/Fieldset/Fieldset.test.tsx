import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';

import React from 'react';

import { Fieldset } from './Fieldset';
import * as stories from './Fieldset.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Fieldset />', () => {
  beforeEach(() => {
    const consoleMock = jest.spyOn(console, 'warn');
    consoleMock.mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  generateSnapshots(stories as StoryFile);

  describe('emits warnings when misused', () => {
    it('warns when using subtitle by itself', () => {
      const consoleMock = jest.spyOn(console, 'warn');
      consoleMock.mockImplementation();

      render(<Fieldset.Legend subtitle="should generate warning" />);

      expect(consoleMock).toHaveBeenCalledTimes(1);
    });
  });
});
