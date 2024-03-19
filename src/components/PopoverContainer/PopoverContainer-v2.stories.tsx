import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

// TODO-AH: map back to non-V2 names once ready for release
import { PopoverContainer } from './PopoverContainer-v2';
import { PopoverListItemV2 as PopoverListItem } from '../PopoverListItem';

export default {
  title: 'Components/PopoverContainer (v2)',
  component: PopoverContainer,
  parameters: {
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
          <PopoverListItem icon="arrow-downward">test 1</PopoverListItem>
          <PopoverListItem icon="arrow-narrow-left">test 2</PopoverListItem>
          <PopoverListItem icon="arrow-upward">test 3</PopoverListItem>
        </div>
        <div role="none">
          <PopoverListItem icon="arrow-narrow-right" isDestructiveAction>
            test 4
          </PopoverListItem>
        </div>
      </>
    ),
  },
};
