import type { StoryObj, Meta } from '@storybook/react';
import type React from 'react';

import { SelectionChip } from './SelectionChip';

export default {
  title: 'Components/SelectionChip',
  component: SelectionChip,
  parameters: {
    badges: ['intro-1.0', 'current-1.0'],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof SelectionChip>;

export const Default: StoryObj<Args> = {
  args: {
    label: 'Label',
  },
};

export const Disabled: StoryObj<Args> = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const WithIcon: StoryObj<Args> = {
  args: {
    ...Default.args,
    leadingIcon: 'alarm-add',
  },
};

export const ControlledChecked: StoryObj<Args> = {
  args: {
    ...WithIcon.args,
    checked: true,
    onChange: () => {},
  },
};

export const UncontrolledChecked: StoryObj<Args> = {
  args: {
    ...WithIcon.args,
    defaultChecked: true,
  },
};
