import { generateSnapshots } from '@chanzuckerberg/story-utils';

import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from './ButtonDropdown.stories';

const { ComponentWrapped } = composeStories(stories);

describe('<ButtonDropdown />', () => {
  generateSnapshots(stories);

  it('should focus first item on open', () => {
    render(<ComponentWrapped />);
    const triggerButton = screen.getByTestId('trigger-button');
    userEvent.click(triggerButton);
    expect(screen.getByRole('button', { name: 'Item 1' })).toHaveFocus();
  });

  it('should focus next item or cycle to beginning on down and right arrow keys', () => {
    render(<ComponentWrapped />);
    const triggerButton = screen.getByTestId('trigger-button');
    userEvent.click(triggerButton);
    userEvent.keyboard('{arrowdown}');
    expect(screen.getByRole('button', { name: 'Item 2' })).toHaveFocus();
    userEvent.keyboard('{arrowdown}');
    userEvent.keyboard('{arrowright}');
    userEvent.keyboard('{arrowright}');
    expect(screen.getByRole('button', { name: 'Item 1' })).toHaveFocus();
  });

  it('should focus previous item or cycle to end on up and left arrow keys', () => {
    render(<ComponentWrapped />);
    const triggerButton = screen.getByTestId('trigger-button');
    userEvent.click(triggerButton);
    userEvent.keyboard('{arrowup}');
    expect(screen.getByRole('button', { name: 'Item 4' })).toHaveFocus();
    userEvent.keyboard('{arrowleft}');
    expect(screen.getByRole('button', { name: 'Item 3' })).toHaveFocus();
  });
});
