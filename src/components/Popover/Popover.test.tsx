import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import React from 'react';
import * as stories from './Popover.stories';
import type { StoryFile } from '../../util/utility-types';

mockResizeObserver();

const { Default } = composeStories(stories);

describe('<Popover />', () => {
  generateSnapshots(stories as StoryFile, {
    getElement: async () => {
      const user = userEvent.setup();
      const triggerButton = await screen.findByRole('button');

      await user.click(triggerButton);
      return triggerButton.parentElement;
    },
  });

  it('should close Popover via escape key', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const triggerButton = screen.getByTestId('popover-trigger-button');
    await user.click(triggerButton);
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument();
  });
});
