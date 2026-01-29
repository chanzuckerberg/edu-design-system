import type { StoryObj, Meta } from '@storybook/react-webpack5';
import { PopoverListItem } from './PopoverListItem';

export default {
  title: 'Components/PopoverListItem',
  component: PopoverListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'version:2.0.1'],
  argTypes: {
    __type: {
      table: {
        disable: true,
      },
    },
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
