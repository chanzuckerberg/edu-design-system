import type { StoryObj } from '@storybook/react';
import React from 'react';
import Toast from './Toast';

export default {
  title: 'Molecules/Messaging/Toast',
  component: Toast,
  argTypes: { onDismiss: { action: 'dismissed' } },
  args: {
    children: "You've got toast!",
  },
};

type Args = React.ComponentProps<typeof Toast>;

// Snap tests have been disabled due to errors with Icon, should be re-enabled once fixed
export const Success: StoryObj<Args> = {
  args: {
    variant: 'success',
  },
  parameters: {
    snapshot: { skip: true },
  },
};

export const Alert: StoryObj<Args> = {
  args: {
    variant: 'alert',
  },
  parameters: {
    snapshot: { skip: true },
  },
};

export const NotDismissable: StoryObj<Args> = {
  args: {
    variant: 'success',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore onDismiss is not nullable, but this is needed to remove the arg from
    // storybook's actions addon
    onDismiss: null,
  },
  parameters: {
    snapshot: { skip: true },
  },
};
