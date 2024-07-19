import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { ToastNotification } from './ToastNotification';

export default {
  title: 'Components/ToastNotification',
  component: ToastNotification,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0', 'current-2.0'],
  },
  argTypes: {
    onDismiss: { action: 'trigger dismiss' },
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

/**
 * Notifications can have different status, to indicate errors or destructive actions have completed.
 */
export const Critical: StoryObj<Args> = {
  args: {
    status: 'critical',
  },
};

/**
 * We can restrict the ability to dismiss the notification by not specifying the `onDismiss` method.
 */
export const NotDismissable: StoryObj<Args> = {
  args: {
    ...Default.args,
    onDismiss: undefined,
  },
};

/**
 * Tooltips can be instructed to auto-close after a certain period. After the timeout, the component will call the defined
 * `onDismiss` method. The behavior of the dissmisal is left up to the user, which allows for complete control.
 */
export const AutoDismiss: StoryObj<Args> = {
  args: {
    ...Default.args,
    dissmissType: 'auto',
    timeout: 500,
    onDismiss: () => console.log('trigger onDismiss'),
  },
};
