import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';
import * as stories from './ProgressBar.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<ProgressBar />', () => {
  const warnMock = consoleWarnMockHelper();

  generateSnapshots(stories);
  it('should warn if segment count is larger than 10', () => {
    render(
      <ProgressBar
        label="Lorem Ipsum"
        max={100}
        segmentCount={11}
        segmentValue={1}
      />,
    );
    expect(warnMock).toHaveBeenCalledWith(
      'Progress bar segment count should be capped at 10',
    );
  });
});
