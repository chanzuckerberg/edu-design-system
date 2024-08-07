import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';
import * as stories from './Slider.stories';
import type { StoryFile } from '../../util/utility-types';
import Slider from './';

describe('<Slider />', () => {
  generateSnapshots(stories as StoryFile);
  describe('error throws', () => {
    it('throws an error if told to generate markers, but steps are not integers', () => {
      // expect console error from react, suppressed.
      const consoleErrorMock = jest.spyOn(console, 'error');
      consoleErrorMock.mockImplementation();
      expect(() => {
        render(
          <Slider
            label="Test"
            markers="number"
            max={5}
            min={0}
            step={2}
            value={2}
          />,
        );
      }).toThrow(
        /Number of markers is not an integer. Change step or supply custom markers/,
      );
      consoleErrorMock.mockRestore();
    });
  });
});
