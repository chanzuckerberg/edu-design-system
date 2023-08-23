import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import { composeStories } from '@storybook/testing-react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from './FiltersDrawer.stories';

const { OverflowInteractive } = composeStories(stories);

describe('<Filters />', () => {
  jest.setTimeout(50000);
  generateSnapshots(stories as StoryFile, {
    getElement: async () => {
      const user = userEvent.setup();
      const toggleFiltersButton = screen.queryByRole('button', {
        name: 'Filters',
      });
      if (toggleFiltersButton) {
        await act(async () => {
          await user.click(toggleFiltersButton);
        });
      }
      const filters = await screen.findByRole('dialog');
      return filters.parentElement; // eslint-disable-line testing-library/no-node-access
    },
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('saves filters appropriately', async () => {
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
    const closeFiltersButton = screen.getByRole('button', {
      name: 'close filters',
    });
    await user.click(closeFiltersButton);
    expect(openFiltersButton).toHaveAccessibleName('Filters (3)');

    await user.click(openFiltersButton);
    const clearAllFiltersButton = screen.getByRole('button', {
      name: 'Clear All',
    });
    await user.click(clearAllFiltersButton);
    expect(openFiltersButton).toHaveAccessibleName('Filters');
  });
});
