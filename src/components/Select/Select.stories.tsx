import type { StoryObj, Meta } from '@storybook/react-webpack5';
// Importing this here, since using @storybook/test below leads to superfluous act() warnings
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import { expect } from 'storybook/test';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    multiple: {
      description: 'Whether multiple values are allowed in this instance',
    },
    value: {
      table: {
        description: 'The value of the select field (when controlled)',
      },
    },
    defaultValue: {
      description: 'The default value of the select field (when uncontrolled)',
    },
    __demoMode: {
      table: {
        disable: true,
      },
    },
    onClick: {
      description:
        'Optional click handler. Fires after `onChange`, when a value in the dropdown popover is picked',
      table: {
        type: {
          summary: 'SyntheticEvent',
          detail:
            'See: https://react.dev/reference/react-dom/components/common#react-event-object',
        },
        default: 'void',
      },
    },
    children: {
      control: false,
    },
    onChange: {
      description:
        'Optional change handler. Fires when a value is selected (and passes in list of selected values)',
    },
  },
  tags: ['autodocs', 'version:3.1'],
};

export default meta;

type SelectOption = {
  key: string;
  label: string;
};

const exampleOptions: SelectOption[] = [
  {
    key: '1',
    label: 'Dogs',
  },
  {
    key: '2',
    label: 'Cats',
  },
  {
    key: '3',
    label: 'Birds',
  },
];

/**
 * Play function to open a menu item
 */
const openMenu: StoryObj['play'] = async (playOptions) => {
  const { canvasElement } = playOptions;
  const canvas = within(canvasElement);

  // Open the dropdown.
  const selectButton = await canvas.findByRole('button');
  await userEvent.click(selectButton);
};

/**
 * Play function to use with interactive stories
 */
const selectCat: StoryObj['play'] = async (playOptions) => {
  const { canvasElement } = playOptions;
  const canvas = within(canvasElement);
  const selectButton = await canvas.findByRole('button');

  await openMenu(playOptions);

  // Target the body of the iframe since it is portal'd
  const popoverCanvas = within(document.body);

  const bestOption = await popoverCanvas.findByText('Cats');
  await userEvent.click(bestOption);

  // Reopen the dropdown; selecting an option closed it.
  await userEvent.click(selectButton);
};

/**
 * The simplest and default case, using the options, button, and button wrapper.
 * This shows how to reflect the value in the button upon selection, and how to generate
 * a set of options from a list.
 *
 * **NOTE**: for select value data types, `{label: string}` is required, but any other key/value pairs are allowed.
 */
export const Default: StoryObj = {
  args: {
    label: 'Favorite Animal',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'select',
    className: 'w-60',
    children: (
      <>
        <Select.Button>
          {({ value, open }) => (
            <Select.ButtonWrapper isOpen={open}>
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
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Select>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper
        isOpen={open}
      >
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
</Select>`,
      },
    },
  },
};

export const HorizontalLabel: StoryObj = {
  args: {
    ...Default.args,
    className: 'w-60',
    labelLayout: 'horizontal',
    label: 'Animal?',
  },
  parameters: {
    ...Default.parameters,
  },
};

/**
 * Instead of a render prop for `Select.Button`, you can forego the render prop for the button and use static text instead.
 * This mode is also useful if you want to use a controlled component and manage state yourself.
 */
export const WithStandardButton: StoryObj = {
  args: {
    label: 'Favorite Animal',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'standard-button',
    children: (
      <>
        <Select.Button>- Select Option -</Select.Button>
        <Select.Options>
          {exampleOptions.map((option) => (
            <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>
          ))}
        </Select.Options>
      </>
    ),
  },
};

/**
 * `Select` allows for event handlers to be added to the component.
 *
 * * `onChange` fires when a value is selected (with value of type `SelectOption`)
 *
 * You can also add an `onClick` handler to `.ButtonWrapper` if using a render prop
 *
 * * `onClick` fires when the trigger (`.ButtonWrapper`) is clicked
 */
export const EventHandlingOnRenderProp: StoryObj = {
  args: {
    ...Default.args,
    onChange: (args: SelectOption) => console.log('changed to', args),
    children: (
      <>
        <Select.Button>
          {({ value, open }) => (
            <Select.ButtonWrapper
              isOpen={open}
              onClick={(args) => console.log('custom click')}
            >
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
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Select onChange={...}>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper
        isOpen={open}
        onClick={...}
        >
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
</Select>`,
      },
    },
  },
};

/**
 * `Select` allows for event handlers to be added to the component.
 *
 * * `onChange` fires when a value is selected (with value of type `SelectOption`)
 *
 * If not using a render prop, you can also add an `onClick` handler to `Select.Button` directly
 *
 * * `onClick` fires when the trigger (`.ButtonWrapper`) is clicked
 *
 * **NOTE**: `onClick` has no function when using a render prop
 */
export const EventHandlingOnStandardButton: StoryObj = {
  args: {
    ...Default.args,
    children: (
      <>
        <Select.Button
          onClick={(ev: MouseEvent) => console.log('external click')}
        >
          - Select Option -
        </Select.Button>
        <Select.Options>
          {exampleOptions.map((option) => (
            <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>
          ))}
        </Select.Options>
      </>
    ),
    onChange: (args: SelectOption) => console.log('external change', args),
  },
};

/**
 * You can select a different option to show when rendered.
 */
export const WithSelectedOption: StoryObj<typeof Select> = {
  args: {
    ...Default.args,
    'aria-label': 'Favorite Animal',
    defaultValue: exampleOptions[1],
  },
};

/**
 * Use the `by` option to determine the selection (when using objects for the value list). This helps when you want to compare by value, not reference.
 * - The type comparison can be by a named key in the object `by={'id'}` or using a comparison function
 *
 * See: https://headlessui.com/v1/react/listbox#listbox
 */
export const WithSelectedBy: StoryObj<typeof Select> = {
  args: {
    ...WithSelectedOption.args,
    defaultValue: { ...exampleOptions[1] },
    by: 'key',
  },
};

/**
 * You can add a `name` prop to generate form fields for the value object.
 *
 * In this example, the field name is `"interactive-select"`, and the value is an object storing `{label: string, key: string}`.
 *
 * This will generate hidden fields with names:
 * * `interactive-select[label]`
 * * `interactive-select[key]`
 *
 */
export const WithFieldName: StoryObj = {
  args: {
    ...Default.args,
    subLabel: 'Additional descriptive text',
    children: (
      <>
        <Select.Button>
          {({ value, open, disabled }) => (
            <Select.ButtonWrapper isOpen={open}>
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
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Select onChange={...}>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper isOpen={open}>
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
</Select>`,
      },
    },
  },
};

export const WithFieldNote: StoryObj = {
  args: {
    ...Default.args,
    fieldNote: 'Choose your beast',
    children: (
      <>
        <Select.Button>
          {({ value, open, disabled }) => (
            <Select.ButtonWrapper isOpen={open}>
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
      </>
    ),
  },
  parameters: {
    ...Default.parameters,
  },
};

/**
 * You can implement a `Select.Button` with a render prop. This exposes several useful values to
 * control the appearance of the rendered button. The render prop case is "Headless", in that it has
 * no styling by default.
 */
export const UncontrolledHeadless: StoryObj = {
  args: {
    'aria-label': 'some label',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'select',
    children: (
      <>
        <Select.Button>
          {({ value, open, disabled }) => (
            <button className="fpo">
              {
                {
                  Birds: '🐦🦆🦜',
                  Dogs: '🐶🐕🐩',
                  Cats: '🐈🐱🐈‍⬛',
                }[value.label as string]
              }
            </button>
          )}
        </Select.Button>
        <Select.Options>
          {exampleOptions.map((option) => (
            <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>
          ))}
        </Select.Options>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Select onChange={...}>
  <Select.Button>
    {({ value, open, disabled }) => (
      <button className="fpo">
      {
        {
          Birds: '🐦🦆🦜',
          Dogs: '🐶🐕🐩',
          Cats: '🐈🐱🐈‍⬛',
        }[value.label as string]
      }
      </button>
    )}
  </Select.Button>
  <Select.Options>
  {exampleOptions.map((option) => (
    <Select.Option key={option.key} value={option}>
      {option.label}
    </Select.Option>
  ))}
  </Select.Options>
</Select>`,
      },
    },
  },
};

/**
 * You can use `Select.ButtonWrapper` to borrow the existing style used for controlled `Select` components.
 */
export const StyledUncontrolled: StoryObj = {
  args: {
    'aria-label': 'some label',
    'data-testid': 'dropdown',
    defaultValue: exampleOptions[0],
    name: 'select',
    children: (
      <>
        <Select.Button>
          {({ value, open, disabled }) => (
            <Select.ButtonWrapper isOpen={open}>
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
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Select onChange={...}>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper isOpen={open}>
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
</Select>`,
      },
    },
  },
};

/**
 * You can select multiple values by passing `multiple` to the parent element. When doing this,
 * make sure all props that use the value (e.g., `value` and `defaultValue`) should use an array instead
 * of an object or value for the individual `Select.Option` entries.
 *
 * When handling the button text, `value` represents the data for all options selected. This allows for a flexible
 * layout to fit the needs of the design.
 *
 * Hidden form inputs are generated for each option selected and take the following form:
 * - `name[arrayIndex][key]`
 * - `name[arrayIndex][value]`
 */
export const Multiple: StoryObj = {
  args: {
    ...Default.args,
    label: 'Favorite Animal(s)',
    multiple: true,
    'data-testid': 'select-field',
    defaultValue: [exampleOptions[0]],
    className: 'w-[240px]',
    name: 'standard-button',
    children: (
      <>
        <Select.Button>
          {({ value, open, disabled }) => (
            <Select.ButtonWrapper isOpen={open}>
              {value.length > 0 ? value.length : 'none'} selected
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
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Select multiple>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper isOpen={open}>
        {value.length > 0 ? value.length : 'none'} selected
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
</Select>`,
      },
    },
  },
};

/**
 * The component provides some basic styles to handle long text in the provided field. Use
 * `shouldTruncate` on `.ButtonWrapper` to truncate the text with an ellipsis.
 */
export const MultipleWithTruncation: StoryObj = {
  args: {
    ...Default.args,
    label: 'Favorite Animal(s)',
    multiple: true,
    'data-testid': 'dropdown',
    defaultValue: [exampleOptions[0]],
    className: 'w-[240px]',
    name: 'standard-button',
    children: (
      <>
        <Select.Button>
          {({ value, open, disabled }) => (
            <Select.ButtonWrapper isOpen={open} shouldTruncate>
              {value.length > 0 ? value.length : 'none'} long selected
              description
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
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Select multiple>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper isOpen={open} shouldTruncate>
        {value.length > 0 ? value.length : 'none'} long selected
        description
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
</Select>`,
      },
    },
  },
};

/**
 * The field trigger width can be set with utility classes. By default, dropdown popover will exppand to match the width.
 */
export const AdjustedWidth: StoryObj = {
  args: {
    ...Default.args,
    className: 'w-[240px]',
  },
};

/**
 * We lock the maximum height of the option list to 1/4 of the available screen height. Scrolling is allowed in the list, and
 * keyboard navigation (showing the items off the edge of the screen) is handled when used.
 */
export const LongOptionList: StoryObj = {
  args: {
    ...Default.args,
    defaultValue: 'test3',
    className: 'w-[240px]',
    children: (
      <>
        <Select.Button>
          {({ value, open, disabled }) => (
            <Select.ButtonWrapper isOpen={open} shouldTruncate>
              {value}
            </Select.ButtonWrapper>
          )}
        </Select.Button>
        <Select.Options>
          {Array(30)
            .fill('test')
            .map((option, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Select.Option key={`${option}-${index}`} value={option + index}>
                {option}
                {index}
              </Select.Option>
            ))}
        </Select.Options>
      </>
    ),
  },
  play: async (playOptions) => {
    const canvas = within(playOptions.canvasElement);
    const selectButton = await canvas.findByRole('button');

    await openMenu(playOptions);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}{ArrowDown}');

    await expect(selectButton.getAttribute('aria-expanded')).toEqual('true');
  },
  parameters: {
    layout: 'centered',
    chromatic: { delay: 450 },
    docs: {
      source: {
        code: `
<Select onChange={...}>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper isOpen={open} shouldTruncate>
        {value}
      </Select.ButtonWrapper>
    )}
  </Select.Button>
  <Select.Options>
  {Array(30)
    .fill('test')
    .map((option, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Select.Option key={\`$\{option}-$\{index}\`} value={option + index}>
        {option}
        {index}
      </Select.Option>
    ))}
  </Select.Options>
</Select>`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>
    ),
  ],
};

/**
 * If you want a different width for the trigger and the dropdown popover, you can control them separately.
 */
export const SeparateButtonAndMenuWidth: StoryObj = {
  args: {
    ...Default.args,
    className: 'w-[160px]',
    optionsClassName: 'w-[384px]',
  },
  play: selectCat,
  parameters: {
    chromatic: {
      diffIncludeAntiAliasing: false,
      diffThreshold: 0.72,
    },
    docs: {
      ...Default.parameters?.docs,
    },
  },
  decorators: [(Story) => <div className="p-spacing-size-4">{Story()}</div>],
};

/**
 * Each Select can be marked as disabled. This will update the visual treatment to indicate the field cannot be changed (but by default
 * will show the selected value).
 */
export const Disabled: StoryObj = {
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
  },
};

/**
 * Select fields can be marked as required by using the `required` prop.
 */
export const Required: StoryObj = {
  args: {
    ...Default.args,
    required: true,
    showHint: true,
    className: 'w-[384px]',
    subLabel: 'Some descriptive text',
  },
  parameters: {
    ...Default.parameters,
  },
};

/**
 * Fields can be marked as optional by using `required` as false, but `showHint` as true.
 */
export const Optional: StoryObj = {
  args: {
    ...Default.args,
    required: false,
    showHint: true,
    subLabel: 'Some descriptive text',
    className: 'w-[384px]',
  },
  parameters: {
    ...Default.parameters,
  },
};

/**
 * You can supply a warning field note by specifing the status of "error".
 */
export const Error: StoryObj = {
  args: {
    ...Required.args,
    status: 'critical',
    fieldNote: 'Some text describing error',
  },
  parameters: {
    ...Required.parameters,
  },
};

/**
 * You can supply a warning field note by specifing the status of "warning".
 */
export const Warning: StoryObj = {
  args: {
    ...Optional.args,
    status: 'warning',
    fieldNote: 'Some text describing warning',
  },
  parameters: {
    ...Optional.parameters,
  },
};

/**
 * Having a visible label is not necessary. In those cases, use `aria-label` to set a accessible label for the field
 */
export const NoVisibleLabel: StoryObj = {
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label',
  },
  parameters: {
    ...Default.parameters,
  },
};

/**
 * No visible label is required. In such cases, you must use an equivalent label for accessibility, like `aria-label`.
 */
export const NoVisibleLabelButRequired: StoryObj = {
  args: {
    ...Default.args,
    label: undefined,
    'aria-label': 'hidden label',
    required: true,
    className: 'w-[384px]',
  },
  parameters: {
    ...Default.parameters,
  },
};

/**
 * `Select` can be both disabled and required.
 */
export const DisabledRequired: StoryObj = {
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
  },
};

/**
 * Options for each `Select` can be aligned on different sides of the target button.
 *
 * More information: https://headlessui.com/react/popover
 */
export const OptionsRightAligned: StoryObj = {
  args: {
    ...Default.args,
    optionsClassName: 'w-[384px]',
    children: (
      <>
        <Select.Button>
          {({ value, open, disabled }) => (
            <Select.ButtonWrapper isOpen={open}>
              {value.label}
            </Select.ButtonWrapper>
          )}
        </Select.Button>
        <Select.Options anchor={{ to: 'bottom end', gap: 12 }}>
          {exampleOptions.map((option) => (
            <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>
          ))}
        </Select.Options>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<Select onChange={...}>
  <Select.Button>
    {({ value, open, disabled }) => (
      <Select.ButtonWrapper isOpen={open}>
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
</Select>`,
      },
    },
  },
  play: selectCat,
  decorators: [
    (Story) => (
      <div className="p-spacing-size-4 pb-spacing-size-8">{Story()}</div>
    ),
  ],
};

/**
 * This shows the contents of `Select` upon render. Mostly to demonstrate it is possible, to capture a snapshot of the appearance.
 */
export const OpenByDefault: StoryObj = {
  ...Default,
  parameters: {
    layout: 'centered',
    chromatic: { delay: 300, disableSnapshot: true },
    docs: {
      ...Default.parameters?.docs,
    },
  },
  play: selectCat,
};
