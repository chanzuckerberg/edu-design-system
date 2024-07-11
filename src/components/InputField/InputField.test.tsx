import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import React from 'react';
import { InputField } from './InputField';

import * as stories from './InputField.stories';
import type { StoryFile } from '../../util/utility-types';

// rest-ing out password stories to avoid incorrect act() warnings after storybook 8 upgrade
const { Password, PasswordWithShownText, ...otherStories } = stories;

describe('<InputField />', () => {
  generateSnapshots(otherStories as StoryFile);

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

    await user.keyboard(testText);

    expect(onChange).toHaveBeenCalledTimes(testText.length);
  });

  it('will not fire when maxLength is reached', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const testText = 'typing';

    render(
      <InputField
        aria-label="label"
        data-testid="test-input"
        defaultValue={testText}
        maxLength={6}
        onChange={onChange}
      />,
    );
    const input = screen.getByTestId('test-input');

    input.focus();
    await user.keyboard(testText);

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('will fire when recommendedMaxLength is reached', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const testText = 'typing';

    render(
      <InputField
        aria-label="label"
        data-testid="test-input"
        defaultValue={testText}
        onChange={onChange}
        recommendedMaxLength={6}
      />,
    );
    const input = screen.getByTestId('test-input');

    input.focus();
    await user.keyboard(testText);

    expect(onChange).toHaveBeenCalledTimes(testText.length);
  });
});
