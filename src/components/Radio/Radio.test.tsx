import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from './Radio.stories';

const { Default } = composeStories(stories);

describe('<Radio />', () => {
  generateSnapshots(stories);

  test('should toggle the radio with space', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const radio = screen.getByRole('radio');
    radio.focus();
    await user.keyboard(' ');
    expect(radio).toBeChecked();
  });
});
