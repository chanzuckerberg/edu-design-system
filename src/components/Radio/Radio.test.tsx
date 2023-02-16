import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Radio } from './Radio';
import * as stories from './Radio.stories';

const { Default } = composeStories(stories);

describe('<Radio />', () => {
  generateSnapshots(stories);
  test('throws an error if no label or aria-label', () => {
    expect(() => {
      render(<Radio />);
    }).toThrow(/must provide a visible label or aria-label/);
  });

  // eslint-disable-next-line jest/no-disabled-tests
  test.skip('should toggle the radio with space', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const radio = screen.getByRole('radio');
    radio.focus();
    await user.keyboard(' ');
    expect(radio).toBeChecked();
  });
});
