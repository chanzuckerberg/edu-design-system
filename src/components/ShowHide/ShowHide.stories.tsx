import {StoryObj, Meta} from '@storybook/react';
import React from 'react';

import Button from '../Button';
import Icon from '../Icon';
import {ShowHide} from './ShowHide';

export default {
  title: 'Molecules/Interactive/ShowHide',
  component: ShowHide,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
  },
  decorators: [
    (Story) => (
      <div style={{margin: '10rem'}}>
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
