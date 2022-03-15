import type { StoryObj } from '@storybook/react';
import React from 'react';

import Text from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

type Args = React.ComponentProps<typeof Text>;

export const Body: StoryObj<Args> = {
  args: {
    children: 'Body paragraph 16/24',
  },
};

export const BodySmall: StoryObj<Args> = {
  args: {
    size: 'sm',
    children: 'Body small 14/20',
  },
};

export const BodyXSmall: StoryObj<Args> = {
  args: {
    size: 'xs',
    children: 'Body Xsmall 12/16',
  },
};

export const Caption: StoryObj<Args> = {
  args: {
    size: 'caption',
    children: 'Caption 12/20',
  },
};

export const Overline: StoryObj<Args> = {
  args: {
    size: 'overline',
    children: 'Overline 12/20',
  },
};

export const BodyColorInfoBold: StoryObj<Args> = {
  args: {
    children: 'Info color body text, bold',
    color: 'info',
    weight: 'bold',
  },
};

export const TextColorInherit: StoryObj<Args> = {
  render: (args) => (
    <Text color="alert" size="body">
      This text surrounds the <Text as="span" {...args} /> and shows it should
      inherit color from the parent
    </Text>
  ),
  args: {
    children: 'Child Text',
    color: 'inherit',
  },
};
