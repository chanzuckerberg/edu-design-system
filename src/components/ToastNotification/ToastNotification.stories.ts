import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { ToastNotification } from './ToastNotification';

export default {
  title: 'Components/V2/ToastNotification',
  component: ToastNotification,
  parameters: {
    badges: ['intro-1.0', 'current-2.0'],
  },
  argTypes: { onDismiss: { action: 'dismissed' } },
  args: {
    title: "You've got a temporary notification!",
  },
} as Meta<Args>;

type Args = ComponentProps<typeof ToastNotification>;

export const Default: StoryObj<Args> = {};

export const Favorable: StoryObj<Args> = {
  args: {
    status: 'favorable',
  },
};

export const Critical: StoryObj<Args> = {
  args: {
    status: 'critical',
  },
};

export const NotDismissable: StoryObj<Args> = {
  args: {
    ...Default.args,
    onDismiss: undefined,
  },
};
