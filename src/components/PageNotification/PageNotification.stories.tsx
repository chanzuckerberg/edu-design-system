import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
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
    callToAction: (
      <Button rank="secondary" size="sm" variant="neutral">
        Call to Action
      </Button>
    ),
    className: 'w-[627px]',
    onDismiss: () => {},
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
  tags: ['autodocs', 'version:2.1'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof PageNotification>;

export const Default: StoryObj<Args> = {
  args: {
    subTitle: 'Body text which provides additional detail',
    'aria-label': 'Default alert title',
    onDismiss: undefined,
  },
};

export const Informational: StoryObj<Args> = {
  args: {
    'aria-label': 'Default alert title',
    status: 'informational',
  },
};

/**
 * When using critical, make sure `Button` has a matching variant specified.
 */
export const Critical: StoryObj<Args> = {
  args: {
    status: 'critical',
    'aria-label': 'Critical title which communicates info to the user',
  },
};

export const Warning: StoryObj<Args> = {
  args: {
    status: 'warning',
    'aria-label': 'Warning title which communicates info to the user',
  },
};

export const Favorable: StoryObj<Args> = {
  args: {
    status: 'favorable',
    'aria-label': 'Favorable title which communicates info to the user',
  },
};

export const WithTitleWrapping: StoryObj<Args> = {
  args: {
    'aria-label': 'Default alert title',
    title:
      'Alert title which communicates info to the user that is kind of long and wraps to multiple lines',
    subTitle: 'Body text which provides additional detail',
  },
};

export const WithTitleWrappingAndNoSubTitle: StoryObj<Args> = {
  args: {
    'aria-label': 'Default alert title',
    title:
      'Alert title which communicates info to the user that is kind of long and wraps to multiple lines',
  },
};

export const WithHorizontalLayout: StoryObj<Args> = {
  args: {
    'aria-label': 'Default alert title',
    title: 'Shorter alert title',
    subTitle: 'Body text which provides additional detail',
    buttonLayout: 'horizontal',
  },
};

/**
 * When having multiple notifications on screen at once, make sure they are labeled uniquely, so that assistive technologies can tell them apart.
 */
export const MultipleNotifications: StoryObj<Args> = {
  render: (args) => (
    <div className="gap-spacing-size-1 flex flex-col">
      <PageNotification
        {...args}
        aria-label="Notification 1 of 2"
        status="critical"
        subTitle="Subtitle which provides additional detail"
        title="Test Critical Title"
      />
      <PageNotification
        {...args}
        aria-label="Notification 2 of 2"
        status="favorable"
        subTitle="Subtitle which provides additional detail"
        title="Test Favorable Title"
      />
    </div>
  ),
};
