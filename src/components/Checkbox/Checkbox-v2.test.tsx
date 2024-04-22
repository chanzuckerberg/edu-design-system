import { generateSnapshots } from '@chanzuckerberg/story-utils';
import type { StoryFile } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Checkbox } from './Checkbox-v2';
import * as stories from './Checkbox-v2.stories';

describe('<Checkbox />', () => {
  generateSnapshots(stories as StoryFile);

  test('Disabled story renders snapshot', () => {
    const { container } = render(<Checkbox disabled label="Disabled" />);
    // eslint-disable-next-line testing-library/no-node-access
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
