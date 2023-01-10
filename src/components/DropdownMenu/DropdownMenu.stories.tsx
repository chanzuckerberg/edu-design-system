import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuItem';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  subcomponents: { DropdownMenuItem },
  parameters: {
    badges: [BADGE.DEPRECATED],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof DropdownMenu>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <DropdownMenuItem onClick={() => console.log('Item 1')}>
          Item 1
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('Item 2')}>
          Item 2
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('Item 3')} variant="lined">
          Item 3
        </DropdownMenuItem>
        <DropdownMenuItem href="#">Item 4</DropdownMenuItem>
      </>
    ),
  },
};

export const WithIcons: StoryObj<Args> = {
  args: {
    children: (
      <>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Item 1
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Item 2
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Item 3
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Item 4
        </DropdownMenuItem>
      </>
    ),
  },
};

export const WithDeleteButton: StoryObj<Args> = {
  args: {
    children: (
      <>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Item 1
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Item 2
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Item 3
        </DropdownMenuItem>
        <DropdownMenuItem status="error">
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Delete Item
        </DropdownMenuItem>
      </>
    ),
  },
};
