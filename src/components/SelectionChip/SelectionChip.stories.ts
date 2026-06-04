import type { StoryObj, Meta } from '@storybook/react-webpack5';
import type React from 'react';

import { SelectionChip } from './SelectionChip';

export default {
  title: 'Components/SelectionChip',
  component: SelectionChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'version:1.1'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof SelectionChip>;
type Story = StoryObj<Args>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    leadingIcon: 'add',
  },
};

/**
 * Selection chips can be marked as disabled.
 */
export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

/**
 * when using a concrolled version of `SelectionChip`, we let React control the state. In this situation, it will not behave as a native component upon click/interaction.
 */
export const ControlledChecked: Story = {
  args: {
    ...WithIcon.args,
    checked: true,
    onChange: () => {},
  },
};

/**
 * This will mimic the behavior of the native checkbox control, allowing clicks at will.
 */
export const UncontrolledChecked: Story = {
  args: {
    ...WithIcon.args,
    defaultChecked: true,
  },
};
