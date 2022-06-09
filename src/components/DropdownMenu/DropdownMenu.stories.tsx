import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DropdownMenu, Props } from './DropdownMenu';
import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuItem';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Molecules/Navigation/DropdownMenu',
  component: DropdownMenu,
} as Meta;

const Template: Story<Props> = (args) => (
  <DropdownMenu>
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
  </DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {};

export const WithIcons = () => (
  <DropdownMenu>
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
  </DropdownMenu>
);

export const WithDeleteButton = () => (
  <DropdownMenu>
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
  </DropdownMenu>
);
