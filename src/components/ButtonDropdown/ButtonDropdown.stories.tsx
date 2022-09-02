import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { ButtonDropdown } from './ButtonDropdown';
import { Button } from '../Button/Button';
import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuItem';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Organisms/Interactive/ButtonDropdown',
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
    dropdownMenuTrigger: (
      <Button data-testid="trigger-button">Open Dropdown</Button>
    ),
  },
} as Meta<Args>;

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

const TestComponent = ({ color }: { color: string }) => {
  return (
    <>
      <DropdownMenuItem>
        <Icon name="schedule" purpose="decorative" size="1.25rem" />
        Item 1
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div style={{ backgroundColor: color }}>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Item 2
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon name="schedule" purpose="decorative" size="1.25rem" />
        Item 3
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div style={{ backgroundColor: color }}>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Item 4
        </div>
      </DropdownMenuItem>
    </>
  );
};

export const ComponentWrapped: StoryObj<Args> = {
  args: {
    children: <TestComponent color="blanchedalmond" />,
  },
};
