import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';

import * as TooltipStoryFile from './Tooltip.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

const { Interactive, InteractiveDisabled } = composeStories(TooltipStoryFile);

describe('<Tooltip />', () => {
  generateSnapshots(TooltipStoryFile as StoryFile);

  it('should close tooltip via escape key', async () => {
    const user = userEvent.setup();
    // disable animation for test
    render(<Interactive duration={0} />);
    const trigger = await screen.findByRole('button');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    await user.hover(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });

  it('should close tooltip via escape key for disabled buttons', async () => {
    const user = userEvent.setup();
    // disable animation for test
    render(<InteractiveDisabled duration={0} />);
    const trigger = await screen.findByTestId('disabled-child-tooltip-wrapper');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
    await user.hover(trigger);
    expect(screen.getByTestId('tooltip-content')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });
});
