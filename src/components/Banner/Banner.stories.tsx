import type { StoryObj } from '@storybook/react';
import React, { ReactNode } from 'react';
import { Banner, Variant } from './Banner';
import Button from '../Button';
import Heading from '../Heading';

export default {
  title: 'Molecules/Messaging/Banner',
  component: Banner,
  args: {
    title:
      'New curriculum updates are available for one or more of your courses.',
  },
};

type Args = React.ComponentProps<typeof Banner> & {
  title: string;
  description: string;
  action: ReactNode;
};

const getAction = (status?: Variant) => (
  <Button status={status} variant="secondary">
    See updates
  </Button>
);

const getDescription = (status?: Variant) => (
  <>
    Summit Learning has a full-time team dedicated to constantly improving our
    curriculum. To see the updates,{' '}
    <Button
      href="/"
      onClick={(event) => event.preventDefault()}
      status={status}
      variant="link"
    >
      click into the course
    </Button>
    .
  </>
);

const dismissMethod = () => {
  console.log('dismissing~');
};

export const Brand: StoryObj<Args> = {
  render: ({ variant, ...other }) => {
    return (
      <Banner
        description={getDescription(variant)}
        variant={variant}
        {...other}
      />
    );
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

export const Error: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'error',
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
    action: getAction(),
  },
};

export const NeutralWithAction: StoryObj<Args> = {
  ...Neutral,
  args: {
    action: getAction('neutral'),
    variant: 'neutral',
  },
};

export const SuccessWithAction: StoryObj<Args> = {
  ...Success,
  args: {
    action: getAction('success'),
    variant: 'success',
  },
};

export const WarningWithAction: StoryObj<Args> = {
  ...Warning,
  args: {
    action: getAction('warning'),
    variant: 'warning',
  },
};

export const ErrorWithAction: StoryObj<Args> = {
  ...Error,
  args: {
    action: getAction('error'),
    variant: 'error',
  },
};

export const BrandDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    onDismiss: dismissMethod,
  },
};

export const NeutralDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'neutral',
    onDismiss: dismissMethod,
  },
};

export const SuccessDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'success',
    onDismiss: dismissMethod,
  },
};

export const WarningDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'warning',
    onDismiss: dismissMethod,
  },
};

export const ErrorDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
    variant: 'error',
    onDismiss: dismissMethod,
  },
};

export const DismissableWithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    action: getAction(),
    onDismiss: dismissMethod,
  },
};

export const DismissableBelowContent: StoryObj<Args> = {
  render: (args) => (
    <>
      <Heading size="h1">Page Title</Heading>
      <Banner
        description={getDescription()}
        onDismiss={dismissMethod}
        {...args}
      />
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
    onDismiss: dismissMethod,
  },
};

export const VerticalWithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: 'vertical',
    action: getAction(),
  },
};

export const VerticalDismissableWithAction: StoryObj<Args> = {
  ...Brand,
  args: {
    orientation: 'vertical',
    action: getAction(),
    onDismiss: dismissMethod,
  },
};

export const Flat: StoryObj<Args> = {
  ...Brand,
  args: {
    isFlat: true,
  },
};
