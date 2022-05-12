import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';
import styles from './Checkbox.stories.module.css';
import CheckboxInput from '../CheckboxInput';
import CheckboxLabel from '../CheckboxLabel';

const defaultArgs = {
  disabled: false,
  label: 'Checkbox',
};

export default {
  title: 'Molecules/Forms/Checkbox',
  component: Checkbox,
  args: defaultArgs,
  argTypes: {
    // For some reason Storybook does not infer all `checked` correctly;
    checked: {
      control: 'radio',
      options: [true, false, 'indeterminate'],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0.25rem', // Provides spacing to see focus indicator around checkbox.
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Checkbox>;

/**
 * Controlled example to make checked stories interactive.
 */
function CheckedExample(args: Args) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  return <Checkbox checked={checked} onChange={handleChange} {...args} />;
}

export const Default: StoryObj<Args> = {};

export const Checked: StoryObj<Args> = {
  render: () => <CheckedExample {...defaultArgs} />,
};

export const Small: StoryObj<Args> = {
  ...Default,
  args: {
    size: 'sm',
  },
};

export const SmallChecked: StoryObj<Args> = {
  render: () => <CheckedExample size="sm" {...defaultArgs} />,
};

export const Indeterminate: StoryObj<Args> = {
  ...Default,
  args: {
    checked: 'indeterminate',
    readOnly: true,
  },
};

export const Disabled = {
  render: () => (
    <table style={{ borderSpacing: '2rem' }}>
      <tbody>
        {[false, true, 'indeterminate' as const].map((checked, i) => (
          <tr key={i}>
            <td>
              <Checkbox checked={checked} disabled label="Disabled" />
            </td>
            <td>
              <Checkbox checked={checked} label="Default" readOnly />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const WithoutVisibleLabel: StoryObj<Args> = {
  ...Default,
  args: {
    'aria-label': 'a checkbox has no name',
    label: undefined,
  },
  render: (args) => (
    <>
      <Checkbox {...args} />
      <Checkbox {...args} checked readOnly />
      <Checkbox {...args} checked="indeterminate" readOnly />
      <Checkbox {...args} disabled />
      <Checkbox {...args} checked disabled />
      <Checkbox {...args} checked="indeterminate" disabled />
    </>
  ),
};

export const LongLabels = {
  render: () => {
    const label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

    return (
      <div className={styles['longlabels--grid']}>
        <Checkbox label={label} />
        <Checkbox label={label} size="sm" />
        <Checkbox disabled label={label} />
        <Checkbox disabled label={label} size="sm" />
      </div>
    );
  },
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

// For visual regression testing
export const LabelsOnly: StoryObj = {
  render: (args) => (
    <>
      <CheckboxLabel htmlFor="md-label" {...args} text="Medium label" />
      <br />
      <CheckboxLabel
        htmlFor="sm-label"
        {...args}
        size="sm"
        text="Small label"
      />
      <br />
      <CheckboxLabel
        {...args}
        htmlFor="long-md-label"
        text="Long medium label lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <br />
      <CheckboxLabel
        {...args}
        htmlFor="long-sm-label"
        size="sm"
        text="Long small label lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <br />
      <CheckboxLabel
        {...args}
        disabled
        htmlFor="md-disabled-label"
        text="Medium disabled"
      />
      <br />
      <CheckboxLabel
        {...args}
        disabled
        htmlFor="sm-disabled-label"
        size="sm"
        text="Small disabled"
      />
      <br />
      <CheckboxLabel
        {...args}
        disabled
        htmlFor="long-md-disabled-label"
        text="Long medium disabled label lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <br />
      <CheckboxLabel
        {...args}
        disabled
        htmlFor="long-sm-disabled-label"
        size="sm"
        text="Long small disabled label lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </>
  ),
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const WithCustomPositioning = {
  render: () => (
    <span>
      <CheckboxLabel htmlFor="test" text="label on left" />
      <CheckboxInput id="test" />
    </span>
  ),
};
