import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStory } from '@storybook/react-webpack5';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import React, { useState } from 'react';
import { Combobox } from './Combobox';
import * as stories from './Combobox.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

mockResizeObserver();

// These stories assert on their own interactions in `play`, so they'd fight the shared
// snapshot setup below.
const { FilteredByQuery, ImmediatelyOpen, NoMatches, ...closedStories } =
  stories;

const DisabledComponent = composeStory(closedStories.Disabled, stories.default);

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

/**
 * Minimal consumer-shaped Combobox: filtering lives outside the component, so tests need a
 * wrapper that owns the query the same way a real consumer would.
 */
const TestCombobox = ({
  inputProps,
  onChange,
  ...other
}: Partial<React.ComponentProps<typeof Combobox>> & {
  inputProps?: Partial<React.ComponentProps<typeof Combobox.Input>>;
}) => {
  const [query, setQuery] = useState('');

  const filteredOptions = query
    ? exampleOptions.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase()),
      )
    : exampleOptions;

  return (
    <Combobox
      aria-label="test"
      data-testid="combobox"
      name="test-combobox"
      onChange={onChange}
      {...other}
    >
      <Combobox.Input
        displayValue={(option) =>
          (option as (typeof exampleOptions)[number])?.label ?? ''
        }
        onChange={(event) => setQuery(event.target.value)}
        {...inputProps}
      />
      <Combobox.Options>
        {filteredOptions.map((option) => (
          <Combobox.Option key={option.key} value={option}>
            {option.label}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

/**
 * Multi-select needs the consumer to own the value, the same way it would in a real form.
 */
const TestMultipleCombobox = ({
  onChange,
  ...other
}: Partial<React.ComponentProps<typeof Combobox>> & {
  inputProps?: Partial<React.ComponentProps<typeof Combobox.Input>>;
}) => {
  const [selected, setSelected] = useState(
    (other.defaultValue as unknown as typeof exampleOptions) ?? [],
  );

  return (
    <TestCombobox
      {...other}
      multiple
      onChange={(value) => {
        setSelected(value as unknown as typeof exampleOptions);
        onChange?.(value);
      }}
      value={selected}
    />
  );
};

describe('<Combobox />', () => {
  describe('Generated Snapshots', () => {
    generateSnapshots(closedStories as StoryFile, {
      getElement: async () => {
        const user = userEvent.setup();
        // The toggle is always last in the field. Its accessible name varies (HeadlessUI names
        // it from the field's label when there is one), and chips put their own remove buttons
        // ahead of it, so neither name nor first-match is a reliable way to find it.
        const buttons = await screen.findAllByRole('button');
        const openButton = buttons[buttons.length - 1];
        await user.click(openButton);
        await screen.findAllByRole('option');
        return screen.getByTestId('combobox');
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

  it('does not throw an error if combobox uses <Combobox.Label>', () => {
    const comboboxWithComboboxLabel = (
      <Combobox name="non-throwing-combobox" onChange={() => undefined}>
        <Combobox.Label>Options:</Combobox.Label>
        <Combobox.Input />

        <Combobox.Options>
          {exampleOptions.map((option) => (
            <Combobox.Option key={option.key} value={option}>
              {option.label}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    );
    const renderMethod = () => {
      render(comboboxWithComboboxLabel);
    };

    expect(renderMethod).not.toThrow(Error);
  });

  it('applies the accessible name from the root aria-label to the text field', () => {
    render(<TestCombobox value={exampleOptions[0]} />);

    expect(screen.getByRole('combobox')).toHaveAccessibleName('test');
  });

  it('narrows the option list as the user types', async () => {
    const user = userEvent.setup();
    render(<TestCombobox value={exampleOptions[0]} />);

    const input = await screen.findByRole('combobox');

    // The field already shows the selection, so clear it before typing a new query
    await user.clear(input);
    await user.type(input, 'Option 2');

    const options = await screen.findAllByRole('option');
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent('Option 2');
  });

  it('shows the current selection in the field via displayValue', async () => {
    render(<TestCombobox value={exampleOptions[1]} />);

    expect(await screen.findByRole('combobox')).toHaveValue('Option 2');
  });

  it('names the option list toggle when there is no visible label', () => {
    render(<TestCombobox value={exampleOptions[0]} />);

    expect(screen.getByRole('button')).toHaveAccessibleName('Show options');
  });

  it('names the option list toggle from the visible label when there is one', () => {
    render(<TestCombobox label="Pick one" value={exampleOptions[0]} />);

    expect(screen.getByRole('button')).toHaveAccessibleName(/Pick one/);
  });

  it('generates a hidden field when used with a name', () => {
    const { container } = render(<TestCombobox value={exampleOptions[0]} />);

    // eslint-disable-next-line testing-library/no-container
    expect(container.querySelector('input[type="hidden"]')).toBeInTheDocument();
  });

  describe('multiple', () => {
    it('shows a chip for each selected value', () => {
      render(
        <TestMultipleCombobox
          defaultValue={[exampleOptions[0], exampleOptions[2]]}
        />,
      );

      expect(screen.getAllByRole('listitem')).toHaveLength(2);
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'remove Option 3' }),
      ).toBeInTheDocument();
    });

    it('removes a value when its chip is dismissed', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <TestMultipleCombobox
          defaultValue={[exampleOptions[0], exampleOptions[2]]}
          onChange={changeHandler}
        />,
      );

      await user.click(screen.getByRole('button', { name: 'remove Option 1' }));

      expect(changeHandler).toHaveBeenCalledWith([exampleOptions[2]]);
      expect(screen.getAllByRole('listitem')).toHaveLength(1);
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });

    it('drops the value from the option list too when uncontrolled', async () => {
      const user = userEvent.setup();

      render(
        <TestCombobox
          defaultValue={[exampleOptions[0], exampleOptions[2]]}
          multiple
        />,
      );

      await user.click(screen.getByRole('button', { name: 'remove Option 1' }));

      // Reopen the list; the removed value must no longer read as selected
      const buttons = screen.getAllByRole('button');
      await user.click(buttons[buttons.length - 1]);

      const options = await screen.findAllByRole('option');
      expect(options[0]).toHaveAttribute('aria-selected', 'false');
      expect(options[2]).toHaveAttribute('aria-selected', 'true');
    });

    it('does not open the option list when a chip is dismissed', async () => {
      const user = userEvent.setup();

      render(<TestMultipleCombobox defaultValue={[exampleOptions[0]]} />);

      await user.click(screen.getByRole('button', { name: 'remove Option 1' }));

      expect(screen.queryByRole('option')).not.toBeInTheDocument();
    });

    it('removes the last chip on backspace in an empty field', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <TestMultipleCombobox
          defaultValue={[exampleOptions[0], exampleOptions[2]]}
          onChange={changeHandler}
        />,
      );

      await user.click(screen.getByRole('combobox'));
      await user.keyboard('{Backspace}');

      expect(changeHandler).toHaveBeenCalledWith([exampleOptions[0]]);
      // The remove buttons are chip-only, so they distinguish chips from list options
      expect(
        screen.queryByRole('button', { name: 'remove Option 3' }),
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'remove Option 1' }),
      ).toBeInTheDocument();
    });

    it('edits the query before it starts removing chips on backspace', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <TestMultipleCombobox
          defaultValue={[exampleOptions[0]]}
          onChange={changeHandler}
        />,
      );

      const input = screen.getByRole('combobox');
      await user.click(input);
      await user.keyboard('Op');

      // First backspace trims the query, leaving the chip alone
      await user.keyboard('{Backspace}');
      expect(input).toHaveValue('O');
      expect(changeHandler).not.toHaveBeenCalled();

      // Second empties the field, third takes the chip
      await user.keyboard('{Backspace}');
      expect(input).toHaveValue('');
      expect(changeHandler).not.toHaveBeenCalled();

      await user.keyboard('{Backspace}');
      expect(changeHandler).toHaveBeenCalledWith([]);
      // Scoped to chips: the option list is open, so 'Option 1' is on screen as an option too
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });

    it('does nothing on backspace once every chip is gone', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <TestMultipleCombobox defaultValue={[]} onChange={changeHandler} />,
      );

      await user.click(screen.getByRole('combobox'));
      await user.keyboard('{Backspace}');

      expect(changeHandler).not.toHaveBeenCalled();
    });

    it('leaves backspace alone in single-select mode', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(<TestCombobox onChange={changeHandler} value={undefined} />);

      await user.click(screen.getByRole('combobox'));
      await user.keyboard('{Backspace}');

      expect(changeHandler).not.toHaveBeenCalled();
    });

    it('lets a consumer opt out of backspace removal with preventDefault', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <TestMultipleCombobox
          defaultValue={[exampleOptions[0]]}
          inputProps={{ onKeyDown: (event) => event.preventDefault() }}
          onChange={changeHandler}
        />,
      );

      await user.click(screen.getByRole('combobox'));
      await user.keyboard('{Backspace}');

      expect(changeHandler).not.toHaveBeenCalled();
      expect(
        screen.getByRole('button', { name: 'remove Option 1' }),
      ).toBeInTheDocument();
    });

    it('does not remove chips on backspace when showChips is off', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <TestMultipleCombobox
          defaultValue={[exampleOptions[0]]}
          inputProps={{ showChips: false }}
          onChange={changeHandler}
        />,
      );

      await user.click(screen.getByRole('combobox'));
      await user.keyboard('{Backspace}');

      expect(changeHandler).not.toHaveBeenCalled();
    });

    it('renders no chips when showChips is off', () => {
      render(
        <TestMultipleCombobox
          defaultValue={[exampleOptions[0]]}
          inputProps={{ showChips: false }}
        />,
      );

      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });

    it('renders no chips in single-select mode', () => {
      render(<TestCombobox value={exampleOptions[0]} />);

      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });

    it('labels chips with chipLabel when provided', () => {
      render(
        <TestMultipleCombobox
          defaultValue={[exampleOptions[0]]}
          inputProps={{
            chipLabel: (value) =>
              `#${(value as (typeof exampleOptions)[number]).key}`,
          }}
        />,
      );

      expect(screen.getByText('#1')).toBeInTheDocument();
    });

    it('disables the chip remove buttons when the field is disabled', () => {
      render(
        <TestMultipleCombobox defaultValue={[exampleOptions[0]]} disabled />,
      );

      expect(
        screen.getByRole('button', { name: 'remove Option 1' }),
      ).toBeDisabled();
    });
  });

  describe('event handling', () => {
    it('handles click on the option list toggle', async () => {
      const user = userEvent.setup();
      render(<TestCombobox value={exampleOptions[0]} />);

      const openTrigger = await screen.findByRole('button');

      await user.click(openTrigger);

      expect(await screen.findAllByRole('option')).toHaveLength(
        exampleOptions.length,
      );
    });

    it('handles change on <Combobox/>', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <TestCombobox onChange={changeHandler} value={exampleOptions[0]} />,
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

    it('handles change when children are a render prop', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <Combobox
          aria-label="test"
          name="render-prop-combobox"
          onChange={changeHandler}
          value={exampleOptions[0]}
        >
          {() => (
            <>
              <Combobox.Input />
              <Combobox.Options>
                {exampleOptions.map((option) => (
                  <Combobox.Option key={option.key} value={option}>
                    {option.label}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </>
          )}
        </Combobox>,
      );

      await user.click(screen.getByRole('button'));
      await user.keyboard('{arrowdown}');
      await user.keyboard('{enter}');

      expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it('does not call change when <Combobox/> is picking the same item', async () => {
      const changeHandler = jest.fn();
      const user = userEvent.setup();

      render(
        <TestCombobox onChange={changeHandler} value={exampleOptions[0]} />,
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
