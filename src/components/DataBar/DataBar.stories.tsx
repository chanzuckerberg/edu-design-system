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
    segments: [{ value: 25 }, { value: 10 }, { value: 15 }],
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
    segments: [{ value: 96 }],
  },
};

export const SmallValue: StoryObj<Args> = {
  args: {
    max: 100,
    segments: [{ value: 1 }],
  },
};

export const NoSegments: StoryObj<Args> = {
  args: {
    segments: [],
  },
};

const Interactive = () => {
  const [segments, setSegments] = React.useState([
    { value: 90 },
    { value: 1 },
    { value: 1 },
  ]);
  const onPush = () => {
    segments.push({ value: 1 });
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
        max={100}
        segments={segments}
      />
      <br />
      <ButtonGroup>
        <Button onClick={onPush} variant="primary">
          Push segment
        </Button>
        <Button onClick={onPop} variant="secondary">
          Pop segment
        </Button>
      </ButtonGroup>
    </div>
  );
};

export const InteractiveExample: StoryObj<Args> = {
  render: () => <Interactive />,
};
