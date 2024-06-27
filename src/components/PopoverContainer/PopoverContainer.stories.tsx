import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { PopoverContainer } from './PopoverContainer';
import PopoverListItem from '../PopoverListItem';

export default {
  title: 'Components/PopoverContainer',
  component: PopoverContainer,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.2', 'current-2.0'],
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<typeof PopoverContainer>;

export const Default: StoryObj<typeof PopoverContainer> = {
  args: {
    children: (
      <>
        <div role="none">
          <PopoverListItem icon="arrow-down">test 1</PopoverListItem>
          <PopoverListItem icon="arrow-left-narrow">test 2</PopoverListItem>
          <PopoverListItem icon="arrow-up">test 3</PopoverListItem>
        </div>
        <div role="none">
          <PopoverListItem icon="arrow-right-narrow" isDestructiveAction>
            test 4
          </PopoverListItem>
        </div>
      </>
    ),
  },
};
