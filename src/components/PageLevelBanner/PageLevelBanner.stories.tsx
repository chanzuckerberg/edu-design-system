import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { PageLevelBanner } from './PageLevelBanner';
import Button from '../Button';

export default {
  title: 'Components/PageLevelBanner',
  component: PageLevelBanner,
  parameters: {
    badges: ['intro-1.0'],
  },
  args: {
    title:
      'New curriculum updates are available for one or more of your courses.',
    description: (
      <>
        Summit Learning has a full-time team dedicated to constantly improving
        our curriculum. To see the updates,{' '}
        <Button
          onClick={(event: any) => event.preventDefault()}
          status="neutral"
          variant="link"
        >
          click into the course.
        </Button>
      </>
    ),
  },
  argTypes: {
    description: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof PageLevelBanner>;

const dismissMethod = () => {
  console.log('dismissing~');
};

export const Brand: StoryObj<Args> = {};

export const Success: StoryObj<Args> = {
  args: {
    variant: 'success',
  },
};

export const Warning: StoryObj<Args> = {
  args: {
    variant: 'warning',
  },
};

export const Error: StoryObj<Args> = {
  args: {
    variant: 'error',
  },
};

export const NoDescription: StoryObj<Args> = {
  args: {
    description: undefined,
  },
};

export const NoTitle: StoryObj<Args> = {
  args: {
    title: undefined,
  },
};

export const BrandDismissable: StoryObj<Args> = {
  args: {
    onDismiss: dismissMethod,
  },
};

export const SuccessDismissable: StoryObj<Args> = {
  args: {
    variant: 'success',
    onDismiss: dismissMethod,
  },
};

export const WarningDismissable: StoryObj<Args> = {
  args: {
    variant: 'warning',
    onDismiss: dismissMethod,
  },
};

export const ErrorDismissable: StoryObj<Args> = {
  args: {
    variant: 'error',
    onDismiss: dismissMethod,
  },
};
