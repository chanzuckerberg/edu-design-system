import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from './FiltersPopover.stories';

const { OverflowInteractive } = composeStories(stories);

describe('<Filters />', () => {
  generateSnapshots(stories, {
    getElement: async () => {
      const user = userEvent.setup();
      const toggleFiltersButton = screen.getByRole('button', {
        name: 'Filters',
      });
      if (toggleFiltersButton) {
        await user.click(toggleFiltersButton);
      }
      return toggleFiltersButton.parentElement; // eslint-disable-line testing-library/no-node-access
    },
  });

  it('saves filters appropriately', async () => {
    const user = userEvent.setup();
    render(<OverflowInteractive />);
    const openFiltersButton = screen.getByRole('button', {
      name: 'Filters',
    });
    await user.click(openFiltersButton);

    const checkboxes = screen.getAllByRole('checkbox');
    await user.click(checkboxes[0]);
    await user.click(checkboxes[4]);
    await user.click(checkboxes[9]);
    const applyFiltersButton = screen.getByRole('button', {
      name: 'Apply',
    });
    await user.click(applyFiltersButton);
    expect(openFiltersButton).toHaveAccessibleName('Filters (3)');

    await user.click(openFiltersButton);
    await user.keyboard('{Escape}');
    expect(openFiltersButton).toHaveAccessibleName('Filters (3)');

    await user.click(openFiltersButton);
    const clearAllFiltersButton = screen.getByRole('button', {
      name: 'Clear All',
    });
    await user.click(clearAllFiltersButton);
    expect(openFiltersButton).toHaveAccessibleName('Filters');
  });
});
