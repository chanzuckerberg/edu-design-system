import type { StoryObj, Meta } from '@storybook/react';
import { PopoverListItem } from './PopoverListItem-v2';

export default {
  title: 'Components/V2/PopoverListItem',
  component: PopoverListItem,
  parameters: {
    badges: ['intro-1.2', 'current-2.0'],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof PopoverListItem>;

export const Default: StoryObj<Args> = {
  args: {
    children: 'Default list item',
  },
};

export const WithAnIcon: StoryObj<Args> = {
  args: {
    children: 'Test with Icon',
    icon: 'add-encircled',
  },
};

export const Disabled: StoryObj<Args> = {
  args: {
    children: 'Disabled',
    isDisabled: true,
  },
};

export const Descructive: StoryObj<Args> = {
  args: {
    children: 'Is destructive',
    icon: 'trash',
    isDestructiveAction: true,
  },
};

export const WithSublabel: StoryObj<Args> = {
  args: {
    ...Default.args,
    children: 'Add comment',
    subLabel: 'Everyone can see comments',
  },
};

export const WithIconAndSubLabel: StoryObj<Args> = {
  args: {
    ...WithSublabel.args,
    icon: 'comment-critical',
  },
};
