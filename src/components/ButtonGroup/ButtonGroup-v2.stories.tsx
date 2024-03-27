import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { ButtonGroup } from './ButtonGroup-v2';
import { ButtonV2 as Button } from '../Button';

export default {
  title: 'Components/V2/ButtonGroup',
  component: ButtonGroup,
  args: {
    orientation: 'horizontal',
    children: (
      <>
        <Button rank="primary">Button 1</Button>
        <Button rank="secondary">Button 2</Button>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    badges: ['intro-1.0', 'current-2.0'],
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof ButtonGroup>;

export const Default: StoryObj<Args> = {};

export const Vertical: StoryObj<Args> = {
  args: {
    buttonLayout: 'vertical',
  },
};

export const HorizontalProgressive: StoryObj<Args> = {
  args: {
    buttonLayout: 'horizontal-progressive',
  },
};

export const WithFiveButtons: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
        <Button rank="primary">Button 5</Button>
      </>
    ),
  },
};
