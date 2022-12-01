import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStory } from '@storybook/testing-react';
import { fireEvent, screen, render } from '@testing-library/react';
import React from 'react';
import { Select } from './Select';
import * as stories from './Select.stories';

const { OpenByDefault, ...closedStories } = stories;

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

  it('throws an error if children is used with labelText', () => {
    const dropdownWithChildrenAndLabelText = (
      <Select
        labelText="Options:"
        onChange={() => undefined}
        value={exampleOptions[0]}
      >
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

  it('throws an error if children is used with buttonText', () => {
    const dropdownWithChildrenAndButtonText = (
      <Select
        buttonText="Select"
        onChange={() => undefined}
        value={exampleOptions[0]}
      >
        <Select.Label>Options:</Select.Label>

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
      render(dropdownWithChildrenAndButtonText);
    };

    expect(renderMethod).toThrow(Error);
  });

  it('throws an error if children is used with options', () => {
    const dropdownWithChildrenAndOptions = (
      <Select
        onChange={() => undefined}
        options={exampleOptions}
        value={exampleOptions[0]}
      >
        <Select.Label>Options:</Select.Label>
        <Select.Button>Select</Select.Button>
      </Select>
    );
    const renderMethod = () => {
      render(dropdownWithChildrenAndOptions);
    };

    expect(renderMethod).toThrow(Error);
  });

  it('does not throw an error if dropdown uses labelText', () => {
    const dropdownWithLabelText = (
      <Select
        buttonText="Select"
        labelText="Options:"
        onChange={() => undefined}
        options={exampleOptions}
        value={exampleOptions[0]}
      />
    );
    const renderMethod = () => {
      render(dropdownWithLabelText);
    };

    expect(renderMethod).not.toThrow(Error);
  });

  it('does not throw an error if select uses aria-label', () => {
    const dropdownWithAriaLabel = (
      <Select
        buttonText="Select"
        labelText="Options:"
        onChange={() => undefined}
        options={exampleOptions}
        value={exampleOptions[0]}
      />
    );
    const renderMethod = () => {
      render(dropdownWithAriaLabel);
    };

    expect(renderMethod).not.toThrow(Error);
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

  it('does throw an error if dropdown does not use <Select.Label>, labelText, or aria-label', () => {
    const dropdownWithoutLabel = (
      <Select
        buttonText="Select"
        onChange={() => undefined}
        options={exampleOptions}
        value={exampleOptions[0]}
      />
    );
    const renderMethod = () => {
      render(dropdownWithoutLabel);
    };

    expect(renderMethod).toThrow(Error);
  });
});
