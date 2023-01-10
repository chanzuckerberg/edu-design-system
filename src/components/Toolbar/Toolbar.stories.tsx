import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Toolbar } from './Toolbar';
import ToolbarItem from '../ToolbarItem';

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
  subcomponents: { ToolbarItem },
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
  },
  args: {
    children: (
      <>
        <Toolbar.Item>
          <div className="fpo !m-0">Left</div>
        </Toolbar.Item>
        <Toolbar.Item>
          <div className="fpo !m-0">Left</div>
        </Toolbar.Item>
        <Toolbar.Item>
          <div className="fpo !m-0">Left</div>
        </Toolbar.Item>
        <Toolbar.Item align="right">
          <div className="fpo !m-0">Right</div>
        </Toolbar.Item>
      </>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Toolbar>;

export const Default: StoryObj<Args> = {};
export const Bare: StoryObj<Args> = {
  args: {
    variant: 'bare',
  },
};

export const AlignTop: StoryObj<Args> = {
  args: {
    verticalAlign: 'top',
  },
};

export const AlignBottom: StoryObj<Args> = {
  args: {
    verticalAlign: 'bottom',
  },
};
