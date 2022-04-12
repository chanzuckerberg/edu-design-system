import type { StoryObj } from '@storybook/react';
import React from 'react';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

export default {
  title: 'Organisms/Buttons/ButtonGroup',
  component: ButtonGroup,
  args: {
    spacing: '1x' as const,
    orientation: 'horizontal' as const,
    children: (
      <>
        <Button>Button 1</Button>
        <Button variant="secondary">Button 2</Button>
      </>
    ),
  },
};

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
        <Button variant="secondary">Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="secondary">Button 3</Button>
        <Button variant="secondary">Button 4</Button>
        <Button>Button 5</Button>
      </>
    ),
  },
};

export const WithFiveButtonsNowrap: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Button variant="secondary">Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="secondary">Button 3</Button>
        <Button variant="secondary">Button 4</Button>
        <Button>Button 5</Button>
      </>
    ),
    wrap: 'nowrap',
  },
};

export const WithFiveButtonsWrapReverse: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Button variant="secondary">Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="secondary">Button 3</Button>
        <Button variant="secondary">Button 4</Button>
        <Button>Button 5</Button>
      </>
    ),
    wrap: 'wrap-reverse',
  },
};
