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

  it('falls back to the content width when the border box size is unavailable', () => {
    // Older browsers report only `contentRect`, which the shared mock can't reproduce
    let notify: ResizeObserverCallback = () => {};
    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor(callback: ResizeObserverCallback) {
          notify = callback;
        }
        observe() {}
        disconnect() {}
      },
    );

    try {
      render(
        <InputField
          aria-label="label"
          data-testid="test-input"
          inputWithin={<Button size="sm">Go</Button>}
        />,
      );
      const inputBody = screen.getByTestId('test-input')
        .parentElement as HTMLElement;

      act(() =>
        notify(
          [{ contentRect: { width: 40.5 } } as ResizeObserverEntry],
          {} as ResizeObserver,
        ),
      );

      expect(
        inputBody.style.getPropertyValue('--input-field__input-within-width'),
      ).toBe('41px');
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it('uses the given aria-describedby over the generated one', () => {
    render(
      <InputField
        aria-describedby="custom-description"
        data-testid="test-input"
        fieldNote="A field note"
        label="Label"
      />,
    );

    expect(screen.getByTestId('test-input')).toHaveAttribute(
      'aria-describedby',
      'custom-description',
    );
  });

  it('tracks text when uncontrolled without an onChange handler', async () => {
    const user = userEvent.setup();

    render(
      <InputField
        data-testid="test-input"
        defaultValue="abc"
        label="Label"
        maxLength={10}
      />,
    );
    // the counter splits the count and total across elements, so match on its full text
    const counter = (text: RegExp) =>
      screen.getByText(
        (_, element) =>
          element?.tagName === 'DIV' && text.test(element.textContent ?? ''),
      );
    expect(counter(/^3\s*\/\s*10$/)).toBeInTheDocument();

    await user.type(screen.getByTestId('test-input'), 'de');

    expect(screen.getByTestId('test-input')).toHaveValue('abcde');
    expect(counter(/^5\s*\/\s*10$/)).toBeInTheDocument();
  });

  it('toggles password visibility', async () => {
    const user = userEvent.setup();

    render(
      <InputField
        aria-label="label"
        data-testid="test-input"
        type="password"
      />,
    );
    const input = screen.getByTestId('test-input');

    expect(input).toHaveAttribute('type', 'password');

    await user.click(screen.getByRole('button', { name: 'Show password' }));
    expect(input).toHaveAttribute('type', 'text');

    await user.click(screen.getByRole('button', { name: 'Hide password' }));
    expect(input).toHaveAttribute('type', 'password');
  });
});
