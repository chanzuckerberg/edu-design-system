import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';

import { AppNotification } from './AppNotification';
import { ButtonV2 as Button } from '../Button';
import { ButtonGroupV2 as ButtonGroup } from '../ButtonGroup';

export default {
  title: 'Components/V2/AppNotification',
  component: AppNotification,
  parameters: {
    badges: [BADGE.BETA, 'intro-2.0', 'current-2.0'],
  },
  args: {
    title: 'This is an AppNotification title',
    subTitle:
      'Lorem ipsum dolor sit amet consectetur. At et vitae quis amet felis mollis in vitae. Eget in neque et molestie. Luctus sed id commodo volutpat. In a eu in id molestie consectetur pellentesque.',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof AppNotification>;

export const Default: StoryObj<Args> = {
  args: {},
};

export const WithControls: StoryObj<Args> = {
  args: {
    children: (
      <ButtonGroup buttonLayout="horizontal" className="!flex-row">
        <Button rank="secondary" variant="inverse">
          Call To Action
        </Button>
        <Button rank="tertiary" variant="inverse">
          Other action
        </Button>
      </ButtonGroup>
    ),
  },
};

export const LightColor: StoryObj<Args> = {
  args: {
    color: 'light',
    children: (
      <ButtonGroup buttonLayout="horizontal-align-left">
        <Button rank="secondary">Call To Action</Button>
        <Button rank="tertiary">Other action</Button>
      </ButtonGroup>
    ),
  },
};

export const WithDismissAndControls: StoryObj<Args> = {
  args: {
    ...WithControls.args,
    onDismiss: () => {
      console.log('dismissing!');
    },
  },
};

export const LightWithDismissAndControls: StoryObj<Args> = {
  args: {
    ...LightColor.args,
    onDismiss: () => {
      console.log('dismissing!');
    },
  },
};

// TODO-AH: add in responsive tests for each breakpoint to cover layout and spacing
