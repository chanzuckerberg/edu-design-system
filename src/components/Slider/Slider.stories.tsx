import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import isChromatic from 'chromatic/isChromatic';
import React, { useState } from 'react';

import { Slider } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    badges: ['1.3', BADGE.BETA],
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    fieldNote: {
      type: 'string',
    },
  },
  render: (args) => <InteractiveSlider {...args} />,
} as Meta<Args>;

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

type Args = React.ComponentProps<typeof Slider>;

export const Default: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
  },
};

export const NoVisibleLabel: StoryObj<Args> = {
  args: {
    'aria-label': 'Not visible slider label',
  },
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
};

export const MarkersSmallValues: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
    min: 1,
    max: 5,
    value: 3,
    markers: ['1', '2', '3', '4', '5'],
  },
};

export const MarkersLargeValues: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
    min: 0,
    max: 10000,
    value: 5000,
    step: 2500,
    markers: 'number',
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const FieldNote: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
    fieldNote: 'This is a fieldnote. It overrides the markers',
    markers: 'number',
  },
};

export const Tooltip: StoryObj<Args> = {
  args: {
    label: 'Slider With Tooltip',
    min: 0,
    max: 5,
    step: 1,
    value: 3,
    fieldNote: 'Hover to view tooltip with the value',
  },
  render: ({ value, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sliderValue, setSliderValue] = useState(value);
    return (
      <Slider
        tooltip={sliderValue + ''}
        {...args}
        onChange={(e) => setSliderValue(Number(e.target.value))}
        value={sliderValue}
      />
    );
  },
  parameters: {
    /**
     * No point snapping the button as this story is testing visual regression on the tooltip.
     */
    snapshot: { skip: true },
    chromatic: {
      diffThreshold: 0.5,
    },
  },
  play: async ({ canvasElement }) => {
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const slider = await canvas.findByRole('slider');

      userEvent.hover(slider);
    }
  },
};

// For visual regression test
export const Focus: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
  },
  parameters: {
    /**
     * No point snapping the button as this story is testing visual regression on the focus state (snap no difference than Default story).
     */
    snapshot: { skip: true },
  },
  play: () => {
    userEvent.tab();
  },
};
