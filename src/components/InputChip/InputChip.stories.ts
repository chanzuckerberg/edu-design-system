import type { StoryObj, Meta } from '@storybook/react-webpack5';
import type React from 'react';

import { InputChip } from './InputChip';

export default {
  title: 'Components/InputChip',
  component: InputChip,
  argTypes: {
    onClick: {
      control: false,
    },
    leadingComponent: {
      control: false,
    },
  },
  tags: ['autodocs', 'version:1.0'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof InputChip>;

export const Default: StoryObj<Args> = {
  args: {
    label: 'Chip Label',
    onClick: () => {},
  },
};

export const WithLeadingIcon: StoryObj<Args> = {
  args: {
    ...Default.args,
    leadingComponent: 'person-encircled',
  },
};

export const Disabled: StoryObj<Args> = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};
