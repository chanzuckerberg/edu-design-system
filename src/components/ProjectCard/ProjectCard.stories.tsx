import {StoryObj, Meta} from '@storybook/react';
import React from 'react';

import DropdownMenuItem from '../DropdownMenuItem';
import Icon from '../Icon';
import {ProjectCard} from './ProjectCard';

export default {
  title: 'Recipes/ProjectCard',
  component: ProjectCard,
  args: {},
} as Meta<Args>;

type Args = React.ComponentProps<typeof ProjectCard>;

export const Default: StoryObj<Args> = {
  args: {
    title: 'Project card title',
    meta: '12 days',
    number: 1,
    numberAriaLabel: 'Project 1',
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

export const Draggable: StoryObj<Args> = {
  args: {
    behavior: 'draggable',
    title: 'DragDropItem provides handle to the left',
    meta: '12 days',
    numberAriaLabel: 'Project 1',
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

export const WithoutMeta: StoryObj<Args> = {
  args: {
    number: 1,
    title: 'Project card title',
    numberAriaLabel: 'Project 1',
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

export const WithoutDropdown: StoryObj<Args> = {
  args: {
    number: 1,
    title: 'DragDropItem provides handle to the left',
    meta: '12 days',
    numberAriaLabel: 'Project 1',
  },
};
