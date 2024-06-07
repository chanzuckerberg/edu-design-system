import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { ToastNotification } from './ToastNotification';

export default {
  title: 'Components/V2/ToastNotification',
  component: ToastNotification,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0', 'current-2.0'],
  },
  argTypes: {
    onDismiss: { action: 'dismissed' },
    timeout: { table: { disable: true } },
  },
  args: {
    title: "You've got a temporary notification!",
    className: 'w-96',
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

export const AutoDismiss: StoryObj<Args> = {
  args: {
    ...Default.args,
    dissmissType: 'auto',
    timeout: 500,
    onDismiss: () => console.log('trigger onDismiss'),
  },
};
