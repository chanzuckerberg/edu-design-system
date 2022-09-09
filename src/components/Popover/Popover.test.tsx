import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { userEvent } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import * as PopoverStoryFile from './Popover.stories';

const { Default } = composeStories(PopoverStoryFile);

describe('<Popover />', () => {
  generateSnapshots(PopoverStoryFile);

  it('should open Popover with trigger button', () => {
    render(<Default />);
    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument();
    const triggerButton = screen.getByTestId('popover-trigger-button');
    userEvent.click(triggerButton);
    expect(screen.getByTestId('popover-content')).toBeInTheDocument();
  });

  it('should close Popover via escape key', async () => {
    render(<Default />);
    const triggerButton = screen.getByTestId('popover-trigger-button');
    userEvent.click(triggerButton);
    userEvent.keyboard('{esc}');
    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument();
  });
});
