import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { DataBar } from './DataBar';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

export default {
  title: 'Components/DataBar',
  component: DataBar,
  args: {
    label: 'Data bar',
    max: 100,
    segments: [
      { value: 25, text: 'Segment 1' },
      { value: 10, text: 'Segment 2' },
      { value: 15, text: 'Segment 3' },
    ],
  },
  parameters: {
    badges: ['1.0'],
    backgrounds: {
      default: 'eds-color-neutral-white',
    },
  },
  decorators: [(Story) => <div className="m-4">{Story()}</div>],
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

export const InteractiveExample: StoryObj<Args> = {
  render: () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [max, setMax] = React.useState(100);
    const [segments, setSegments] = React.useState([
      { value: 90, text: 'Segment value 90' },
      { value: 1, text: 'Segment value 1' },
      { value: 1, text: 'Segment value 1' },
    ]);

    const [segmentValue, setSegmentValue] = React.useState(1);
    /* eslint-enable react-hooks/rules-of-hooks */

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
        <DataBar label="Interactive data bar" max={max} segments={segments} />
        <br />
        <label htmlFor="segment-value-input">Value add: </label>
        <input
          id="segment-value-input"
          onChange={(e) => {
            setSegmentValue(Number(e?.target?.value));
          }}
          value={segmentValue}
        ></input>
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
        <label htmlFor="max-value-input">Max: </label>
        <input
          id="max-value-input"
          onChange={(e) => {
            setMax(Number(e?.target?.value) || 100);
          }}
          value={max}
        ></input>
      </div>
    );
  },
  parameters: {
    /**
     * For interactive purposes only, low value in snapping or checking for visual regression since they should be covered in the other stories.
     */
    chromatic: { disableSnapshot: true },
    snapshot: { skip: true },
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};
