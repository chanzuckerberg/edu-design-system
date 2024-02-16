import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import { Select } from './Select';
import Icon from '../Icon';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    badges: ['1.2'],
    layout: 'centered',
  },
  argTypes: {
    multiple: {
      description: 'Whether multiple values are allowed in this instance',
    },
    children: {
      control: {
        type: null,
      },
    },
    value: {
      table: {
        description: 'The value of the select field (when controlled)',
      },
    },
    defaultValue: {
      description: 'The default value of the select field (when uncontrolled)',
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
    onChange: {
      description: 'Optional change handler. Fires when a value is selected',
      table: {
        type: {
          summary: 'SelectOption',
          detail:
            'An object with at least label (as string) and any other useful key/value pairs',
        },
      },
    },
  },
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

  // Target the body of the iframe since we now use PopperJS
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
            <button className="fpo">{value.label}</button>
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
    'data-testid': 'dropdown',
    defaultValue: [exampleOptions[0]],
    className: 'w-60',
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
};

/**
 * The field trigger width can be set with utility classes. By default, dropdown popover will exppand to match the width.
 */
export const AdjustedWidth: StoryObj = {
  args: {
    ...Default.args,
    className: 'w-60',
  },
};

/**
 * If you want a different width for the trigger and the dropdown popover, you can control them separately.
 */
export const SeparateButtonAndMenuWidth: StoryObj = {
  args: {
    ...Default.args,
    className: 'w-40',
    optionsClassName: 'w-96',
  },
  play: selectCat,
  parameters: {
    chromatic: {
      diffIncludeAntiAliasing: false,
      diffThreshold: 0.72,
    },
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
};

/**
 * Each Select can be marked as disabled. This will update the visual treatment to indicate the field cannot be changed (but by default
 * will show the selected value).
 */
export const Disabled: StoryObj = {
  args: {
    ...Default.args,
    disabled: true,
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
};

/**
 * Options for each `Select` can be aligned on different sides of the target button. Options for `placement` defined by
 * PopperJS.
 *
 * More information: https://popper.js.org/docs/v2/constructors/#options
 */
export const OptionsRightAligned: StoryObj = {
  parameters: {
    chromatic: {
      delay: 300,
    },
  },
  args: {
    ...Default.args,
    className: 'w-60',
    optionsClassName: 'w-96',
    placement: 'bottom-end',
  },
  play: openMenu,
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
};

/**
 * As an alternative rendering method, you can use several types of render props for fine-grained control of the button rendering, and
 * the rendering of the list itself. Here, we use a render prop to control the contents of `Select`
 *
 * For more information on `Select` render props, review: https://headlessui.com/react/listbox#using-render-props
 */
export const UsingFunctionProps: StoryObj = {
  render: () => {
    const [selectedOption, setSelectedOption] =
      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useState<(typeof exampleOptions)[0]>();

    return (
      <Select
        aria-label="Favorite Animal"
        as="div"
        data-testid="dropdown"
        name="interactive-with-children"
        onChange={setSelectedOption}
        value={selectedOption}
      >
        {({ open }) => (
          <>
            <Select.Button
              // Because we're using a render prop to completely control the styling and icon of the
              // button, we need to configure this component to render as a Fragment. Otherwise we'd
              // render two, nested buttons.
              as={React.Fragment}
            >
              {() => (
                <button aria-expanded={open} className="fpo">
                  {selectedOption?.label || 'Select'}
                  <Icon
                    className="ml-4"
                    name="filter-list"
                    purpose="decorative"
                  />
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
        )}
      </Select>
    );
  },
};

/**
 * This shows the contents of `Select` upon render. Mostly to demonstrate it is possible, to capture a snapshot of the appearance.
 */
export const OpenByDefault: StoryObj = {
  ...Default,
  parameters: {
    badges: ['1.2'],
    layout: 'centered',
    chromatic: { delay: 300, disableSnapshot: true },
  },
  play: selectCat,
};
