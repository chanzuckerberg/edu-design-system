import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import * as stories from './Filters.stories';

const { OverflowInteractive } = composeStories(stories);
const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
beforeEach(() => {
  consoleLogMock.mockClear();
});
afterAll(() => {
  consoleLogMock.mockRestore();
});

describe('<Filters />', () => {
  generateSnapshots(stories);

  it('saves filters appropriately', () => {
    render(<OverflowInteractive />);
    const openFiltersButton = screen.getByRole('button', {
      name: 'Filters',
    });
    fireEvent.click(openFiltersButton);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[4]);
    fireEvent.click(checkboxes[9]);
    const applyFiltersButton = screen.getByRole('button', {
      name: 'Apply',
    });
    fireEvent.click(applyFiltersButton);
    expect(openFiltersButton).toHaveAccessibleName('Filters (3)');

    fireEvent.click(openFiltersButton);
    const closeFiltersButton = screen.getByRole('button', {
      name: 'close filters',
    });
    fireEvent.click(closeFiltersButton);
    expect(openFiltersButton).toHaveAccessibleName('Filters (3)');

    fireEvent.click(openFiltersButton);
    const clearAllFiltersButton = screen.getByRole('button', {
      name: 'Clear All',
    });
    fireEvent.click(clearAllFiltersButton);
    expect(openFiltersButton).toHaveAccessibleName('Filters');
  });
});
