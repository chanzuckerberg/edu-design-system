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
    badges: ['intro-2.0', 'current-2.0'],
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
    subTitle: {
      control: 'text',
    },
  },
} as Meta<typeof AppNotification>;

type Story = StoryObj<typeof AppNotification>;

export const Default: Story = {
  args: {},
};

export const WithControls: Story = {
  args: {
    children: (
      <ButtonGroup buttonLayout="horizontal" className="!flex-row">
        <Button rank="secondary" variant="inverse">
          Call To Action
        </Button>
        <Button rank="tertiary" variant="inverse">
          Other action
        </Button>
      </ButtonGroup>
    ),
  },
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

export const LightColor: Story = {
  args: {
    color: 'light',
    children: (
      <ButtonGroup buttonLayout="horizontal-align-left">
        <Button rank="secondary">Call To Action</Button>
        <Button rank="tertiary">Other action</Button>
      </ButtonGroup>
    ),
  },
};

export const WithDismissAndControls: Story = {
  args: {
    ...WithControls.args,
    subTitle: 'Limited subtitle text',
    onDismiss: () => {
      console.log('dismissing!');
    },
  },
};

export const LightWithDismissAndControls: Story = {
  args: {
    ...LightColor.args,
    onDismiss: () => {
      console.log('dismissing!');
    },
  },
};
