import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';
import * as stories from './Slider.stories';
import Slider from './';

describe('<Slider />', () => {
  generateSnapshots(stories);
  it('throws an error if no label or aria-label', () => {
    // expect console error from react, suppressed.
    const consoleErrorMock = jest.spyOn(console, 'error');
    consoleErrorMock.mockImplementation();
    expect(() => {
      render(<Slider max={5} min={0} step={1} value={2} />);
    }).toThrow(/You must provide a visible label or aria-label/);
    consoleErrorMock.mockRestore();
  });
});
