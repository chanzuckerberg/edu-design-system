import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { userEvent } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import * as stories from './FiltersPopover.stories';

const { OverflowInteractive } = composeStories(stories);

describe('<Filters />', () => {
  generateSnapshots(stories, {
    getElement: async () => {
      const toggleFiltersButton = screen.getByRole('button', {
        name: 'Filters',
      });
      if (toggleFiltersButton) {
        userEvent.click(toggleFiltersButton);
      }
      return toggleFiltersButton.parentElement; // eslint-disable-line testing-library/no-node-access
    },
  });

  it('saves filters appropriately', () => {
    render(<OverflowInteractive />);
    const openFiltersButton = screen.getByRole('button', {
      name: 'Filters',
    });
    userEvent.click(openFiltersButton);

    const checkboxes = screen.getAllByRole('checkbox');
    userEvent.click(checkboxes[0]);
    userEvent.click(checkboxes[4]);
    userEvent.click(checkboxes[9]);
    const applyFiltersButton = screen.getByRole('button', {
      name: 'Apply',
    });
    userEvent.click(applyFiltersButton);
    expect(openFiltersButton).toHaveAccessibleName('Filters (3)');

    userEvent.click(openFiltersButton);
    userEvent.keyboard('{esc}');
    expect(openFiltersButton).toHaveAccessibleName('Filters (3)');

    userEvent.click(openFiltersButton);
    const clearAllFiltersButton = screen.getByRole('button', {
      name: 'Clear All',
    });
    userEvent.click(clearAllFiltersButton);
    expect(openFiltersButton).toHaveAccessibleName('Filters');
  });
});
