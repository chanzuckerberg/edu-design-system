import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  args: {
    label: 'Progress Bar Label',
    currentValue: 20,
    maxValue: 100,
  },
  parameters: {
    badges: ['intro-1.2'],
    backgrounds: {
      default: 'eds-color-neutral-white',
    },
  },
  decorators: [(Story) => <div className="m-4">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof ProgressBar>;

export const Default: StoryObj<Args> = {};

export const Empty: StoryObj<Args> = {
  args: {
    currentValue: 0,
  },
};

export const WithCustomCaption: StoryObj<Args> = {
  args: {
    caption: '20 %',
  },
};

export const TwoSegments: StoryObj<Args> = {
  args: {
    totalSegments: 2,
  },
};

export const Complete: StoryObj<Args> = {
  render: () => (
    <div>
      <ProgressBar
        currentValue={100}
        label="Progress Bar Label"
        maxValue={100}
      />
      <ProgressBar
        currentValue={100}
        label="Progress Bar Label"
        maxValue={100}
        totalSegments={4}
      />
    </div>
  ),
};

const InteractiveProgressBar = () => {
  const [currentValue, setCurrentValue] = React.useState(1);
  const [maxValue, setMaxValue] = React.useState(10);
  const [totalSegments, setTotalSegments] = React.useState(0);
  return (
    <div>
      <ProgressBar
        currentValue={currentValue}
        label="Interactive progress bar"
        maxValue={maxValue}
        totalSegments={totalSegments}
      />
      <br />
      <label htmlFor="segment-value-input">Current value: </label>
      <input
        id="segment-value-input"
        onChange={(e) => {
          setCurrentValue(Number(e?.target?.value));
        }}
        value={currentValue}
      ></input>
      <br />
      <label htmlFor="max-input">Max value: </label>
      <input
        id="max-input"
        onChange={(e) => {
          setMaxValue(Number(e?.target?.value));
        }}
        value={maxValue}
      ></input>
      <br />
      <label htmlFor="total-segments-input">Total number of segments: </label>
      <input
        id="total-segments-input"
        max={10}
        min={0}
        onChange={(e) => {
          setTotalSegments(Number(e?.target?.value));
        }}
        type="number"
        value={totalSegments}
      ></input>
    </div>
  );
};

export const Interactive: StoryObj<Args> = {
  render: () => <InteractiveProgressBar />,
  parameters: {
    /**
     * For interactive purposes only, low value in snapping or checking for visual regression since they should be covered in the other stories.
     */
    chromatic: { disableSnapshot: true },
    snapshot: { skip: true },
  },
};
