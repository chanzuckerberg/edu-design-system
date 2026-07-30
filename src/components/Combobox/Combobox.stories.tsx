import type { StoryObj, Meta } from '@storybook/react-webpack5';
// Importing this here, since using @storybook/test below leads to superfluous act() warnings
import { userEvent, within } from '@storybook/testing-library';
import React, { useState } from 'react';
import { expect } from 'storybook/test';
import { Combobox } from './Combobox';

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    docs: {
      subtitle:
        'A text field paired with a list of options. Typing filters the list, and the user may select one or more of the matches.',
    },
    layout: 'centered',
    // Using this motion preference for components where they trigger animations on mount
    chromatic: { delay: 500, prefersReducedMotion: 'reduce' },
  },
  argTypes: {
    multiple: {
      description: 'Whether multiple values are allowed in this instance',
    },
    value: {
      table: {
        description: 'The value of the combobox field (when controlled)',
      },
    },
    defaultValue: {
      description:
        'The default value of the combobox field (when uncontrolled)',
    },
    immediate: {
      description:
        'Whether the option list opens as soon as the field receives focus, instead of waiting for a keystroke',
    },
    __demoMode: {
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
    },
    onChange: {
      description:
        'Optional change handler. Fires when a value is selected (and passes in the selected value, or list of values when `multiple`)',
    },
    onClose: {
      description:
        'Optional handler that fires when the option list closes, useful for resetting the query',
    },
  },
  tags: ['autodocs', 'beta', 'version:1.0.0'],
};

export default meta;

type ComboboxOption = {
  key: string;
  label: string;
  subLabel?: string;
};

const exampleOptions: ComboboxOption[] = [
  {
    key: '1',
    label: 'Dogs',
    subLabel: "Who's a good boy?",
  },
  {
    key: '2',
    label: 'Cats',
    subLabel: 'Super independent.',
  },
  {
    key: '3',
    label: 'Birds',
    subLabel: 'Living relics!',
  },
  {
    key: '4',
    label: 'Rabbits',
    subLabel: 'Langomorphs are rad.',
  },
];

const longOptionList: ComboboxOption[] = Array(30)
  .fill('test')
  .map((option, index) => ({
    key: `${option}-${index}`,
    label: `${option}${index}`,
  }));

type DemoProps = React.ComponentProps<typeof Combobox> & {
  'data-testid'?: string;
  options?: ComboboxOption[];
  /**
   * Passed through to `Combobox.Input`, so stories can show truncation and placeholders.
   */
  inputProps?: Partial<React.ComponentProps<typeof Combobox.Input>>;
  /**
   * Alignment override for the option list, matching `Combobox.Options`
   */
  optionsAnchor?: React.ComponentProps<typeof Combobox.Options>['anchor'];
  /**
   * Whether to render the options with their `subLabel`
   */
  showSubLabels?: boolean;
};

/**
 * `Combobox` does not filter for you: only the consumer knows how the option data is shaped.
 * This demo wrapper holds the query in state and filters a local list, which is the pattern we
 * expect most consumers to use.
 */
const ComboboxDemo = ({
  options = exampleOptions,
  inputProps,
  optionsAnchor,
  showSubLabels,
  ...other
}: DemoProps) => {
  const [query, setQuery] = useState('');

  const filteredOptions = query
    ? options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase()),
      )
    : options;

  return (
    <Combobox onClose={() => setQuery('')} {...other}>
      <Combobox.Input
        data-testid="input-button"
        displayValue={(option) => (option as ComboboxOption)?.label ?? ''}
        onChange={(event) => setQuery(event.target.value)}
        {...inputProps}
      />
      <Combobox.Options anchor={optionsAnchor} className="w-60">
        {filteredOptions.length === 0 ? (
          <Combobox.Option disabled value="">
            No matches
          </Combobox.Option>
        ) : (
          filteredOptions.map((option) => (
            <Combobox.Option
              key={option.key}
              subLabel={showSubLabels ? option.subLabel : undefined}
              value={option}
            >
              {option.label}
            </Combobox.Option>
          ))
        )}
      </Combobox.Options>
    </Combobox>
  );
};

/**
 * Play function to open the option list using the field's toggle button
 */
const openMenu: StoryObj['play'] = async (playOptions) => {
  const { canvasElement } = playOptions;
  const canvas = within(canvasElement);

  const toggleButton = await canvas.findByTestId('input-button');
  await userEvent.click(toggleButton);
  await userEvent.keyboard('{ArrowDown}');
};

/**
 * Play function that types into the field to narrow the option list. The field already shows the
 * current selection, so the query replaces it rather than appending to it.
 */
const typeQuery = (query: string): StoryObj['play'] => {
  return async (playOptions) => {
    const { canvasElement } = playOptions;
    const canvas = within(canvasElement);

    const input = await canvas.findByRole('combobox');
    await userEvent.clear(input);
    await userEvent.type(input, query);
  };
};

/**
 * Play function to use with interactive stories
 */
const selectCat: StoryObj['play'] = async (playOptions) => {
  const { canvasElement } = playOptions;
  const canvas = within(canvasElement);
  const toggleButton = await canvas.findByTestId('input-button');

  await openMenu(playOptions);

  // Target the body of the iframe since it is portal'd
  const popoverCanvas = within(document.body);

  const bestOption = await popoverCanvas.findByText('Cats');
  await userEvent.click(bestOption);

  // Reopen the option list; selecting an option closed it.
  await userEvent.click(toggleButton);
};

/**
 * The simplest and default case. The field shows the current selection via `displayValue`, and
 * every keystroke fires `onChange` on `Combobox.Input` so the consumer can filter the options.
 *
 * **NOTE**: for combobox value data types, `{label: string}` is required, but any other key/value pairs are allowed.
 *
 * For detailed code examples, refer to the [stories code in GitHub](https://github.com/chanzuckerberg/edu-design-system/blob/main/src/components/Combobox/Combobox.stories.tsx).
 */
export const Default: StoryObj<DemoProps> = {
  render: (args) => <ComboboxDemo {...args} />,
  args: {
    label: 'Favorite Animal',
    'data-testid': 'combobox',
    defaultValue: exampleOptions[0],
    name: 'combobox',
    className: 'w-60',
  },
};

export const HorizontalLabel: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    labelLayout: 'horizontal',
    label: 'Animal?',
  },
};

/**
 * Typing in the field narrows the option list. This story types "Ca" to leave only one match.
 */
export const FilteredByQuery: StoryObj<DemoProps> = {
  ...Default,
  play: typeQuery('Ca'),
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true,
    },
  },
};

/**
 * Because filtering is the consumer's job, so is the empty state. Always render something when
 * nothing matches, so the field doesn't look broken. Here a disabled option says "No matches".
 */
export const NoMatches: StoryObj<DemoProps> = {
  ...Default,
  play: async (playOptions) => {
    await typeQuery('zzz')?.(playOptions);

    const popoverCanvas = within(document.body);
    await expect(await popoverCanvas.findByText('No matches')).toBeVisible();
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true,
    },
  },
};

/**
 * You can select a different option to show when rendered.
 */
export const WithSelectedOption: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    defaultValue: exampleOptions[1],
  },
};

/**
 * Use the `by` option to determine the selection (when using objects for the value list). This helps when you want to compare by value, not reference.
 * - The type comparison can be by a named key in the object `by={'key'}` or using a comparison function
 *
 * See: https://headlessui.com/react/combobox#binding-objects-as-values
 */
export const WithSelectedBy: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...WithSelectedOption.args,
    defaultValue: { ...exampleOptions[1] },
    by: 'key',
  },
};

/**
 * You can add a `name` prop to generate form fields for the value object.
 *
 * In this example, the field name is `"interactive-combobox"`, and the value is an object storing `{label: string, key: string}`.
 *
 * This will generate hidden fields with names:
 * * `interactive-combobox[label]`
 * * `interactive-combobox[key]`
 */
export const WithFieldName: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    name: 'interactive-combobox',
    subLabel: 'Additional descriptive text',
  },
  parameters: {
    docs: {
      source: {
        code: `
const [query, setQuery] = useState('');
const filtered = options.filter((option) => option.label.includes(query));

<Combobox label="Favorite Animal" name="interactive-combobox" onChange={...}>
  <Combobox.Input
    displayValue={(option) => option?.label ?? ''}
    onChange={(event) => setQuery(event.target.value)}
  />
  <Combobox.Options>
    {filtered.map((option) => (
      <Combobox.Option key={option.key} value={option}>
        {option.label}
      </Combobox.Option>
    ))}
  </Combobox.Options>
</Combobox>`,
      },
    },
  },
};

export const WithFieldNote: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast',
  },
};

/**
 * This demonstrates how combobox items can also have an optional subLabel attached to give more details about the option.
 */
export const WithSubLabels: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast',
    showSubLabels: true,
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true,
    },
  },
  play: openMenu,
};

/**
 * By default the option list waits for a keystroke before opening. Pass `immediate` to open the
 * full list as soon as the field receives focus.
 *
 * See: https://headlessui.com/react/combobox#opening-the-combobox-immediately
 */
export const ImmediatelyOpen: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    immediate: true,
  },
  play: async (playOptions) => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');

    await userEvent.click(input);
    await expect(input.getAttribute('aria-expanded')).toEqual('true');
  },
  parameters: {
    ...Default.parameters,
    snapshot: {
      skip: true,
    },
  },
};

/**
 * A placeholder tells the user the field is searchable before they've typed anything. Use it
 * sparingly, and never as a replacement for the label.
 */
export const WithPlaceholder: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    defaultValue: undefined,
    inputProps: {
      placeholder: 'Search animals',
    },
  },
};

/**
 * When `multiple` is set, the text field holds the query rather than the selection, so the
 * values picked so far render ahead of it as `InputChip`s. Each chip's close button drops that
 * value from the selection.
 */
const MultipleComboboxDemo = ({
  options = exampleOptions,
  inputProps,
  ...other
}: DemoProps) => {
  const [query, setQuery] = useState('');

  const filteredOptions = query
    ? options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase()),
      )
    : options;

  return (
    <Combobox onClose={() => setQuery('')} {...other}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        {...inputProps}
        data-testid="input-button"
      />
      <Combobox.Options className="w-[240px]">
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
 * You can select multiple values by passing `multiple` to the parent element. When doing this,
 * make sure all props that use the value (e.g., `value` and `defaultValue`) should use an array instead
 * of an object or value for the individual `Combobox.Option` entries.
 *
 * Each selected value shows up in the field as a removable chip. Chip text comes from the value's
 * `label` by default; pass `chipLabel` to `Combobox.Input` when your values are shaped differently.
 * Chips come off via their close button or via backspace in an empty field (see
 * `MultipleRemoveWithBackspace`).
 *
 * Hidden form inputs are generated for each option selected and take the following form:
 * - `name[arrayIndex][key]`
 * - `name[arrayIndex][value]`
 */
export const Multiple: StoryObj<DemoProps> = {
  render: (args) => <MultipleComboboxDemo {...args} />,
  args: {
    label: 'Favorite Animal(s)',
    multiple: true,
    'data-testid': 'combobox',
    defaultValue: [exampleOptions[0]],
    className: 'w-[240px]',
    name: 'multiple-combobox',
  },
  parameters: {
    snapshot: {
      skip: true,
    },
  },
  play: openMenu,
};

/**
 * Pressing backspace in an empty field removes the last chip, so a selection can be undone
 * without reaching for the mouse. Backspace edits the query first; only once the field is empty
 * does it start removing chips.
 *
 * **NOTE**: this behavior is ours, not HeadlessUI's. HeadlessUI does not bind backspace on the
 * combobox input as of v2.2, so there is nothing to conflict with today, but a future HeadlessUI
 * release could claim that key. We mark the event as handled to reduce the chance of both firing.
 * If you see a chip and something else both react to one backspace, this is the first place to
 * look. Pass your own `onKeyDown` to `Combobox.Input` and call `preventDefault()` to opt out.
 *
 * TODO-AH: remove typed text after selecting a value
 */
export const MultipleRemoveWithBackspace: StoryObj<DemoProps> = {
  render: (args) => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: [exampleOptions[0], exampleOptions[1]],
    className: 'w-[320px]',
  },
  play: async (playOptions) => {
    const canvas = within(playOptions.canvasElement);

    const input = await canvas.findByRole('combobox');
    await userEvent.click(input);
    await userEvent.keyboard('{Backspace}');

    // The last chip is gone; the first one stays put
    await expect(canvas.queryByText('Cats')).not.toBeInTheDocument();
    await expect(canvas.getByText('Dogs')).toBeVisible();
  },
  parameters: {
    snapshot: {
      skip: true,
    },
  },
};

/**
 * The field wraps onto more than one line as chips accumulate, so a long selection stays fully
 * visible instead of scrolling out of view.
 */
export const MultipleWithManySelected: StoryObj<DemoProps> = {
  render: (args) => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: exampleOptions,
    className: 'w-[240px]',
  },
};

/**
 * Chips can carry a leading icon by way of `chipLeadingComponent` on `Combobox.Input`.
 */
export const MultipleWithChipIcons: StoryObj<DemoProps> = {
  render: (args) => <MultipleComboboxDemo {...args} />,
  args: {
    ...Multiple.args,
    defaultValue: [exampleOptions[0], exampleOptions[1]],
    className: 'w-[320px]',
    inputProps: {
      chipLeadingComponent: () => 'person-encircled',
    },
  },
};

/**
 * Set `showChips` to false on `Combobox.Input` when you'd rather surface the selection yourself,
 * which is the behavior a plain HeadlessUI combobox gives you. This can be used to display a summary
 * or other text instead of selectable chips.
 */
export const MultipleWithoutChips: StoryObj<DemoProps> = {
  render: (args) => <MultipleWithoutChipsDemo {...args} />,
  args: {
    ...Multiple.args,
    className: 'w-[384px]',
  },
};

const MultipleWithoutChipsDemo = ({
  options = exampleOptions,
  ...other
}: DemoProps) => {
  const [selected, setSelected] = useState<ComboboxOption[]>(
    (other.defaultValue as unknown as ComboboxOption[]) ?? [],
  );

  return (
    <MultipleComboboxDemo
      {...other}
      fieldNote={
        'Selected: ' +
        (selected.length < 1
          ? 'None'
          : selected.map((selection) => selection.label).join(', '))
      }
      inputProps={{
        showChips: false,
        placeholder: `${selected.length > 0 ? selected.length : 'none'} selected`,
      }}
      onChange={(value) => setSelected(value as ComboboxOption[])}
      options={options}
    />
  );
};

/**
 * Passing a function as `children` gives you HeadlessUI's render prop, exposing `open`, `value`,
 * and `disabled`. Use it when you need to react to the field's state outside of the field
 * itself. `Combobox.InputWrapper` keeps the EDS field appearance when you render your own
 * `Combobox.Input`.
 */
const RenderPropComboboxDemo = ({
  options = exampleOptions,
  ...other
}: DemoProps) => {
  const [query, setQuery] = useState('');

  const filteredOptions = query
    ? options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase()),
      )
    : options;

  return (
    <Combobox onClose={() => setQuery('')} {...other}>
      {({ open, value }) => (
        <>
          <Combobox.Label>Favorite Animal</Combobox.Label>
          <Combobox.Input
            displayValue={(option) => (option as ComboboxOption)?.label ?? ''}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Options>
            {filteredOptions.map((option) => (
              <Combobox.Option key={option.key} value={option}>
                {option.label}
              </Combobox.Option>
            ))}
          </Combobox.Options>
          <p className="mt-spacing-size-1">
            {open ? 'Picking' : 'Picked'}: {(value as ComboboxOption)?.label}
          </p>
        </>
      )}
    </Combobox>
  );
};

export const WithRenderProp: StoryObj<DemoProps> = {
  render: (args) => <RenderPropComboboxDemo {...args} />,
  args: {
    'data-testid': 'combobox',
    defaultValue: exampleOptions[0],
    name: 'render-prop-combobox',
    className: 'w-60',
  },
};

const longLabelOption: ComboboxOption = {
  key: 'long',
  label: 'A very long option label that will not fit',
};

/**
 * The component provides some basic styles to handle long text in the provided field. Use
 * `shouldTruncate` on `.Input` to truncate the text with an ellipsis.
 */
export const WithTruncation: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[160px]',
    defaultValue: longLabelOption,
    options: [longLabelOption, ...exampleOptions],
    inputProps: {
      shouldTruncate: true,
    },
  },
};

/**
 * The field trigger width can be set with utility classes. By default, the option list will expand to match the width.
 */
export const AdjustedWidth: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[240px]',
  },
};

/**
 * We lock the maximum height of the option list to 1/4 of the available screen height. Scrolling is allowed in the list, and
 * keyboard navigation (showing the items off the edge of the screen) is handled when used.
 */
export const LongOptionList: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[240px]',
    defaultValue: longOptionList[3],
    options: longOptionList,
  },
  play: async (playOptions) => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');

    await openMenu(playOptions);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}');

    await expect(input.getAttribute('aria-expanded')).toEqual('true');
  },
  parameters: {
    layout: 'centered',
    chromatic: { delay: 450 },
    snapshot: {
      skip: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>
    ),
  ],
};

/**
 * If you want a different width for the field and the option list, you can control them separately.
 */
export const SeparateFieldAndMenuWidth: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    className: 'w-[160px]',
    optionsClassName: 'w-[384px]',
  },
  play: async (playOptions) => {
    const canvas = within(playOptions.canvasElement);
    const input = await canvas.findByRole('combobox');

    await openMenu(playOptions);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');

    await expect(input.getAttribute('aria-expanded')).toEqual('true');
  },
  parameters: {
    chromatic: {
      diffIncludeAntiAliasing: false,
      diffThreshold: 0.75,
    },
    docs: {
      ...Default.parameters?.docs,
    },
    snapshot: {
      skip: true,
    },
  },
  decorators: [(Story) => <div className="p-spacing-size-4">{Story()}</div>],
};

/**
 * Each Combobox can be marked as disabled. This will update the visual treatment to indicate the field cannot be changed (but by default
 * will show the selected value).
 */
export const Disabled: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    subLabel: 'Some descriptive text',
    disabled: true,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          // Disabled input does not need to meet color contrast
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
    docs: {
      ...Default.parameters?.docs,
    },
    snapshot: {
      skip: true,
    },
  },
};

/**
 * Combobox fields can be marked as required by using the `required` prop.
 */
export const Required: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    required: true,
    showHint: true,
    className: 'w-[384px]',
    subLabel: 'Some descriptive text',
  },
};

/**
 * Fields can be marked as optional by using `required` as false, but `showHint` as true.
 */
export const Optional: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    required: false,
    showHint: true,
    subLabel: 'Some descriptive text',
    className: 'w-[384px]',
  },
};

/**
 * You can supply an error field note by specifying the status of "critical".
 */
export const Error: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Required.args,
    status: 'critical',
    fieldNote: 'Some text describing error',
  },
};

/**
 * You can supply a warning field note by specifying the status of "warning".
 */
export const Warning: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Optional.args,
    status: 'warning',
    fieldNote: 'Some text describing warning',
  },
};

/**
 * Having a visible label is not necessary. In those cases, use `aria-label` to set an accessible label for the field
 */
export const NoVisibleLabel: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label',
  },
};

/**
 * No visible label is required. In such cases, you must use an equivalent label for accessibility, like `aria-label`.
 */
export const NoVisibleLabelButRequired: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label',
    required: true,
    className: 'w-[384px]',
  },
};

/**
 * `Combobox` can be both disabled and required.
 */
export const DisabledRequired: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
    required: true,
    showHint: true,
    className: 'w-[384px]',
  },
  parameters: {
    docs: {
      ...Default.parameters?.docs,
    },
    snapshot: {
      skip: true,
    },
  },
};

/**
 * Options for each `Combobox` can be aligned on different sides of the field.
 *
 * More information: https://headlessui.com/react/combobox#positioning-the-options
 */
export const OptionsEndAligned: StoryObj<DemoProps> = {
  ...Default,
  args: {
    ...Default.args,
    optionsAnchor: { to: 'bottom end', gap: 20, offset: 44 },
  },
  play: openMenu,
  decorators: [
    (Story) => (
      <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>
    ),
  ],
  parameters: {
    snapshot: {
      skip: true,
    },
  },
};

/**
 * This shows the contents of `Combobox` upon render. Mostly to demonstrate it is possible, to capture a snapshot of the appearance.
 */
export const OpenByDefault: StoryObj<DemoProps> = {
  ...Default,
  parameters: {
    layout: 'centered',
    chromatic: { delay: 300, disableSnapshot: true },
    docs: {
      ...Default.parameters?.docs,
    },
    snapshot: {
      skip: true,
    },
  },
  play: selectCat,
};
