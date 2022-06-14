import { StoryObj } from '@storybook/react';
import React from 'react';

import { ProjectCard } from './ProjectCard';
import DropdownMenuItem from '../DropdownMenuItem';
import Icon from '../Icon';

export default {
  title: 'Recipes/ProjectCard',
  component: ProjectCard,
  args: {
    buttonDropdownItems: (
      <>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Move to other section
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Move up
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Move down
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="schedule" purpose="decorative" size="1.25rem" />
          Move view details
        </DropdownMenuItem>
      </>
    ),
  },
};

type Args = React.ComponentProps<typeof ProjectCard>;

export const Default: StoryObj<Args> = {
  args: {
    title: 'Project card title',
    meta: '12 days',
    number: 1,
    numberAriaLabel: 'Project 1',
  },
};

export const Draggable: StoryObj<Args> = {
  args: {
    behavior: 'draggable',
    title: 'DragDropItem provides handle to the left',
    meta: '12 days',
    numberAriaLabel: 'Project 1',
  },
};
