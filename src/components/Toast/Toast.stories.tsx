import type { StoryObj } from '@storybook/react';
import React from 'react';
import Toast from './Toast';

export default {
  title: 'Toast',
  component: Toast,
  argTypes: { onDismiss: { action: 'dismissed' } },
  args: {
    text: "You've got toast!",
  },
};

type Args = React.ComponentProps<typeof Toast>;

export const Success: StoryObj<Args> = {
  args: {
    variant: 'success',
  },
};

export const Alert: StoryObj<Args> = {
  args: {
    variant: 'alert',
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
};
