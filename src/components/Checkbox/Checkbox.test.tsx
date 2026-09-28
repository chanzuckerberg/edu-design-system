import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Checkbox } from './Checkbox';

import * as stories from './Checkbox.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Checkbox />', () => {
  generateSnapshots(stories as StoryFile);

  it('inline Disabled story renders snapshot', () => {
    const { container } = render(<Checkbox disabled label="Disabled" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should toggle the checkbox with space and trigger onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox aria-label="test-checkbox" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    await user.keyboard(' ');
    expect(checkbox).toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('forwards an object ref to the input', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox aria-label="test-checkbox" ref={ref} />);

    expect(ref.current).toBe(screen.getByRole('checkbox'));
  });

  it('forwards a callback ref to the input', () => {
    const ref = vi.fn();
    render(<Checkbox aria-label="test-checkbox" ref={ref} />);

    expect(ref).toHaveBeenCalledWith(screen.getByRole('checkbox'));
  });

  it('sets the indeterminate state on the input', () => {
    const { rerender } = render(
      <Checkbox aria-label="test-checkbox" indeterminate />,
    );
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.indeterminate).toBe(true);

    rerender(<Checkbox aria-label="test-checkbox" />);
    expect(checkbox.indeterminate).toBe(false);
  });

  it('renders a disabled sub-label', () => {
    render(<Checkbox disabled label="Label" subLabel="More detail" />);

    expect(screen.getByRole('checkbox')).toBeDisabled();
    expect(screen.getByText('More detail')).toBeInTheDocument();
  });
});
