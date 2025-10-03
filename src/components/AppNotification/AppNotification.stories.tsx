import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';

import { AppNotification } from './AppNotification';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Link from '../Link';
import Text from '../Text';

export default {
  title: 'Components/AppNotification',
  component: AppNotification,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'This is an AppNotification title',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. At et vitae quis amet felis mollis in vitae. Eget in neque et molestie. Luctus sed id commodo volutpat. In a eu in id molestie consectetur pellentesque.',
  },
  argTypes: {
    children: {
      control: false,
    },
    color: {
      table: {
        disable: true,
      },
    },
    subTitle: {
      control: 'text',
    },
  },
  tags: ['autodocs', 'version:2.0'],
} as Meta<typeof AppNotification>;

type Story = StoryObj<typeof AppNotification>;

export const Default: Story = {
  args: {},
};

export const WithControls: Story = {
  render: (args) => (
    <AppNotification {...args}>
      {' '}
      <ButtonGroup buttonLayout="horizontal" className="!flex-row">
        <Button
          rank="secondary"
          variant={args.variant === 'inverse' ? undefined : 'inverse'}
        >
          Call To Action
        </Button>
        <Button
          rank="tertiary"
          variant={args.variant === 'inverse' ? undefined : 'inverse'}
        >
          Other action
        </Button>
      </ButtonGroup>
    </AppNotification>
  ),
};

export const WithLinkInSubtitle: Story = {
  args: {
    subTitle: (
      <Text as="span">
        Some text with a{' '}
        <Link href="https://example.com/" variant="inverse">
          link
        </Link>{' '}
        in.
      </Text>
    ),
  },
};

export const InverseVariant: Story = {
  args: {
    variant: 'inverse',
  },
  render: (args) => (
    <AppNotification {...args}>
      {' '}
      <ButtonGroup buttonLayout="horizontal" className="!flex-row">
        <Button
          rank="secondary"
          variant={args.variant === 'inverse' ? undefined : 'inverse'}
        >
          Call To Action
        </Button>
        <Button
          rank="tertiary"
          variant={args.variant === 'inverse' ? undefined : 'inverse'}
        >
          Other action
        </Button>
      </ButtonGroup>
    </AppNotification>
  ),
};

export const WithDismissAndControls: Story = {
  args: {
    ...WithControls.args,
    subTitle: 'Limited subtitle text',
    onDismiss: () => {
      console.log('dismissing!');
    },
  },
  render: WithControls.render,
};

export const InverseWithDismissAndControls: Story = {
  args: {
    ...InverseVariant.args,
    onDismiss: () => {
      console.log('dismissing!');
    },
  },
  render: InverseVariant.render,
};
