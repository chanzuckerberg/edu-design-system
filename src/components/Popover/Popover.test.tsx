import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Popover } from './Popover';
import * as stories from './Popover.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

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

  it('renders an overlay while open and groups popovers', async () => {
    const user = userEvent.setup();
    render(
      <Popover.Group data-testid="popover-group">
        <Popover>
          <Popover.Button>First</Popover.Button>
          <Popover.Overlay data-testid="popover-overlay" />
          <Popover.Content>First content</Popover.Content>
        </Popover>
        <Popover>
          <Popover.Button>Second</Popover.Button>
          <Popover.Content>Second content</Popover.Content>
        </Popover>
      </Popover.Group>,
    );

    expect(screen.getByTestId('popover-group')).toBeInTheDocument();
    expect(screen.queryByTestId('popover-overlay')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'First' }));

    expect(screen.getByTestId('popover-overlay')).toBeInTheDocument();
    expect(screen.getByText('First content')).toBeInTheDocument();
  });
});
