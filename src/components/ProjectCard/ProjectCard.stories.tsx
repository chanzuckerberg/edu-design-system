import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ProjectCard, Props } from './ProjectCard';
import DropdownMenuItem from '../DropdownMenuItem';
import Icon from '../Icon';

export default {
  title: 'Recipes/ProjectCard',
  component: ProjectCard,
} as Meta;

const Template: Story<Props> = (args) => (
  <ProjectCard
    {...args}
    buttonDropdownItems={
      <>
        <DropdownMenuItem onClick={() => console.log('Item 1')}>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Move to other section
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('Item 2')}>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Move up
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('Item 3')}>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Move down
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('Item 4')}>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Move view details
        </DropdownMenuItem>
      </>
    }
  />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Project card title',
  meta: '12 days',
  number: 1,
  numberAriaLabel: 'Project 1',
};

export const Draggable = Template.bind({});
Draggable.args = {
  behavior: 'draggable',
  title: 'DragDropItem provides handle to the left',
  meta: '12 days',
  numberAriaLabel: 'Project 1',
};
