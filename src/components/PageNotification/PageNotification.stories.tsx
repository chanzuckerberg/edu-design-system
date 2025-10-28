import type { StoryObj, Meta } from '@storybook/react-webpack5';
import React from 'react';

import { PageNotification } from './PageNotification';
import Button from '../Button';

export default {
  title: 'Components/PageNotification',
  component: PageNotification,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Alert title which communicates info to the user',
    subTitle: ' Subtitle which provides additional detail',
    callToAction: (
      <Button rank="secondary" size="sm" variant="neutral">
        Call to Action
      </Button>
    ),
    className: 'w-[384px]',
  },
  argTypes: {
    subTitle: {
      control: {
        type: 'text',
      },
    },
    callToAction: {
      control: false,
    },
  },
  tags: ['autodocs', 'version:2.0.1'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof PageNotification>;

const dismissMethod = () => {
  console.log('dismissing~');
};

export const Default: StoryObj<Args> = {};

export const Warning: StoryObj<Args> = {
  args: {
    status: 'warning',
  },
};

export const WarningWithSubtitle: StoryObj<Args> = {
  args: {
    status: 'warning',
    subTitle: <span>Subtitle text</span>,
  },
};

/**
 * When using critical, make sure `Button` has a matching variant specified.
 */
export const Critical: StoryObj<Args> = {
  args: {
    status: 'critical',
    callToAction: (
      <Button rank="secondary" size="sm" variant="neutral">
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
      <Button rank="secondary" size="sm" variant="neutral">
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

export const HorizontalDismissable: StoryObj<Args> = {
  args: {
    ...Dismissable.args,
    ...CriticalHorizontal.args,
  },
};

export const MultipleNotifications: StoryObj<Args> = {
  render: (args) => (
    <>
      <PageNotification
        status="critical"
        subTitle="Test SubTitle"
        title="Test Critical Title"
      />
      <PageNotification
        status="favorable"
        subTitle="Test SubTitle"
        title="Test Favorable Title"
      />
    </>
  ),
};
