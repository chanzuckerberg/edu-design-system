import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { userEvent } from '@storybook/testing-library';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import * as PopoverStoryFile from './Popover.stories';

const { Default } = composeStories(PopoverStoryFile);
PopoverStoryFile.default.args = {
  isActive: true,
};

describe('<Popover />', () => {
  generateSnapshots(PopoverStoryFile);

  it('should close Popover via escape key', async () => {
    render(<Default isActive />);
    expect(screen.getByTestId('popover-test')).toBeInTheDocument();
    expect(screen.getByTestId('popover-test')).toHaveAttribute(
      'aria-hidden',
      'false',
    );
    userEvent.keyboard('{esc}');
    expect(screen.getByTestId('popover-test')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });
});
