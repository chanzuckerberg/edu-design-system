import { StoryObj } from '@storybook/react';
import React from 'react';

import { HorizontalStepper } from './HorizontalStepper';
import HorizontalStep from '../HorizontalStep';

export default {
  title: 'Molecules/Lists/HorizontalStepper',
  component: HorizontalStepper,
};

type Args = React.ComponentProps<typeof HorizontalStepper>;

// export const Default: StoryObj<Args> = {};
export const HorizontalSteps: StoryObj<Args> = {
  render: () => (
    <>
      <HorizontalStep text="Horizontal step" variant="incomplete" />
      <HorizontalStep stepNumber={1} text="Horizontal step" variant="active" />
      <HorizontalStep text="Horizontal step" variant="complete" />
    </>
  ),
};

export const HorizontalStepsDifferentNumbers: StoryObj<Args> = {
  render: () => (
    <>
      <HorizontalStep stepNumber={1} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={2} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={3} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={4} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={5} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={6} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={7} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={8} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={9} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={10} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={21} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={32} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={43} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={54} text="Horizontal step" variant="active" />
      <HorizontalStep stepNumber={65} text="Horizontal step" variant="active" />
    </>
  ),
};
