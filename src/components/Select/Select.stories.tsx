import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import clsx from 'clsx';
import React from 'react';
import type { OptionsAlignType, VariantType } from './Select';
import { Select } from './Select';
import styles from './Select.stories.module.css';
import Icon from '../Icon';

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: {
    'Select.Button': Select.Button,
    'Select.Label': Select.Label,
    'Select.Options': Select.Options,
    'Select.Option': Select.Option,
  },
  parameters: {
    badges: [BADGE.BETA],
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
    <div className={styles['interactive-example']}>
      <Select
        aria-label={props['aria-label']}
        className={clsx(!compact && styles['select--non-compact'])}
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
}

// This story just tests the case where a function in passed in that wraps the children.
function InteractiveExampleUsingFunctionChildren() {
  const [selectedOption, setSelectedOption] =
    React.useState<(typeof exampleOptions)[0]>();

  return (
    <div className={styles['interactive-example']}>
      <Select
        aria-label="Favorite Animal"
        as="div"
        className={styles['select--non-compact']}
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
                    className={styles['function-children__icon']}
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

export const Default: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren aria-label="Favorite Animal" />
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren aria-label="Favorite Animal" disabled />
  ),
};

export const DefaultWithVisibleLabel: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      labelComponent={<Select.Label>Favorite Animal</Select.Label>}
    />
  ),
};

export const Compact: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      variant="compact"
    />
  ),
};

export const CompactWithOptionsRightAligned: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      optionsAlign="right"
      variant="compact"
    />
  ),
};

export const SeparateButtonAndMenuWidth: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      optionsClassName={styles['separate-button-and-menu-width']}
    />
  ),
};

export const UsingChildrenProp: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      labelComponent={<Select.Label>Favorite Animal</Select.Label>}
    />
  ),
};

export const UsingChildrenPropAndNoVisibleLabel: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren aria-label="Favorite Animal" />
  ),
};

export const CompactUsingChildrenPropAndNoVisibleLabel: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      variant="compact"
    />
  ),
};

export const UsingFunctionChildrenProp: StoryObj = {
  render: () => <InteractiveExampleUsingFunctionChildren />,
};

// This story just opens the dropdown automatically so chromatic can test it.
export const OpenByDefault: StoryObj = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Open the dropdown.
    const dropdownButton = await canvas.findByRole('button');
    await userEvent.click(dropdownButton);
    // Select the best option.
    const bestOption = await canvas.findByText('Cats');
    await userEvent.click(bestOption);
    // Reopen the dropdown; selecting an option closed it.
    await userEvent.click(dropdownButton);
  },
};

export const WithSelectedOption: StoryObj = {
  args: {
    value: exampleOptions[0],
  },
  render: ({ value }) => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      labelComponent={<Select.Label>Favorite Animal</Select.Label>}
      value={value}
    />
  ),
};
