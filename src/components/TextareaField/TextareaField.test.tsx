import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import { TextareaField } from './TextareaField';
import * as stories from './TextareaField.stories';

describe('<TextareaField />', () => {
  generateSnapshots(stories as StoryFile);

  it('can handle custom events when there is content', async () => {
    const onChangeFn = jest.fn();
    const user = userEvent.setup();
    render(
      <TextareaField aria-label="test" onChange={() => onChangeFn()}>
        some content
      </TextareaField>,
    );

    const field = screen.getByRole('textbox');

    expect(field).not.toHaveFocus();

    await userEvent.tab();

    expect(field).toHaveFocus();

    await user.keyboard('{arrowdown}{delete}');

    expect(onChangeFn).toHaveBeenCalled();
  });

  it('will not fire a custom event when there is no content', async () => {
    const onChangeFn = jest.fn();
    const user = userEvent.setup();
    render(<TextareaField aria-label="test" onChange={() => onChangeFn()} />);

    const field = screen.getByRole('textbox');

    expect(field).not.toHaveFocus();

    await userEvent.tab();

    expect(field).toHaveFocus();

    await user.keyboard('{arrowdown}{delete}');

    expect(onChangeFn).not.toHaveBeenCalled();
  });

  it('will not fire a custom event when at max length', async () => {
    const onChangeFn = jest.fn();
    const user = userEvent.setup();
    render(
      <TextareaField
        aria-label="test"
        defaultValue="1234567890"
        maxLength={10}
        onChange={() => onChangeFn()}
      />,
    );

    const field = screen.getByRole('textbox');

    expect(field).not.toHaveFocus();

    await userEvent.tab();

    expect(field).toHaveFocus();

    await user.keyboard('abc');

    expect(onChangeFn).not.toHaveBeenCalled();
  });

  it('will fire a custom event when at max recommended length', async () => {
    const onChangeFn = jest.fn();
    const user = userEvent.setup();
    render(
      <TextareaField
        aria-label="test"
        defaultValue="1234567890"
        onChange={() => onChangeFn()}
        recommendedMaxLength={10}
      />,
    );

    const field = screen.getByRole('textbox');

    expect(field).not.toHaveFocus();

    await userEvent.tab();

    expect(field).toHaveFocus();

    await act(async () => {
      await user.keyboard('abc');
    });

    expect(onChangeFn).toHaveBeenCalled();
  });
});
