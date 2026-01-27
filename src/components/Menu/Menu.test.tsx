import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-webpack5';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockResizeObserver } from 'jsdom-testing-mocks';
import React from 'react';
import { Menu } from './Menu';
import * as stories from './Menu.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

mockResizeObserver();

const { Default, WithLongButtonText } = composeStories(stories);

// Remove the tests with `play` in, b/c it causes the test runner to be unhappy
const { Opened, IconlessOpened, ...staticStories } = stories;

describe('<Menu />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  generateSnapshots(staticStories as StoryFile, {
    getElement: async () => {
      const user = userEvent.setup();
      const triggerButton = await screen.findByRole('button');
      await user.click(triggerButton);
      return triggerButton.parentElement;
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

  it('handles onclick events when there is an href present', async () => {
    // create a spy on the `log` method, and avoid calling it by setting the mock implementation to nothing
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();
    render(<WithLongButtonText />);
    const triggerButton = await screen.findByRole('button');

    await user.click(triggerButton);
    await user.keyboard('{arrowdown}{arrowdown}{arrowdown}');
    await user.keyboard('{enter}');

    expect(consoleSpy).toHaveBeenCalledTimes(1);
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

  it('should allow render prop usage', async () => {
    const user = userEvent.setup();
    render(
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button>{open ? 'open' : 'closed'}</Menu.Button>
            <Menu.Items>
              <Menu.Item>Menu item 1</Menu.Item>
              <Menu.Item>Menu item 2</Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>,
    );
    const triggerButton = await screen.findByRole('button');
    expect(triggerButton).toHaveAccessibleName('closed');
    await user.click(triggerButton);
    expect(triggerButton).toHaveAccessibleName('open');
  });
});
