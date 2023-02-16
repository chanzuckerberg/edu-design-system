import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStory } from '@storybook/testing-react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Select } from './Select';
import * as stories from './Select.stories';

const { OpenByDefault, Disabled, ...closedStories } = stories;

const OpenByDefaultComponent = composeStory(OpenByDefault, stories.default);
const DisabledComponent = composeStory(Disabled, stories.default);

const exampleOptions = [
  {
    key: '1',
    label: 'Option 1',
  },
  {
    key: '2',
    label: 'Option 2',
  },
  {
    key: '3',
    label: 'Option 3',
  },
];

describe('<Select />', () => {
  generateSnapshots(closedStories, {
    getElement: async () => {
      const user = userEvent.setup();
      const openButton = await screen.findByRole('button');
      await user.click(openButton);
      await screen.findAllByRole('option');
      return screen.getByTestId('dropdown');
    },
  });

  it('does not open a list when clicked and disabled', async () => {
    const user = userEvent.setup();
    render(<DisabledComponent />);

    const openTrigger = await screen.findByRole('button');
    await user.click(openTrigger);

    // see if there are any options, which there should not be
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('renders the OpenByDefault story', async () => {
    const { container } = render(<OpenByDefaultComponent />);
    await OpenByDefaultComponent.play({ canvasElement: container });
    expect(screen.getByTestId('dropdown')).toMatchSnapshot();
  });

  it('throws an error if children is used without labeling', () => {
    const dropdownWithChildrenAndLabelText = (
      <Select onChange={() => undefined} value={exampleOptions[0]}>
        <Select.Button>Select</Select.Button>

        <Select.Options>
          {exampleOptions.map((option) => (
            <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    );
    const renderMethod = () => {
      render(dropdownWithChildrenAndLabelText);
    };

    // expect console error from react, suppressed.
    jest.spyOn(console, 'error').mockImplementation();
    expect(renderMethod).toThrow(Error);
  });

  it('does not throw an error if select uses <Select.Label>', () => {
    const dropdownWithDropdownLabel = (
      <Select onChange={() => undefined} value={exampleOptions[0]}>
        <Select.Label>Options:</Select.Label>
        <Select.Button>Select</Select.Button>

        <Select.Options>
          {exampleOptions.map((option) => (
            <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    );
    const renderMethod = () => {
      render(dropdownWithDropdownLabel);
    };

    expect(renderMethod).not.toThrow(Error);
  });
});
