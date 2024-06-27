import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Fieldset } from './Fieldset';
import type { FieldsetLegendProps } from './Fieldset';
import Checkbox from '../Checkbox';

export default {
  title: 'Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0', 'current-1.3'],
  },
  // TODO: fix up the sub-component documentation for Fieldset.Legend
  subcomponents: {
    FieldsetLegend: Fieldset.Legend,
    FieldsetItems: Fieldset.Items,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Fieldset>;

const FieldsetItemsExample = () => {
  const [checks, setChecks] = useState([false, false, false, false, false]);
  const handleChange = (index: number) => {
    const newChecks = [...checks];
    newChecks[index] = !checks[index];
    setChecks(newChecks);
  };
  return (
    <Fieldset.Items>
      <Checkbox
        checked={checks[0]}
        label="Checkbox label 1"
        onChange={() => handleChange(0)}
      />
      <Checkbox
        checked={checks[1]}
        label="Checkbox label 2"
        onChange={() => handleChange(1)}
      />
      <Checkbox
        checked={checks[2]}
        label="Checkbox label 3"
        onChange={() => handleChange(2)}
      />
      <Checkbox
        checked={checks[3]}
        label="Checkbox label 4"
        onChange={() => handleChange(3)}
      />
      <Checkbox
        checked={checks[4]}
        label="Checkbox label 5"
        onChange={() => handleChange(4)}
      />
    </Fieldset.Items>
  );
};
export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Fieldset.Legend text="Legend" />
        <FieldsetItemsExample />
      </>
    ),
  },
};

export const FieldsetLegends: StoryObj<FieldsetLegendProps> = {
  args: {
    text: 'Legend',
  },
  render: (args) => (
    <>
      <Fieldset.Legend {...args} />
      <Fieldset.Legend {...args} optionalLabel="(optional)" />
      <Fieldset.Legend {...args} optionalLabel="(required)" />
    </>
  ),
};
