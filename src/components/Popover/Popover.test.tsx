import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { userEvent } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import * as PopoverStoryFile from './Popover.stories';

const { Default } = composeStories(PopoverStoryFile);

describe('<Popover />', () => {
  generateSnapshots(PopoverStoryFile, {
    // Need to open the popover for snapping
    getElement: (wrapper) => {
      userEvent.click(screen.getByRole('button'));
      return wrapper.baseElement;
    },
  });

  it('should close Popover via escape key', async () => {
    render(<Default />);
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('popover-test')).toBeInTheDocument();
    expect(screen.getByTestId('popover-test')).toHaveAttribute(
      'aria-hidden',
      'false',
    );
    // Needed to focus inside the popover due to animation
    userEvent.tab();
    expect(screen.getByTestId('popover-test')).toHaveFocus();
    userEvent.keyboard('{esc}');
    expect(screen.getByTestId('popover-test')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });
});
