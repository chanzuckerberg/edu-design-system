import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';
import { NumberIcon } from './NumberIcon';
import * as stories from './NumberIcon.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<NumberIcon />', () => {
  const consoleWarnMock = consoleWarnMockHelper();
  generateSnapshots(stories);
  it('should warn if no valid label', () => {
    render(<NumberIcon number={1} />);
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      'No accessible name for the number icon.',
    );
  });
});
