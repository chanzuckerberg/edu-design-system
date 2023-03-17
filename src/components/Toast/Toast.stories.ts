import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Toast } from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    badges: ['1.0'],
  },
  argTypes: { onDismiss: { action: 'dismissed' } },
  args: {
    children: "You've got toast!",
  },
} as Meta<Args>;

type Args = ComponentProps<typeof Toast>;

export const Success: StoryObj<Args> = {
  args: {
    variant: 'success',
  },
};

export const Error: StoryObj<Args> = {
  args: {
    variant: 'error',
  },
};

export const NotDismissable: StoryObj<Args> = {
  args: {
    variant: 'success',
    // @ts-expect-error onDismiss is not nullable, but this is needed to remove the arg from
    // storybook's actions addon
    onDismiss: null,
  },
};
