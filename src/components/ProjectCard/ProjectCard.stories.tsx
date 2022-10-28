import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { ProjectCard } from './ProjectCard';
import DropdownMenuItem from '../DropdownMenuItem';
import Icon from '../Icon';

export default {
  title: 'Recipes/ProjectCard',
  component: ProjectCard,
  args: {},
} as Meta<Args>;

type Args = React.ComponentProps<typeof ProjectCard>;

export const Default: StoryObj<Args> = {
  args: {
    title: 'Project card title',
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

export const WithMeta: StoryObj<Args> = {
  args: {
    number: 1,
    title: 'Project card title',
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

export const WithMetaIcon: StoryObj<Args> = {
  args: {
    ...WithMeta.args,
    metaIconName: 'event-note',
  },
};

export const WithoutDropdown: StoryObj<Args> = {
  args: {
    number: 1,
    title: 'DragDropItem provides handle to the left',
    numberAriaLabel: 'Project 1',
  },
};
