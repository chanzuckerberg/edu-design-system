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
  tags: ['autodocs', 'version:2.0.2'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof PageNotification>;

const dismissMethod = () => {
  console.log('dismissing~');
};

export const Default: StoryObj<Args> = {
  args: {
    'aria-label': 'Default alert title',
  },
};

export const Warning: StoryObj<Args> = {
  args: {
    status: 'warning',
    'aria-label': 'Warning title which communicates info to the user',
  },
};

export const WarningWithSubtitle: StoryObj<Args> = {
  args: {
    status: 'warning',
    subTitle: <span>Subtitle text</span>,
    'aria-label':
      'Warning title and subtitle which communicates info to the user',
  },
};

/**
 * When using critical, make sure `Button` has a matching variant specified.
 */
export const Critical: StoryObj<Args> = {
  args: {
    callToAction: (
      <Button rank="secondary" size="sm" variant="neutral">
        Call to Action
      </Button>
    ),
    status: 'critical',
    'aria-label': 'Critical title which communicates info to the user',
  },
};

export const CriticalHorizontal: StoryObj<Args> = {
  args: {
    buttonLayout: 'horizontal',
    callToAction: (
      <Button rank="secondary" size="sm" variant="neutral">
        Call to Action
      </Button>
    ),
    status: 'critical',
    'aria-label': 'Critical title with horizontal buttons',
  },
};

export const Favorable: StoryObj<Args> = {
  args: {
    status: 'favorable',
    'aria-label': 'Favorable title which communicates info to the user',
  },
};

export const Dismissable: StoryObj<Args> = {
  args: {
    onDismiss: dismissMethod,
    'aria-label': 'Dismissable title which communicates info to the user',
  },
};

export const HorizontalDismissable: StoryObj<Args> = {
  args: {
    ...Dismissable.args,
    ...CriticalHorizontal.args,
    'aria-label': 'Dismissable Horizontal Critical title',
  },
};

/**
 * When having multiple notifications on screen at once, make sure they are labeled uniquely, so that assisstive technologies can tell them apart.
 */
export const MultipleNotifications: StoryObj<Args> = {
  render: (args) => (
    <>
      <PageNotification
        {...args}
        aria-label="Notification 1 of 2"
        status="critical"
        subTitle="Test SubTitle"
        title="Test Critical Title"
      />
      <PageNotification
        {...args}
        aria-label="Notification 2 of 2"
        status="favorable"
        subTitle="Test SubTitle"
        title="Test Favorable Title"
      />
    </>
  ),
};
