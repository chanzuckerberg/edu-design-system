import type { StoryObj, Meta } from '@storybook/react';
import type React from 'react';

import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta<Args>;

type Args = React.ComponentProps<typeof Label>;

export const Default: StoryObj<Args> = {
  args: {
    text: 'Label',
    required: true,
  },
};

export const Optional: StoryObj<Args> = {
  args: {
    text: 'Label',
    required: false,
  },
};
