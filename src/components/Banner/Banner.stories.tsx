import type { StoryObj } from '@storybook/react';
import React from 'react';
import { Banner } from './Banner';
import Button from '../Button';
import Heading from '../Heading';

export default {
  title: 'Molecules/Messaging/Banner',
  component: Banner,
  args: {
    description: (
      <>
        Summit Learning has a full-time team dedicated to constantly improving
        our curriculum. To see the updates,{' '}
        <Button
          href="/"
          onClick={(event) => event.preventDefault()}
          variant="link"
        >
          click into the course
        </Button>
        .
      </>
    ),
    title:
      'New curriculum updates are available for one or more of your courses.',
  },
};

type Args = React.ComponentProps<typeof Banner> & {
  title: string;
  description: string;
  action: any;
};

const action = <Button variant="secondary">See updates</Button>;

export const Brand: StoryObj<Args> = {
  render: (args) => {
    return <Banner {...args} />;
  },
};

export const Neutral: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'neutral',
  },
};

export const Success: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'success',
  },
};

export const Warning: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'warning',
  },
};

export const Alert: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'alert',
  },
};

export const NoDescription: StoryObj<Args> = {
  ...Brand,
  args: {
    description: undefined,
  },
};

export const NoTitle: StoryObj<Args> = {
  ...Brand,
  args: {
    title: undefined,
  },
};

export const BrandWithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    action: action,
  },
};

export const NeutralWithAction: StoryObj<Args> = {
  ...Neutral,
  args: {
    action: action,
    variant: 'neutral',
  },
};

export const SuccessWithAction: StoryObj<Args> = {
  ...Success,
  args: {
    action: action,
    variant: 'success',
  },
};

export const WarningWithAction: StoryObj<Args> = {
  ...Warning,
  args: {
    action: action,
    variant: 'warning',
  },
};

export const AlertWithAction: StoryObj<Args> = {
  ...Alert,
  args: {
    action: action,
    variant: 'alert',
  },
};

export const BrandDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    dismissable: true,
  },
};

export const NeutralDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'neutral',
    dismissable: true,
  },
};

export const SuccessDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'success',
    dismissable: true,
  },
};

export const WarningDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'warning',
    dismissable: true,
  },
};

export const AlertDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'alert',
    dismissable: true,
  },
};

export const DismissableWithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    action: action,
    dismissable: true,
  },
};

export const DismissableBelowContent: StoryObj<Args> = {
  render: (args) => (
    <>
      <Heading size="h1">Page Title</Heading>
      <Banner dismissable={true} {...args} />
    </>
  ),
};

export const Vertical: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: 'vertical',
  },
};

export const VerticalDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: 'vertical',
    dismissable: true,
  },
};

export const VerticalWithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: 'vertical',
    action: action,
  },
};

export const VerticalDismissableWithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: 'vertical',
    action: action,
    dismissable: true,
  },
};

export const Flat: StoryObj<Args> = {
  ...Brand,
  args: {
    isFlat: true,
  },
};
