import type { StoryObj, Meta } from '@storybook/react-webpack5';
import React from 'react';

import { PopoverContainer } from './PopoverContainer';
import PopoverListItem from '../PopoverListItem';

export default {
  title: 'Components/PopoverContainer',
  component: PopoverContainer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(Story) => <div className="p-spacing-size-4">{Story()}</div>],
  tags: ['autodocs', 'version:2.0.1'],
} as Meta<typeof PopoverContainer>;

/**
 * You can group list items with this generic container. See `PopoverListItem` for more information.
 */
export const Default: StoryObj<typeof PopoverContainer> = {
  args: {
    children: (
      <>
        <div role="group">
          <PopoverListItem icon="arrow-down">test 1</PopoverListItem>
          <PopoverListItem icon="arrow-left">test 2</PopoverListItem>
          <PopoverListItem icon="arrow-up">test 3</PopoverListItem>
        </div>
        <div role="group">
          <PopoverListItem icon="arrow-right" isDestructiveAction>
            test 4
          </PopoverListItem>
        </div>
      </>
    ),
  },
};
