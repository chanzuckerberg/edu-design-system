import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import clsx from 'clsx';
import React from 'react';
import type { OptionsAlignType, VariantType } from './Select';
import { Select } from './Select';
import Icon from '../Icon';
import styles from './Select.stories.module.css';

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
}

/**
 * Play function to use with interactive stories
 */
const selectCat: StoryObj['play'] = async (playOptions) => {
  const { canvasElement } = playOptions;
  const canvas = within(canvasElement);

  // Target the body of the iframe since we now use PopperJS
  const popoverCanvas = within(document.body);

  console.log(document.body);

  // Open the dropdown.
  const selectButton = await canvas.findByRole('button');
  await userEvent.click(selectButton);

  // Select the best option.
  console.log(document.body.innerHTML);

  const bestOption = await popoverCanvas.findByText('Cats');
  await userEvent.click(bestOption);

  // Reopen the dropdown; selecting an option closed it.
  await userEvent.click(selectButton);
};

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

export const NoVisibleLabel: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren aria-label="Favorite Animal" />
  ),
};

export const OptionsRightAligned: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      optionsAlign="right"
      optionsClassName="w-96"
    />
  ),
  play: selectCat,
};

export const OptionsLeftAligned: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      aria-label="Favorite Animal"
      optionsAlign="left"
      optionsClassName="w-96"
    />
  ),
  play: selectCat,
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
      diffThreshold: 0.25,
    },
  },
};

export const UsingChildrenProp: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      labelComponent={<Select.Label>Favorite Animal</Select.Label>}
    />
  ),
};

export const UsingFunctionChildrenProp: StoryObj = {
  render: () => <InteractiveExampleUsingFunctionChildren />,
};

// This story just opens the dropdown automatically so chromatic can test it.
export const OpenByDefault: StoryObj = {
  ...Default,
  play: selectCat,
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
