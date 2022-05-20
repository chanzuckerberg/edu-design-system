import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ButtonDropdown, Props } from './ButtonDropdown';
import { Button } from '../Button/Button';
import { DropdownMenuItem } from '../DropdownMenuItem/DropdownMenuItem';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Example/ButtonDropdown',
  component: ButtonDropdown,
} as Meta;

const Template: Story<Props> = (args) => (
  <div style={{ width: '100%', display: 'flex' }}>
    <div style={{ marginLeft: 'auto' }}>
      <ButtonDropdown
        {...args}
        dropdownMenuTrigger={<Button>Open Dropdown</Button>}
      >
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
      </ButtonDropdown>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
