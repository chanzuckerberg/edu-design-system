import {generateSnapshots} from '@chanzuckerberg/story-utils';
import {render} from '@testing-library/react';
import React from 'react';
import {ProjectCard} from './ProjectCard';
import * as stories from './ProjectCard.stories';

describe('<ProjectCard />', () => {
  generateSnapshots(stories);

  it('should warn if number is passed without numberAriaLabel', () => {
    expect(() => {
      render(<ProjectCard number={1} />);
    }).toThrow(
      /You must provide a "numberAriaLabel" for the number icon if a "number" has been passed/,
    );
  });
});
