import type { StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { TableCard } from './TableCard';

export default {
  title: 'Recipes/TableCard',
  component: TableCard,
};

type Args = ComponentProps<typeof TableCard>;

const tableColumns = [
  {
    title: 'Least covered Cognitive Skills',
  },
  {
    title: 'Projects',
  },
];

const tableRows = [
  {
    value1: 'Argumentative Claim',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: true,
      },
      {
        'aria-label': 'Project 2',
        complete: true,
      },
      {
        'aria-label': 'Project 3',
        complete: false,
      },
      {
        'aria-label': 'Project 4',
        complete: false,
      },
      {
        'aria-label': 'Project 5',
        complete: false,
      },
      {
        'aria-label': 'Project 6',
        complete: false,
      },
      {
        'aria-label': 'Project 7',
        complete: false,
      },
      {
        'aria-label': 'Project 8',
        complete: false,
      },
      {
        'aria-label': 'Project 9',
        complete: false,
      },
      {
        'aria-label': 'Project 10',
        complete: false,
      },
    ],
  },
  {
    value1: 'Making Connections and Inferences',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: true,
      },
    ],
  },
  {
    value1: 'A longer heading that is super duper long',
    projects: [
      {
        'aria-label': 'Project 1',
        complete: true,
      },
      {
        'aria-label': 'Project 2',
        complete: true,
      },
      {
        'aria-label': 'Project 3',
        complete: true,
      },
      {
        'aria-label': 'Project 4',
        complete: true,
      },
      {
        'aria-label': 'Project 5',
        complete: true,
      },
    ],
  },
];

export const Default: StoryObj<Args> = {
  args: {
    title: 'Standards coverage',
    buttonContent: 'View all Standards',
    tableRows: tableRows,
    tableColumns: tableColumns,
  },
};
