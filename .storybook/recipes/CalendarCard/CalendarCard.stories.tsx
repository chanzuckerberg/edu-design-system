import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { CalendarCard } from './CalendarCard';

export default {
  title: 'Recipes/CalendarCard',
  component: CalendarCard,
  decorators: [(Story) => <div style={{ margin: '0.25rem' }}>{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof CalendarCard>;

export const Default: StoryObj<Args> = {
  args: {
    dateEnd: 'Feb 2, 2022',
    dateStart: 'Apr 1',
    title: 'Project name here',
  },
};

export const ExtraMetadata: StoryObj<Args> = {
  args: {
    dateEnd: 'Feb 2, 2022',
    dateStart: 'Apr 1',
    meta: '(12 days)',
    title: 'Project name here',
  },
};

export const SingleTag: StoryObj<Args> = {
  args: {
    dateEnd: 'Feb 2, 2022',
    dateStart: 'Apr 1',
    tags: [{ text: 'Ancient Mayan History' }],
    title: 'Project name here',
  },
};

export const LongerTextStrings: StoryObj<Args> = {
  args: {
    dateEnd: 'Feb 2, 2022',
    dateStart: 'Apr 1',
    meta: '(Wednesday and Thursday only until further notice)',
    tags: [{ text: 'Ancient Mayan History' }],
    title: 'Project name here with extra long title',
    variant: 'revise',
  },
};

export const MultipleTags: StoryObj<Args> = {
  args: {
    dateEnd: 'Feb 2, 2022',
    dateStart: 'Apr 1',
    tags: [
      { text: 'Tag One' },
      { text: '2' },
      { text: 'Three' },
      { text: 'Tag with a longer text string' },
    ],
    title: 'Project name here',
  },
};

export const ReviseVariant: StoryObj<Args> = {
  args: {
    dateEnd: 'Feb 2, 2022',
    dateStart: 'Apr 1',
    tags: [{ text: 'Ancient Mayan History' }],
    title: 'Project name here',
    variant: 'revise',
  },
};

export const SuccessVariant: StoryObj<Args> = {
  args: {
    dateEnd: 'Feb 2, 2022',
    dateStart: 'Apr 1',
    tags: [{ text: 'Ancient Mayan History' }],
    title: 'Project name here',
    variant: 'success',
  },
};
