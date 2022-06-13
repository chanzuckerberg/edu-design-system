import type { StoryObj } from '@storybook/react';
import React from 'react';

import { TableCard } from './TableCard';

export default {
  title: 'Recipes/TableCard',
  component: TableCard,
};

type Args = React.ComponentProps<typeof TableCard>;

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
        ariaLabel: 'Project 1',
        complete: true,
      },
      {
        ariaLabel: 'Project 2',
        complete: true,
      },
      {
        ariaLabel: 'Project 3',
        complete: false,
      },
      {
        ariaLabel: 'Project 4',
        complete: false,
      },
      {
        ariaLabel: 'Project 5',
        complete: false,
      },
      {
        ariaLabel: 'Project 6',
        complete: false,
      },
      {
        ariaLabel: 'Project 7',
        complete: false,
      },
      {
        ariaLabel: 'Project 8',
        complete: false,
      },
      {
        ariaLabel: 'Project 9',
        complete: false,
      },
      {
        ariaLabel: 'Project 10',
        complete: false,
      },
    ],
  },
  {
    value1: 'Making Connections and Inferences',
    projects: [
      {
        ariaLabel: 'Project 1',
        complete: true,
      },
    ],
  },
  {
    value1: 'A longer heading that is super duper long',
    projects: [
      {
        ariaLabel: 'Project 1',
        complete: true,
      },
      {
        ariaLabel: 'Project 2',
        complete: true,
      },
      {
        ariaLabel: 'Project 3',
        complete: true,
      },
      {
        ariaLabel: 'Project 4',
        complete: true,
      },
      {
        ariaLabel: 'Project 5',
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
