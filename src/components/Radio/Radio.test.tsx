import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Radio } from './Radio';
import * as stories from './Radio.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Radio />', () => {
  generateSnapshots(stories as StoryFile);

  test('should toggle the radio with space', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

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
