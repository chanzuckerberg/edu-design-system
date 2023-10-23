import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import clsx from 'clsx';
import React from 'react';
import type { OptionsAlignType, VariantType } from './Select';
import { Select } from './Select';
import Icon from '../Icon';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    badges: ['1.2'],
    layout: 'centered',
  },
} as Meta;

type Props = {
  'aria-label'?: string;
  labelComponent?: React.ReactNode;
  optionsAlign?: OptionsAlignType;
  optionsClassName?: string;
  variant?: VariantType;
  disabled?: boolean;
  value?: SelectOption;
};

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

function InteractiveExampleUsingChildren(props: Props) {
  const { variant, optionsAlign, optionsClassName, disabled, value } = props;
  const compact = variant === 'compact';

  const [selectedOption, setSelectedOption] = React.useState<
    SelectOption | undefined
  >(value);

  return (
    <div className="mb-10 p-8">
      <Select
        aria-label={props['aria-label']}
        className={clsx(!compact && 'w-60')}
        data-testid="dropdown"
        disabled={disabled}
        name="interactive-select"
        onChange={setSelectedOption}
        optionsAlign={optionsAlign}
        optionsClassName={optionsClassName}
        value={selectedOption}
        variant={variant}
      >
        {props.labelComponent}
        <Select.Button>{selectedOption?.label || 'Select'}</Select.Button>
        <Select.Options>
          {exampleOptions.map((option) => (
            <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    </div>
  );
}

// This story just tests the case where a function in passed in that wraps the children.
function InteractiveExampleUsingFunctionChildren() {
  const [selectedOption, setSelectedOption] =
    React.useState<(typeof exampleOptions)[0]>();

  return (
    <div className="mb-10 p-8">
      <Select
        aria-label="Favorite Animal"
        as="div"
        className="w-60"
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
    </div>
  );
}

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

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `
// props: {aria-label: 'Favorite Animal'}
function InteractiveExampleUsingChildren(props: Props) {
  const { variant, optionsAlign, optionsClassName, disabled, value } = props;
  const compact = variant === 'compact';

  const [selectedOption, setSelectedOption] = React.useState<
    SelectOption | undefined
  >(value);

  return (
    <div className="mb-10 p-8">
      <Select
        aria-label={props['aria-label']}
        className={clsx(!compact && 'w-60')}
        data-testid="dropdown"
        disabled={disabled}
        onChange={setSelectedOption}
        optionsAlign={optionsAlign}
        optionsClassName={optionsClassName}
        value={selectedOption}
        variant={variant}
      >
        {props.labelComponent}
        <Select.Button>{selectedOption?.label || 'Select'}</Select.Button>
        <Select.Options>
          {exampleOptions.map((option) => (
            <Select.Option key={option.key} value={option}>
              {option.label}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    </div>
  );
}`,
      },
    },
  },
  render: () => (
    <InteractiveExampleUsingChildren aria-label="Favorite Animal" />
  ),
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
            <button className="fpo">{value.label} </button>
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

export const Disabled: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren aria-label="Favorite Animal" disabled />
  ),
};

export const DefaultWithVisibleLabel: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `
// refer to "Default" story code with:
// props: {aria-label: 'Favorite Animal', labelComponent: <Select.Label>Favorite Animal</Select.Label>}`,
      },
    },
  },
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      labelComponent={<Select.Label>Favorite Animal</Select.Label>}
    />
  ),
};

export const Compact: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: '// refer to "Default" story code',
      },
    },
  },
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      variant="compact"
    />
  ),
};

export const NoVisibleLabel: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: '// refer to "Default" story code',
      },
    },
  },
  render: () => (
    <InteractiveExampleUsingChildren aria-label="Favorite Animal" />
  ),
};

export const OptionsRightAligned: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: '// refer to "Default" story code',
      },
    },
    chromatic: {
      delay: 300,
    },
  },
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      optionsAlign="right"
      optionsClassName="w-96"
    />
  ),
  play: openMenu,
};

export const OptionsLeftAligned: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: '// refer to "Default" story code',
      },
    },
    chromatic: {
      delay: 300,
    },
  },
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      optionsAlign="left"
      optionsClassName="w-96"
    />
  ),
  play: openMenu,
};

export const SeparateButtonAndMenuWidth: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      optionsClassName="w-96"
      variant="compact"
    />
  ),
  play: selectCat,
  parameters: {
    chromatic: {
      diffIncludeAntiAliasing: false,
      diffThreshold: 0.72,
      docs: {
        source: {
          code: '// refer to "Default" story code',
        },
      },
    },
  },
};

export const UsingChildrenProp: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: '// refer to "DefaultWithVisibleLabel" story code',
      },
    },
  },
  render: () => (
    <InteractiveExampleUsingChildren
      labelComponent={<Select.Label>Favorite Animal</Select.Label>}
    />
  ),
};

export const UsingFunctionChildrenProp: StoryObj = {
  parameters: {
    docs: {
      source: {
        code: `
function InteractiveExampleUsingFunctionChildren() {
  const [selectedOption, setSelectedOption] =
    React.useState<(typeof exampleOptions)[0]>();

  return (
    <div className="mb-10 p-8">
      <Select
        aria-label="Favorite Animal"
        as="div"
        className="w-60"
        data-testid="dropdown"
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
                <button
                  aria-expanded={open}
                  className={styles['function-children__button']}
                >
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
    </div>
  );
}`,
      },
    },
  },
  render: () => <InteractiveExampleUsingFunctionChildren />,
};

export const OpenByDefault: StoryObj = {
  ...Default,
  parameters: {
    badges: ['1.2'],
    layout: 'centered',
    chromatic: { delay: 300, disableSnapshot: true },
  },
  play: selectCat,
};

export const WithSelectedOption: StoryObj<typeof Select> = {
  parameters: {
    docs: {
      source: {
        code: `
// refer to "Default" story code with:
// props: {aria-label: 'Favorite Animal', labelComponent: <Select.Label>Favorite Animal</Select.Label>, value}`,
      },
    },
  },
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      labelComponent={<Select.Label>Favorite Animal</Select.Label>}
      value={exampleOptions[0]}
    />
  ),
};
