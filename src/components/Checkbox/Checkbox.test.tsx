import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Checkbox } from './Checkbox';
import * as stories from './Checkbox.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Checkbox />', () => {
  generateSnapshots(stories as StoryFile);

  test('Disabled story renders snapshot', () => {
    const { container } = render(<Checkbox disabled label="Disabled" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should toggle the checkbox with space and trigger onChange', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(<Checkbox aria-label="test-checkbox" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    await user.keyboard(' ');
    expect(checkbox).toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
