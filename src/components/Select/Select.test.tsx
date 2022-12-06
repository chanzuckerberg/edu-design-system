import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStory } from '@storybook/testing-react';
import { fireEvent, screen, render } from '@testing-library/react';
import React from 'react';
import { Select } from './Select';
import * as stories from './Select.stories';

const { OpenByDefault, Disabled, ...closedStories } = stories;

const OpenByDefaultComponent = composeStory(OpenByDefault, stories.default);

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
      const openButton = await screen.findByRole('button');
      fireEvent.click(openButton);
      await screen.findAllByRole('option');
      return screen.getByTestId('dropdown');
    },
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
