import type { StoryObj, Meta } from '@storybook/react';

import { FieldLabel } from './FieldLabel';

export default {
  title: 'Components/FieldLabel',
  component: FieldLabel,
  args: {
    children: 'Label',
  },
  parameters: {
    layout: 'centered',
    badges: ['api-2.0', 'theme-2.0'],
  },
} as Meta<typeof FieldLabel>;

type Story = StoryObj<typeof FieldLabel>;

export const Default: Story = {};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const LargeDisabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const MediumDisabled: Story = {
  args: {
    disabled: true,
    size: 'md',
  },
  parameters: {
    axe: {
      disabledRules: ['color-contrast'],
    },
  },
};

export const LongCopy: Story = {
  args: {
    children:
      'Long label lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac id velit ut egestas arcu. Atmaecenas urna, risus donec praesent eu consectetur.',
  },
};
