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
    title: 'Evaluators',
    subTitle: 'Playground',
    navGroups: [
      {
        name: 'group-1',
        navItems: [
          {
            name: 'English Language Arts',
            type: 'link',
            href: 'https://example.org',
          },
          {
            name: 'Science',
            type: 'link',
            href: 'https://example.org',
          },
          {
            name: 'Whole child',
            type: 'link',
            href: 'https://example.org',
          },
        ],
      },
      {
        name: 'group-2',
        navItems: [
          {
            name: 'Log out',
            type: 'link',
            href: 'https://example.org',
            icon: 'logout',
            iconLayout: 'left',
          },
        ],
      },
    ],
  },
};

export const Buttons: Story = {
  args: {
    title: 'Evaluators',
    subTitle: 'Playground',
    navGroups: [
      {
        name: 'group-1',
        navItems: [
          {
            name: 'English Language Arts',
            type: 'button',
          },
          {
            name: 'Science',
            type: 'button',
          },
          {
            name: 'sep1',
            type: 'separator',
          },
          {
            name: 'Whole child',
            type: 'link',
            href: 'https://example.org',
          },
        ],
      },
      {
        name: 'group-2',
        navItems: [
          {
            name: 'Log out',
            type: 'link',
            href: 'https://example.org',
            icon: 'logout',
            iconLayout: 'left',
          },
        ],
      },
    ],
  },
};

export const VerticalOrientation: Story = {
  args: {
    ...Buttons.args,
    orientation: 'vertical',
  },
};
