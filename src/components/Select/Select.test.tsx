import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStory } from '@storybook/react-webpack5';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import React from 'react';
import { Select } from './Select';
import * as stories from './Select.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

mockResizeObserver();

const {
  OpenByDefault,
  LongOptionList,
  Disabled,
  DisabledRequired,
  OptionsRightAligned,
  SeparateButtonAndMenuWidth,
  EventHandlingOnRenderProp,
  EventHandlingOnStandardButton,
  Multiple,
  ...closedStories
} = stories;

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
  describe('Generated Snapshots', () => {
    generateSnapshots(closedStories as StoryFile, {
      getElement: async () => {
        const user = userEvent.setup();
        const openButton = await screen.findByRole('button');
        await user.click(openButton);
        await screen.findAllByRole('option');
        return screen.getByTestId('dropdown');
      },
    });
  });

  it('does not open a list when clicked and disabled', async () => {
    const user = userEvent.setup();
    render(<DisabledComponent />);

    const openTrigger = await screen.findByRole('button');

    await user.click(openTrigger);

    // see if there are any options, which there should not be
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('does not throw an error if select uses <Select.Label>', () => {
    const dropdownWithDropdownLabel = (
      <Select
        name="non-throwing-select"
        onChange={() => undefined}
        value={exampleOptions[0]}
      >
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

  it('[GROUP-112] generates a hidden field when used in uncontrolled mode', () => {
    const dropdownWithChildrenAndLabelText = (
      <Select
        aria-label="test"
        data-testid="dropdown"
        name="uncontrolled-select"
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

    const { container } = render(dropdownWithChildrenAndLabelText);

    // eslint-disable-next-line testing-library/no-container
    expect(container.querySelector(`input`)).toBeInTheDocument();
  });

  describe('event handling', () => {
    it('handles click on .Button', async () => {
      const clickHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <Select
          aria-label="test"
          data-testid="dropdown"
          name="uncontrolled-select"
          onChange={() => undefined}
          value={exampleOptions[0]}
        >
          <Select.Button onClick={clickHandler}>Select</Select.Button>

          <Select.Options>
            {exampleOptions.map((option) => (
              <Select.Option key={option.key} value={option}>
                {option.label}
              </Select.Option>
            ))}
          </Select.Options>
        </Select>,
      );

      const openTrigger = await screen.findByRole('button');

      await user.click(openTrigger);
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('handles click on .ButtonWrapper when using render prop', async () => {
      const clickHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <Select
          aria-label="test"
          data-testid="dropdown"
          name="uncontrolled-select"
          onChange={() => undefined}
          value={exampleOptions[0]}
        >
          <Select.Button>
            {({ value, open }) => (
              <Select.ButtonWrapper isOpen={open} onClick={clickHandler}>
                {value.label}
              </Select.ButtonWrapper>
            )}
          </Select.Button>

          <Select.Options>
            {exampleOptions.map((option) => (
              <Select.Option key={option.key} value={option}>
                {option.label}
              </Select.Option>
            ))}
          </Select.Options>
        </Select>,
      );

      const openTrigger = await screen.findByRole('button');

      await user.click(openTrigger);
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('handles change on <Select/>', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <Select
          aria-label="test"
          data-testid="dropdown"
          name="uncontrolled-select"
          onChange={changeHandler}
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
        </Select>,
      );

      const openTrigger = await screen.findByRole('button');

      // It should only fire change once, after the value is actually modified
      await user.click(openTrigger);
      expect(changeHandler).toHaveBeenCalledTimes(0);

      // pick the second item
      await user.keyboard('{arrowdown}');
      await user.keyboard('{enter}');

      expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it('does not call change when <Select/> is picking the same item', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <Select
          aria-label="test"
          data-testid="dropdown"
          name="uncontrolled-select"
          onChange={changeHandler}
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
        </Select>,
      );

      const openTrigger = await screen.findByRole('button');

      // It should only fire change once, after the value is actually modified
      await user.click(openTrigger);
      expect(changeHandler).toHaveBeenCalledTimes(0);

      // pick the same item
      await user.keyboard('{enter}');

      expect(changeHandler).toHaveBeenCalledTimes(0);
    });
  });
});
