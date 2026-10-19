import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';
import {
  type Mock,
  vi,
  describe,
  beforeEach,
  afterEach,
  it,
  expect,
} from 'vitest';

import { Label } from './Label';

import * as stories from './Label.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Label />', () => {
  generateSnapshots(stories as StoryFile);

  describe('emits messages when misused', () => {
    let consoleWarnMock: Mock;
    beforeEach(() => {
      // Add in mocks for the calls that can occur in implementation to suppress logging in tests
      consoleWarnMock = vi.spyOn(console, 'warn');
      consoleWarnMock.mockImplementation(() => {});
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it('warns when Label instances use required prop', () => {
      render(<Label required text="Label" />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    });

    it('warns when Label instances set required to false', () => {
      render(<Label required={false} text="Label" />);

      expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    });

    it('does not warn when required is omitted', () => {
      render(<Label text="Label" />);

      expect(consoleWarnMock).not.toHaveBeenCalled();
    });
  });
});
