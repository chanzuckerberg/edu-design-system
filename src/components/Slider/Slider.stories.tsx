import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import React, { useState } from 'react';

import { Slider } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    badges: [BADGE.BETA],
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Slider>;

const InteractiveSlider = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  ...args
}: Args) => {
  const [sliderValue, setSliderValue] = useState(value);
  return (
    <Slider
      max={max}
      min={min}
      step={step}
      {...args}
      onChange={(e) => setSliderValue(Number(e.target.value))}
      value={sliderValue}
    />
  );
};

export const Default: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
  },
  render: (args) => <InteractiveSlider {...args} />,
};

export const NoVisibleLabel: StoryObj<Args> = {
  args: {
    'aria-label': 'Not visible slider label',
  },
  render: (args) => <InteractiveSlider {...args} />,
};

export const GeneratedMarkers: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
    min: 1,
    max: 5,
    value: 3,
    step: 1,
    markers: 'number',
  },
  render: (args) => <InteractiveSlider {...args} />,
};

export const NegativeNonIntegerMarkers: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
    min: -1,
    max: 1,
    value: 0,
    step: 0.5,
    markers: 'number',
  },
  render: (args) => <InteractiveSlider {...args} />,
};

export const Disabled: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
    min: 1,
    max: 5,
    value: 3,
    step: 1,
    markers: 'number',
    disabled: true,
  },
  render: (args) => <InteractiveSlider {...args} />,
};

export const MarkersSmallValues: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
    min: 1,
    max: 5,
    value: 3,
    markers: ['1', '2', '3', '4', '5'],
  },
  render: (args) => <InteractiveSlider {...args} />,
};

export const MarkersLargeValues: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
    min: 0,
    max: 1000,
    value: 500,
    step: 250,
    markers: ['10000', '10000', '10000', '10000', '10000'],
  },
  render: (args) => <InteractiveSlider {...args} />,
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

// For visual regression test
export const Focus: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
  },
  render: (args) => <InteractiveSlider {...args} />,
  play: () => {
    userEvent.tab();
  },
};
