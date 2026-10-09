import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import { vi, describe, beforeEach, afterEach, expect, it } from 'vitest';

import { Fieldset } from './Fieldset';
import * as stories from './Fieldset.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Fieldset />', () => {
  beforeEach(() => {
    const consoleMock = vi.spyOn(console, 'warn');
    consoleMock.mockImplementation(() => {});
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  generateSnapshots(stories as StoryFile);

  it('passes extra props through to the fieldset element', () => {
    const onFocus = vi.fn();
    render(
      <Fieldset
        aria-describedby="fieldset-help"
        data-testid="fieldset"
        id="fieldset-id"
        onFocus={onFocus}
      >
        <Fieldset.Legend title="Legend" />
        <Fieldset.Items>
          <input type="checkbox" />
        </Fieldset.Items>
      </Fieldset>,
    );

    const fieldset = screen.getByRole('group');
    expect(fieldset).toHaveAttribute('id', 'fieldset-id');
    expect(fieldset).toHaveAttribute('data-testid', 'fieldset');
    expect(fieldset).toHaveAttribute('aria-describedby', 'fieldset-help');

    fireEvent.focus(screen.getByRole('checkbox'));
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  describe('emits warnings when misused', () => {
    it('warns when using subTitle by itself', () => {
      const consoleMock = vi.spyOn(console, 'warn');
      consoleMock.mockImplementation(() => {});

      render(<Fieldset.Legend subTitle="should generate warning" />);

      expect(consoleMock).toHaveBeenCalledTimes(1);
    });
  });
});
