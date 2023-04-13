import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  args: {
    spacing: '1x' as const,
    orientation: 'horizontal' as const,
    children: (
      <>
        <Button status="neutral">Button 1</Button>
        <Button variant="primary">Button 2</Button>
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
    badges: ['1.0'],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof ButtonGroup>;

export const Default: StoryObj<Args> = {};

export const SpacingNone: StoryObj<Args> = {
  args: {
    spacing: 'none',
  },
};

export const SpacingMax: StoryObj<Args> = {
  args: {
    spacing: 'max',
  },
};

export const Vertical: StoryObj<Args> = {
  args: {
    orientation: 'vertical',
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
        <Button variant="primary">Button 5</Button>
      </>
    ),
  },
};
