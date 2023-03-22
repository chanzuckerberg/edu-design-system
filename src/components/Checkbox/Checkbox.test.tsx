import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Checkbox } from './Checkbox';
import * as stories from './Checkbox.stories';

const { Default } = composeStories(stories);

describe('<Checkbox />', () => {
  generateSnapshots(stories);

  test('throws an error if no label or aria-label', () => {
    // expect console error from react, suppressed.
    const consoleErrorMock = jest.spyOn(console, 'error');
    consoleErrorMock.mockImplementation();
    expect(() => {
      render(<Checkbox />);
    }).toThrow(/must provide a visible label or aria-label/);
    consoleErrorMock.mockRestore();
  });

  test('Disabled story renders snapshot', () => {
    const { container } = render(<Checkbox disabled label="Disabled" />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should toggle the checkbox with space', async () => {
    const user = userEvent.setup();
    render(<Default />);
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    await user.keyboard(' ');
    expect(checkbox).toBeChecked();
  });
});
