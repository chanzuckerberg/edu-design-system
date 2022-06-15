import type { StoryObj } from '@storybook/react';
import React from 'react';

import { PageLevelBanner, Variant } from './PageLevelBanner';
import Button from '../Button';

export default {
  title: 'Molecules/Messaging/PageLevelBanner',
  component: PageLevelBanner,
  args: {
    title:
      'New curriculum updates are available for one or more of your courses.',
  },
};

type Args = React.ComponentProps<typeof PageLevelBanner>;

const getDescription = (status?: Variant) => (
  <>
    Summit Learning has a full-time team dedicated to constantly improving our
    curriculum. To see the updates,{' '}
    <Button
      onClick={(event: any) => event.preventDefault()}
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
      <PageLevelBanner
        description={getDescription(variant)}
        variant={variant}
        {...other}
      />
    );
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

export const BrandDismissable: StoryObj<Args> = {
  ...Brand,
  args: {
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
