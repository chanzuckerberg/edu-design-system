import type { StoryObj, Meta } from '@storybook/react';

import { AppHeader } from './AppHeader';

export default {
  title: 'Components/AppHeader',
  component: AppHeader,
  parameters: {
    badges: ['api-1.0', 'theme-2.0'],
  },
} as Meta<typeof AppHeader>;

type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {
  args: {
    title: 'Title',
    subTitle: 'Sub-title',
  },
};
