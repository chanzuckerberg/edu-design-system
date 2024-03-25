import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { BannerNotification } from './BannerNotification';
import { ButtonV2 as Button } from '../Button';

export default {
  title: 'Components/V2/BannerNotification',
  component: BannerNotification,
  parameters: {
    badges: ['intro-1.0', 'current-2.0'],
  },
  args: {
    title: 'Alert title which communicates info to the user',
    subTitle: ' Subtitle which provides additional detail',
    callToAction: (
      <Button rank="secondary" size="sm" variant="default">
        Call to Action
      </Button>
    ),
  },
  argTypes: {
    subTitle: {
      control: {
        type: 'text',
      },
    },
    callToAction: {
      control: {
        type: null,
      },
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof BannerNotification>;

const dismissMethod = () => {
  console.log('dismissing~');
};

export const Default: StoryObj<Args> = {};

export const Warning: StoryObj<Args> = {
  args: {
    status: 'warning',
  },
};

/**
 * When using critical, make sure `Button` has a matching variant specified.
 * TODO-AH: design of the secondary critical button has a customization to the background that needs verification.
 */
export const Critical: StoryObj<Args> = {
  args: {
    status: 'critical',
    callToAction: (
      <Button rank="secondary" size="sm" variant="critical">
        Call to Action
      </Button>
    ),
  },
};

export const CriticalHorizontal: StoryObj<Args> = {
  args: {
    status: 'critical',
    buttonLayout: 'horizontal',
    callToAction: (
      <Button rank="secondary" size="sm" variant="critical">
        Call to Action
      </Button>
    ),
  },
};

export const Favorable: StoryObj<Args> = {
  args: {
    status: 'favorable',
  },
};

export const Dismissable: StoryObj<Args> = {
  args: {
    onDismiss: dismissMethod,
  },
};
