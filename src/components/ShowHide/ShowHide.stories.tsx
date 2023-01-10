import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { ShowHide } from './ShowHide';
import Button from '../Button';
import Icon from '../Icon';

export default {
  title: 'Components/ShowHide',
  component: ShowHide,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '10rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: <div className="fpo">Hidden Content</div>,
    trigger: (
      <Button type="button" variant="primary">
        <Icon name="expand-more" purpose="decorative" />
      </Button>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof ShowHide>;

export const Default: StoryObj<Args> = {
  args: {
    text: 'Actions',
  },
};
