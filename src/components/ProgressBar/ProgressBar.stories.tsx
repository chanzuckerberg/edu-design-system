import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

export default {
  title: 'Molecules/Progress/ProgressBar',
  component: ProgressBar,
  args: {
    label: 'Progress Bar Label',
    max: 100,
    segmentCount: 2,
    segmentValue: 10,
  },
  parameters: {
    badges: [BADGE.BETA],
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'white', padding: '0.5rem' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof ProgressBar>;

export const Default: StoryObj<Args> = {};

export const WithCustomCaption: StoryObj<Args> = {
  args: {
    caption: '20 %',
  },
};

export const Empty: StoryObj<Args> = {
  args: {
    segmentCount: 0,
  },
};

export const Complete: StoryObj<Args> = {
  render: () => (
    <div>
      <ProgressBar
        label="Progress Bar Label"
        max={100}
        segmentCount={10}
        segmentValue={10}
      />
      <ProgressBar
        label="Progress Bar Label"
        max={100}
        segmentCount={1}
        segmentValue={100}
      />
    </div>
  ),
};

const InteractiveProgressBar = () => {
  const [segmentValue, setSegmentValue] = React.useState(1);
  const [max, setMax] = React.useState(10);
  const [count, setCount] = React.useState(0);
  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <ProgressBar
        label="Interactive progress bar"
        max={max}
        segmentCount={count}
        segmentValue={segmentValue}
      />
      <br />
      <label htmlFor="segment-value-input">Segment value: </label>
      <input
        id="segment-value-input"
        onChange={(e) => {
          setCount(0);
          setSegmentValue(Number(e?.target?.value));
        }}
        value={segmentValue}
      ></input>
      <br />
      <label htmlFor="max-input">Max value: </label>
      <input
        id="max-input"
        onChange={(e) => {
          setCount(0);
          setMax(Number(e?.target?.value));
        }}
        value={max}
      ></input>
      <br />
      <ButtonGroup>
        {count > 0 && (
          <Button onClick={decrease} variant="primary">
            Decrease Segment Count
          </Button>
        )}
        {count < 10 && (
          <Button onClick={increase} variant="secondary">
            Increase Segment Count
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
};

export const Interactive: StoryObj<Args> = {
  render: () => <InteractiveProgressBar />,
  parameters: {
    /**
     * For interactive purposes only, low value in snapping or checking for visual regression since they should be covered in the other stories.
     */
    chromatic: {
      disableSnapshot: true,
    },
    snapshot: {
      skip: true,
    },
  },
};
