import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStory } from '@storybook/testing-react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Dropdown } from './Dropdown';
import * as stories from './Dropdown.stories';

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

describe('<Dropdown />', () => {
  generateSnapshots(closedStories, {
    getElement: async () => {
      const user = userEvent.setup();
      const openButton = await screen.findByRole('button');
      await user.click(openButton);
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
      <Dropdown
        labelText="Options:"
        onChange={() => undefined}
        value={exampleOptions[0]}
      >
        <Dropdown.Button>Select</Dropdown.Button>

        <Dropdown.Options>
          {exampleOptions.map((option) => (
            <Dropdown.Option key={option.key} value={option}>
              {option.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>
    );
    const renderMethod = () => {
      render(dropdownWithChildrenAndLabelText);
    };
    // expect console error from react, suppressed.
    jest.spyOn(console, 'error').mockImplementation();
    expect(renderMethod).toThrow(Error);
  });

  it('throws an error if children is used with buttonText', () => {
    const dropdownWithChildrenAndButtonText = (
      <Dropdown
        buttonText="Select"
        onChange={() => undefined}
        value={exampleOptions[0]}
      >
        <Dropdown.Label>Options:</Dropdown.Label>

        <Dropdown.Options>
          {exampleOptions.map((option) => (
            <Dropdown.Option key={option.key} value={option}>
              {option.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>
    );
    const renderMethod = () => {
      render(dropdownWithChildrenAndButtonText);
    };
    // expect console error from react, suppressed.
    jest.spyOn(console, 'error').mockImplementation();
    expect(renderMethod).toThrow(Error);
  });

  it('throws an error if children is used with options', () => {
    const dropdownWithChildrenAndOptions = (
      <Dropdown
        onChange={() => undefined}
        options={exampleOptions}
        value={exampleOptions[0]}
      >
        <Dropdown.Label>Options:</Dropdown.Label>
        <Dropdown.Button>Select</Dropdown.Button>
      </Dropdown>
    );
    const renderMethod = () => {
      render(dropdownWithChildrenAndOptions);
    };
    // expect console error from react, suppressed.
    jest.spyOn(console, 'error').mockImplementation();
    expect(renderMethod).toThrow(Error);
  });

  it('does not throw an error if dropdown uses labelText', () => {
    const dropdownWithLabelText = (
      <Dropdown
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

  it('does not throw an error if dropdown uses aria-label', () => {
    const dropdownWithAriaLabel = (
      <Dropdown
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

  it('does not throw an error if dropdown uses <Dropdown.Label>', () => {
    const dropdownWithDropdownLabel = (
      <Dropdown onChange={() => undefined} value={exampleOptions[0]}>
        <Dropdown.Label>Options:</Dropdown.Label>
        <Dropdown.Button>Select</Dropdown.Button>

        <Dropdown.Options>
          {exampleOptions.map((option) => (
            <Dropdown.Option key={option.key} value={option}>
              {option.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>
    );
    const renderMethod = () => {
      render(dropdownWithDropdownLabel);
    };

    expect(renderMethod).not.toThrow(Error);
  });

  it('does throw an error if dropdown does not use <Dropdown.Label>, labelText, or aria-label', () => {
    const dropdownWithoutLabel = (
      <Dropdown
        buttonText="Select"
        onChange={() => undefined}
        options={exampleOptions}
        value={exampleOptions[0]}
      />
    );
    const renderMethod = () => {
      render(dropdownWithoutLabel);
    };
    // expect console error from react, suppressed.
    jest.spyOn(console, 'error').mockImplementation();
    expect(renderMethod).toThrow(Error);
  });
});
