import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { DataBar } from './DataBar';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

export default {
  title: 'Example/DataBar',
  component: DataBar,
  args: {
    'aria-label': 'data-bar',
    max: 100,
    segments: [
      { value: 25, text: 'Segment 1' },
      { value: 10, text: 'Segment 2' },
      { value: 15, text: 'Segment 3' },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0.25rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof DataBar>;

export const TotalsLessThanMax: StoryObj<Args> = {};

export const TotalsMax: StoryObj<Args> = {
  args: { max: 50 },
};

export const TotalsMoreThanMax: StoryObj<Args> = {
  args: { max: 25 },
};

export const TotalsRightUnderMax: StoryObj<Args> = {
  args: { max: 51 },
};

export const LargeValue: StoryObj<Args> = {
  args: {
    max: 100,
    segments: [{ value: 96, text: 'Segment 1' }],
  },
};

export const SmallValue: StoryObj<Args> = {
  args: {
    max: 100,
    segments: [{ value: 1, text: 'Segment 1' }],
  },
};

export const NoSegments: StoryObj<Args> = {
  args: {
    segments: [],
  },
};

const Interactive = () => {
  const [max, setMax] = React.useState(100);
  const handleChange = (e) => {
    setMax(Number(e?.target?.value) || 100);
  };
  const [segments, setSegments] = React.useState([
    { value: 90, text: 'Segment value 90' },
    { value: 1, text: 'Segment value 1' },
    { value: 1, text: 'Segment value 1' },
  ]);

  const [segmentValue, setSegmentValue] = React.useState(1);
  const handleSegmentValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSegmentValue(Number(e?.target?.value));
  };

  const onPush = () => {
    segments.push({
      value: segmentValue || 1,
      text: `Segment value ${segmentValue}`,
    });
    setSegments([...segments]);
  };
  const onPop = () => {
    if (segments.length > 0) {
      segments.pop();
      setSegments([...segments]);
    }
  };
  return (
    <div>
      <DataBar
        aria-label="interactive-data-bar-example"
        max={max}
        segments={segments}
      />
      <br />
      <span>Value add: </span>
      <input onChange={handleSegmentValueChange} value={segmentValue}></input>
      <br />
      <ButtonGroup>
        <Button onClick={onPush} variant="primary">
          Push segment
        </Button>
        <Button onClick={onPop} variant="secondary">
          Pop segment
        </Button>
      </ButtonGroup>
      <br />
      <span>Max: </span>
      <input onChange={handleChange} value={max}></input>
    </div>
  );
};

export const InteractiveExample: StoryObj<Args> = {
  render: () => <Interactive />,
};
