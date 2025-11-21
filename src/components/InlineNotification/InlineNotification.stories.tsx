import type { StoryObj, Meta } from '@storybook/react-webpack5';
import React from 'react';

import { InlineNotification } from './InlineNotification';

export default {
  title: 'Components/InlineNotification',
  component: InlineNotification,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Inline notifications lorem ipsum text',
    className: 'w-[384px]',
  },
  tags: ['autodocs', 'version:2.0.1'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof InlineNotification>;

export const Default: StoryObj<Args> = {};

export const WithSubTitle: StoryObj<Args> = {
  args: {
    ...Default.args,
    subTitle: 'Additional text which provides additional detail',
  },
};

export const WithFormattedSubTitle: StoryObj<Args> = {
  args: {
    ...Default.args,
    subTitle: (
      <span>
        <em>Additional text</em> which provides additional detail
      </span>
    ),
  },
};

export const Favorable: StoryObj<Args> = {
  args: {
    ...WithSubTitle.args,
    status: 'favorable',
  },
};

export const Warning: StoryObj<Args> = {
  args: {
    ...WithSubTitle.args,
    status: 'warning',
  },
};

export const Critical: StoryObj<Args> = {
  args: {
    ...WithSubTitle.args,
    status: 'critical',
  },
};

export const LongText: StoryObj<Args> = {
  args: {
    title:
      'Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};
