import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { PopoverContainer } from './PopoverContainer';
import PopoverListItem from '../PopoverListItem';

export default {
  title: 'Components/PopoverContainer',
  component: PopoverContainer,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.2'],
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof PopoverContainer>;

export const Default: StoryObj<Args> = {
  args: {
    children: 'Default container',
  },
};

export const WithRows: StoryObj<Args> = {
  render: () => (
    <PopoverContainer>
      <PopoverListItem icon="arrow-downward">test 1</PopoverListItem>
      <PopoverListItem icon="arrow-narrow-left">test 2</PopoverListItem>
      <PopoverListItem icon="arrow-upward">test 3</PopoverListItem>
      <PopoverListItem icon="arrow-narrow-right">test 4</PopoverListItem>
    </PopoverContainer>
  ),
};
