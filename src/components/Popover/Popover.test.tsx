import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from './Popover.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

// TODO: needs ResizeObserverMock

const { Default } = composeStories(stories);

describe('<Popover />', () => {
  generateSnapshots(stories as StoryFile);

  it('should close Popover via escape key', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const triggerButton = screen.getByTestId('popover-trigger-button');
    await user.click(triggerButton);
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument();
  });
});
