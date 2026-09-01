import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { act, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { InputField } from './InputField';

import * as stories from './InputField.stories';
import type { StoryFile } from '../../../.storybook/utility-types';
import Button from '../Button';

const resizeObserver = mockResizeObserver();

describe('<InputField />', () => {
  generateSnapshots(stories as StoryFile);

  it('handles changes to the text within the component', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

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
    const onChange = vi.fn();
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
    const onChange = vi.fn();
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

  it('reserves trailing space matching the measured width of `inputWithin`', () => {
    render(
      <InputField
        aria-label="label"
        data-testid="test-input"
        inputWithin={
          <Button rank="secondary" size="sm">
            Button with extra text
          </Button>
        }
      />,
    );

    const inputWithin = screen.getByRole('button', {
      name: 'Button with extra text',
    }).parentElement as HTMLElement;
    const inputBody = screen.getByTestId('test-input')
      .parentElement as HTMLElement;

    // Widths beyond the previously fixed 88px maximum are reported in full, and rounded up so a
    // fractional width cannot leave the content overlapping the text area
    resizeObserver.mockElementSize(inputWithin, {
      borderBoxSize: { inlineSize: 139.2, blockSize: 32 },
    });
    act(() => resizeObserver.resize(inputWithin));

    expect(
      inputBody.style.getPropertyValue('--input-field__input-within-width'),
    ).toBe('140px');
  });
});
