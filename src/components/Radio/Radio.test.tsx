import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Radio } from './Radio';

describe('<Radio />', () => {
  it('should toggle the radio with space', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    function ControlledRadio() {
      const [checked, setChecked] = React.useState(false);
      const handleChange = () => {
        setChecked(!checked);
        onChange();
      };

      return (
        <Radio
          aria-label="test-radio"
          checked={checked}
          onChange={handleChange}
        />
      );
    }

    render(<ControlledRadio />);
    const radio = screen.getByRole('radio');
    radio.focus();

    await user.keyboard(' ');

    expect(radio).toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
