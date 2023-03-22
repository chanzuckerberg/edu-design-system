import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import clsx from 'clsx';
import React from 'react';
import type { OptionsAlignType, VariantType } from './Dropdown';
import { Dropdown } from './Dropdown';
import DropdownButton from '../DropdownButton';
import Icon from '../Icon';
import styles from './Dropdown.stories.module.css';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    badges: ['1.0', BADGE.DEPRECATED],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '1rem', // Provides spacing to see activity around dropdown.
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

type Props = {
  labelText?: string;
  'aria-label'?: string;
  labelComponent?: React.ReactNode;
  optionsAlign?: OptionsAlignType;
  optionsClassName?: string;
  variant?: VariantType;
};

const exampleOptions = [
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

function InteractiveExampleUsingSeparateProps(props: Props) {
  const { optionsAlign, optionsClassName, variant } = props;
  const compact = variant === 'compact';

  const [selectedOption, setSelectedOption] =
    React.useState<(typeof exampleOptions)[0]>();

  const componentClassName = clsx(
    styles['interactive-example'],
    optionsAlign === 'right' && styles['interactive-example--align-right'],
  );
  return (
    <div className={componentClassName}>
      <Dropdown
        buttonText={selectedOption?.label || 'Select'}
        className={clsx(!compact && styles['dropdown--non-compact'])}
        data-testid="dropdown"
        onChange={setSelectedOption}
        options={exampleOptions}
        optionsAlign={optionsAlign}
        optionsClassName={optionsClassName}
        value={selectedOption}
        variant={variant}
        {...props}
      />
    </div>
  );
}

function InteractiveExampleUsingChildren(props: Props) {
  const { variant } = props;
  const compact = variant === 'compact';

  const [selectedOption, setSelectedOption] =
    React.useState<(typeof exampleOptions)[0]>();

  return (
    <div className={styles['interactive-example']}>
      <Dropdown
        aria-label={props['aria-label']}
        className={clsx(!compact && styles['dropdown--non-compact'])}
        data-testid="dropdown"
        onChange={setSelectedOption}
        value={selectedOption}
        variant={variant}
      >
        {props.labelComponent}
        <Dropdown.Button>{selectedOption?.label || 'Select'}</Dropdown.Button>
        <Dropdown.Options>
          {exampleOptions.map((option) => (
            <Dropdown.Option key={option.key} value={option}>
              {option.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>
    </div>
  );
}

// This story just tests the case where a function in passed in that wraps the children.
function InteractiveExampleUsingFunctionChildren() {
  const [selectedOption, setSelectedOption] =
    React.useState<(typeof exampleOptions)[0]>();

  return (
    <div className={styles['interactive-example']}>
      <Dropdown
        aria-label="Favorite Animal"
        as="div"
        className={styles['dropdown--non-compact']}
        data-testid="dropdown"
        onChange={setSelectedOption}
        value={selectedOption}
      >
        {({ open }) => (
          <>
            <Dropdown.Button
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
            </Dropdown.Button>
            <Dropdown.Options>
              {exampleOptions.map((option) => (
                <Dropdown.Option key={option.key} value={option}>
                  {option.label}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
          </>
        )}
      </Dropdown>
    </div>
  );
}

export const Default: StoryObj = {
  render: () => (
    <InteractiveExampleUsingSeparateProps labelText="Favorite Animal" />
  ),
};

export const DefaultWithoutVisibleLabel: StoryObj = {
  render: () => (
    <InteractiveExampleUsingSeparateProps aria-label="Favorite Animal" />
  ),
};

export const Compact: StoryObj = {
  render: () => (
    <InteractiveExampleUsingSeparateProps
      aria-label="Favorite Animal"
      variant="compact"
    />
  ),
};

export const CompactWithOptionsRightAligned: StoryObj = {
  render: () => (
    <InteractiveExampleUsingSeparateProps
      aria-label="Favorite Animal"
      optionsAlign="right"
      variant="compact"
    />
  ),
};

export const SeparateButtonAndMenuWidth: StoryObj = {
  render: () => (
    <InteractiveExampleUsingSeparateProps
      aria-label="Favorite Animal"
      optionsClassName={styles['separate-button-and-menu-width']}
    />
  ),
};

export const UsingChildrenProp: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      labelComponent={<Dropdown.Label>Favorite Animal</Dropdown.Label>}
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

// This story just opens the dropdown automataically so chromatic can test it.
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

export const DropdownButtonOnly = {
  render: () => (
    <>
      <DropdownButton isOpen={false}>Dropdown button closed</DropdownButton>
      <br />
      <DropdownButton isOpen>Dropdown button open</DropdownButton>
    </>
  ),
  parameters: {
    snapshot: { skip: true }, // For visual regression purposes since button should be used in conjunction with the actual Dropdown.
  },
};
