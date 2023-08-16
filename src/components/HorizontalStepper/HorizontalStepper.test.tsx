import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';
import { HorizontalStepper } from './HorizontalStepper';
import * as stories from './HorizontalStepper.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<HorizontalStepper />', () => {
  const warnMock = consoleWarnMockHelper();

  generateSnapshots(stories as StoryFile);
  it('should warn if invalid activeIndex is passed', () => {
    const { rerender } = render(
      <HorizontalStepper activeIndex={4} steps={['1', '2', '3']} />,
    );
    rerender(<HorizontalStepper activeIndex={NaN} steps={['1', '2', '3']} />);
    rerender(<HorizontalStepper activeIndex={3} steps={['1', '2', '3']} />);
    expect(warnMock).toHaveBeenCalledTimes(2);
    expect(warnMock).toHaveBeenCalledWith(
      'The active index is an invalid index relative to the number of steps.',
    );
  });
});
