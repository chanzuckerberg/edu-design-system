import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';
import { ProjectCard } from './ProjectCard';
import * as stories from './ProjectCard.stories';
import consoleWarnMockHelper from '../../../jest/helpers/consoleWarnMock';

describe('<ProjectCard />', () => {
  const consoleWarnMock = consoleWarnMockHelper();

  generateSnapshots(stories);

  it('should warn if number is passed without numberAriaLabel', () => {
    render(<ProjectCard number={1} />);
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      'You must provide a "numberAriaLabel" for the number icon if a "number" has been passed',
    );
  });
});
