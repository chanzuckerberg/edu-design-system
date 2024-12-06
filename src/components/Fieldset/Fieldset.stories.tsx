import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Fieldset } from './Fieldset';
import Checkbox from '../Checkbox';
import Radio from '../Radio';

export default {
  title: 'Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
    badges: ['api-2.0', 'theme-2.0'],
  },
  // TODO: fix up the sub-component documentation for Fieldset.Legend
  subcomponents: {
    'Fieldset.Legend': Fieldset.Legend,
    'Fieldset.Items': Fieldset.Items,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Fieldset>;
type LegendArgs = React.ComponentProps<typeof Fieldset.Legend>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Fieldset.Legend title="Legend" />
        <Fieldset.Items className="fpo">
          <div>Fieldset Content (Radio Buttons or Checkboxes)</div>
        </Fieldset.Items>
      </>
    ),
  },
};

export const WithCriticalFootNote: StoryObj<Args> = {
  args: {
    fieldNote: 'Attached field note to field set',
    status: 'critical',
    children: (
      <>
        <Fieldset.Legend
          subtitle="Some extra descriptive text"
          title="Critical Fieldset"
        />
        <Fieldset.Items className="fpo">
          <div>Fieldset Content (Radio Button or Checkbox)</div>
          <div>Fieldset Content (Radio Button or Checkbox)</div>
          <div>Fieldset Content (Radio Button or Checkbox)</div>
        </Fieldset.Items>
      </>
    ),
  },
};

export const FieldsetLegend: StoryObj<LegendArgs> = {
  args: {
    title: 'Legend',
  },
  render: (args) => <Fieldset.Legend {...args} />,
};

export const FieldsetLegendOptional: StoryObj<LegendArgs> = {
  args: {
    title: 'Legend',
    showHint: true,
  },
  render: FieldsetLegend.render,
};

export const FieldsetLegendRequired: StoryObj<LegendArgs> = {
  args: {
    title: 'Legend',
    showHint: true,
    required: true,
  },
  render: FieldsetLegend.render,
};

export const FieldsetLegendWithSubtitle: StoryObj<LegendArgs> = {
  args: {
    title: 'Legend',
    subtitle: 'With additional Subtitle',
  },
  render: FieldsetLegend.render,
};

/**
 * In this implementation example, we show how to compose checkboxes into the `Fieldset.Items` using the render prop.
 * This allows for controlling the state of the contents at the top level `Fieldset` component.
 *
 * **NOTE**: storybook won't show the contents of the render prope in the code inspector, but it looks like the following:
 * ```
 * <Fieldset.Items>
 *  {({ isDisabled, status }) => {
 *    return (
 *      <>
 *        <Checkbox
 *          disabled={isDisabled}
 *          id="1"
 *          isError={status === 'critical'}
 *          label="Checbox"
 *          name="test-1"
 *        />
 *        <Checkbox
 *          disabled={isDisabled}
 *          id="2"
 *          isError={status === 'critical'}
 *          label="Checbox"
 *          name="test-2"
 *        />
 *      </>
 *    );
 *  }}
 * </Fieldset.Items>
 * ```
 */
export const WithCheckboxes: StoryObj<Args> = {
  parameters: { badges: ['api-1.3', 'theme-2.0', 'implementationExample'] },
  args: {
    fieldNote: 'Attached field note to field set',
    children: (
      <>
        <Fieldset.Legend
          subtitle="Some extra descriptive text"
          title="Critical Fieldset"
        />
        <Fieldset.Items>
          {({ isDisabled, status }) => {
            return (
              <>
                <Checkbox
                  disabled={isDisabled}
                  isError={status === 'critical'}
                  label="Checkbox"
                  name="test-checkbox"
                />
                <Checkbox
                  disabled={isDisabled}
                  isError={status === 'critical'}
                  label="Checkbox"
                  name="test-checkbox"
                />
              </>
            );
          }}
        </Fieldset.Items>
      </>
    ),
  },
};

export const WithDisabledCheckboxes: StoryObj<Args> = {
  parameters: { badges: ['api-1.3', 'theme-2.0', 'implementationExample'] },
  args: {
    fieldNote: 'Attached field note to field set',
    isDisabled: true,
    children: WithCheckboxes.args?.children,
  },
};

export const WithErrorCheckboxes: StoryObj<Args> = {
  parameters: { badges: ['api-1.3', 'theme-2.0', 'implementationExample'] },
  args: {
    fieldNote: 'Attached field note to field set',
    status: 'critical',
    children: WithCheckboxes.args?.children,
  },
};

export const WithRadioButton: StoryObj<Args> = {
  parameters: { badges: ['api-1.3', 'theme-2.0', 'implementationExample'] },
  args: {
    fieldNote: 'Attached field note to field set',
    children: (
      <>
        <Fieldset.Legend
          subtitle="Some extra descriptive text"
          title="Critical Fieldset"
        />
        <Fieldset.Items>
          {({ isDisabled, status }) => {
            return (
              <>
                <Radio
                  disabled={isDisabled}
                  isError={status === 'critical'}
                  label="Radio Button"
                  name="test-radio"
                />
                <Radio
                  disabled={isDisabled}
                  isError={status === 'critical'}
                  label="Radio Button"
                  name="test-radio"
                />
              </>
            );
          }}
        </Fieldset.Items>
      </>
    ),
  },
};

export const WithDisabledRadioButton: StoryObj<Args> = {
  parameters: { badges: ['api-1.3', 'theme-2.0', 'implementationExample'] },
  args: {
    fieldNote: 'Attached field note to field set',
    isDisabled: true,
    children: WithRadioButton.args?.children,
  },
};

export const WithErrorRadioButton: StoryObj<Args> = {
  parameters: { badges: ['api-1.3', 'theme-2.0', 'implementationExample'] },
  args: {
    fieldNote: 'Attached field note to field set',
    status: 'critical',
    children: WithRadioButton.args?.children,
  },
};
