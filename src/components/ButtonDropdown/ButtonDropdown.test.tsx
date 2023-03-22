import { generateSnapshots } from '@chanzuckerberg/story-utils';

import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from './ButtonDropdown.stories';

const { ComponentWrapped } = composeStories(stories);

describe('<ButtonDropdown />', () => {
  generateSnapshots(stories);

  it('should focus first item on open', async () => {
    const user = userEvent.setup();
    render(<ComponentWrapped />);
    const triggerButton = screen.getByTestId('trigger-button');
    await user.click(triggerButton);
    expect(screen.getByRole('button', { name: 'Item 1' })).toHaveFocus();
    expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('should close with esc key', async () => {
    const user = userEvent.setup();
    render(<ComponentWrapped />);
    const triggerButton = screen.getByTestId('trigger-button');
    await user.click(triggerButton);
    await user.keyboard('{Escape}');
    expect(triggerButton).toHaveFocus();
    expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('should focus next item or cycle to beginning on down and right arrow keys', async () => {
    const user = userEvent.setup();
    render(<ComponentWrapped />);
    const triggerButton = screen.getByTestId('trigger-button');
    await user.click(triggerButton);
    await user.keyboard('{arrowdown}');
    expect(screen.getByRole('button', { name: 'Item 2' })).toHaveFocus();
    await user.keyboard('{arrowdown}');
    await user.keyboard('{arrowright}');
    await user.keyboard('{arrowright}');
    expect(screen.getByRole('button', { name: 'Item 1' })).toHaveFocus();
  });

  it('should focus previous item or cycle to end on up and left arrow keys', async () => {
    const user = userEvent.setup();
    render(<ComponentWrapped />);
    const triggerButton = screen.getByTestId('trigger-button');
    await user.click(triggerButton);
    await user.keyboard('{arrowup}');
    expect(screen.getByRole('button', { name: 'Item 4' })).toHaveFocus();
    await user.keyboard('{arrowleft}');
    expect(screen.getByRole('button', { name: 'Item 3' })).toHaveFocus();
  });
});
