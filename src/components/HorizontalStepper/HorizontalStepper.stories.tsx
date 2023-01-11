import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { HorizontalStepper } from './HorizontalStepper';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import HorizontalStep from '../HorizontalStep';
import Icon from '../Icon';

export default {
  title: 'Components/HorizontalStepper',
  component: HorizontalStepper,
  args: {
    activeIndex: 0,
    steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
  },
  decorators: [
    (Story) => (
      // Pushes contents away from storybook borders.
      <div className="m-4">
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof HorizontalStepper>;

export const OnFirstStep: StoryObj<Args> = {};

export const SomeCompletedSteps: StoryObj<Args> = {
  args: {
    activeIndex: 2,
  },
};

export const OnLastStep: StoryObj<Args> = {
  args: {
    activeIndex: 4,
  },
};

export const CompletedAllSteps: StoryObj<Args> = {
  args: {
    activeIndex: 5,
  },
};

const InteractiveHorizontalStepper = ({ steps }: Args) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickBack = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };
  const onClickNext = () => {
    if (activeIndex < steps.length) setActiveIndex(activeIndex + 1);
  };
  return (
    <>
      <HorizontalStepper activeIndex={activeIndex} steps={steps} />
      <br />
      <ButtonGroup>
        <Button onClick={onClickBack} variant="secondary">
          Back
        </Button>
        <Button onClick={onClickNext} variant="primary">
          Next
          <Icon name="arrow-forward" purpose="decorative" size="1.5rem" />
        </Button>
      </ButtonGroup>
    </>
  );
};
export const Interactive: StoryObj<Args> = {
  args: {
    steps: ['Add classroom details', 'Add projects', 'Create course plan'],
  },
  render: (args) => <InteractiveHorizontalStepper {...args} />,
  parameters: {
    // For interactive use, low value in snap testing again since already covered in other stories.
    chromatic: { disableSnapshot: true },
    snapshot: { skip: true },
  },
};

export const HorizontalSteps: StoryObj<Args> = {
  render: () => (
    <ol className="p-0">
      <HorizontalStep
        stepNumber={1}
        text="Horizontal step"
        variant="incomplete"
      />
      <HorizontalStep stepNumber={1} text="Horizontal step" variant="active" />
      <HorizontalStep
        stepNumber={1}
        text="Horizontal step"
        variant="complete"
      />
    </ol>
  ),
};

export const HorizontalStepsDifferentNumbers: StoryObj<Args> = {
  render: () => (
    <ol className="p-0">
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
    </ol>
  ),
};

export const CappedLine: StoryObj<Args> = {
  args: {
    linesClassName: 'max-w-[120px]',
  },
};
