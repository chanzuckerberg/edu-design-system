import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from './Drawer.stories';
const { DefaultInteractive } = composeStories(stories);

describe('<Drawer />', () => {
  generateSnapshots(stories, {
    getElement: async () => {
      const filters = await screen.findByRole('dialog');
      return filters.parentElement; // eslint-disable-line testing-library/no-node-access
    },
  });

  it('shows the dialog when the open dialog button is clicked', async () => {
    const user = userEvent.setup();
    render(<DefaultInteractive />);
    const openDrawerButton = await screen.findByRole('button', {
      name: 'Open Drawer',
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await act(async () => {
      await user.click(openDrawerButton);
    });
    expect(screen.getByRole('dialog')).toBeTruthy();
  });
});
