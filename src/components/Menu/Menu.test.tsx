import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import * as stories from './Menu.stories';

const { Default } = composeStories(stories);

describe('<Menu />', () => {
  generateSnapshots(stories, {
    getElement: async () => {
      const user = userEvent.setup();
      const triggerButton = await screen.findByRole('button');
      await user.click(triggerButton);
      return triggerButton.parentElement; // eslint-disable-line testing-library/no-node-access
    },
  });

  it('should allow for keyboard navigation to enabled menu items', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const triggerButton = await screen.findByRole('button');

    await user.click(triggerButton);
    const menuContainer = await screen.findByRole('menu');

    // a11y requires attaching the control dynamically, so confirm
    expect(triggerButton.getAttribute('aria-controls')).toEqual(
      menuContainer.getAttribute('id'),
    );

    expect(menuContainer.getAttribute('aria-activedescendant')).toBeNull();

    await user.keyboard('{arrowdown}');

    expect(menuContainer.getAttribute('aria-activedescendant')).not.toBeNull();
  });

  it('should close menu on keyboard escape key', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const triggerButton = await screen.findByRole('button');

    await user.click(triggerButton);
    const menuContainer = await screen.findByRole('menu');

    // a11y attaches the control dynamically, so confirm
    expect(triggerButton.getAttribute('aria-controls')).toEqual(
      menuContainer.getAttribute('id'),
    );

    await user.keyboard('{Escape}');

    expect(screen.queryByTestId('menu-content')).not.toBeInTheDocument();
  });
});
