import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { DataTable } from './DataTable';

export default {
  title: 'Organisms/Tables/DataTable',
  component: DataTable,
  parameters: {
    badges: [BADGE.BETA],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0.25rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof DataTable>;

const tableColumns = [
  {
    title: 'Student',
    selector: 'student',
  },
  {
    title: 'Status',
    selector: 'status',
  },
  {
    title: 'Updated',
    selector: 'updated',
  },
  {
    title: 'Completed',
    selector: 'completed',
  },
];

const tableRows = [
  {
    student: 'Flores, Juanita',
    status: 'Needs Feedback',
    updated: '5/1/2022',
    completed: '50%',
  },
  {
    student: 'Miles, Esther',
    status: 'Stop and Revise',
    updated: '6/13/2022',
    completed: '33%',
  },
  {
    student: 'Black, Marvin',
    status: 'Finish Work',
    updated: '4/12/2022',
    completed: '20%',
  },
  {
    student: 'Nguyen, Savannah',
    status: 'Needs Feedback',
    updated: '12/9/2021',
    completed: '80%',
  },
  {
    student: 'Alexander, Leslie',
    status: 'Continue Working',
    updated: '5/29/2022',
    completed: '20%',
  },
  {
    student: 'Bell, Jerome',
    status: 'Review Feedback',
    updated: '2/21/2022',
    completed: '5%',
  },
  {
    student: 'Richards, Ronald',
    status: 'Needs Feedback',
    updated: '6/28/2022',
    completed: '60%',
  },
  {
    student: 'Simmons, Brooklyn',
    status: 'Stop and Revise',
    updated: '4/18/2022',
    completed: '40%',
  },
  {
    student: 'Williamson, Cameron',
    status: 'Finish Work',
    updated: '5/14/2022',
    completed: '50%',
  },
];

export const Default: StoryObj<Args> = {
  args: {
    caption: 'This is a dataTable caption and it is required',
    columns: tableColumns,
    label: 'Data Table',
    rows: tableRows,
    useFilters: false,
    variant: 'zebra',
  },
};

export const Filters: StoryObj<Args> = {
  args: {
    ...Default.args,
    useFilters: true,
  },
};
