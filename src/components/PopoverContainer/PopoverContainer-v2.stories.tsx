import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { PopoverContainer } from './PopoverContainer-v2';
import { PopoverListItemV2 as PopoverListItem } from '../PopoverListItem';

export default {
  title: 'Components/V2/PopoverContainer',
  component: PopoverContainer,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.2', 'curent-2.0'],
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof PopoverContainer>;

export const Default: StoryObj<Args> = {
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
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
