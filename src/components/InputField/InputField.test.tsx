import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import { act, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import React from 'react';
import { InputField } from './InputField';

import * as stories from './InputField.stories';

describe('<InputField />', () => {
  generateSnapshots(stories as StoryFile);

  it('handles changes to the text within the component', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <InputField
        aria-label="label"
        data-testid="test-input"
        onChange={onChange}
      />,
    );
    const input = screen.getByTestId('test-input');
    const testText = 'typing';

    input.focus();

    await act(async () => {
      await user.keyboard(testText);
    });

    expect(onChange).toHaveBeenCalledTimes(testText.length);
  });
});
