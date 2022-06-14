import { StoryObj } from '@storybook/react';
import React from 'react';

import { ButtonDropdown } from './ButtonDropdown';
import { Button } from '../Button/Button';
import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuItem';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Example/ButtonDropdown',
  parameters: {
    layout: 'centered',
  },
  component: ButtonDropdown,
  subcomponents: { DropdownMenuItem },
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
    dropdownMenuTrigger: <Button>Open Dropdown</Button>,
  },
};

type Args = React.ComponentProps<typeof ButtonDropdown>;

export const Default: StoryObj<Args> = {};

export const PositionTopLeft: StoryObj<Args> = {
  args: {
    position: 'top-left',
  },
};

export const PositionTopRight: StoryObj<Args> = {
  args: {
    position: 'top-right',
  },
};

export const PositionBottomRight: StoryObj<Args> = {
  args: {
    position: 'bottom-right',
  },
};
