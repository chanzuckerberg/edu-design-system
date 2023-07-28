import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import isChromatic from 'chromatic/isChromatic';
import React, { useState } from 'react';

import { Slider } from './Slider';

import { Button } from '../Button/Button';
import { InputField } from '../InputField/InputField';
import { Label } from '../Label/Label';
import { Text } from '../Text/Text';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    badges: ['1.3'],
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
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
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
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

const moodData = [
  { emoji: '😡', value: 0, description: 'Very Upset' },
  { emoji: '🙁', value: 25, description: 'Upset' },
  { emoji: '😐', value: 50, description: 'Neutral' },
  { emoji: '🙂', value: 75, description: 'Happy' },
  { emoji: '😍', value: 100, description: 'Very Happy' },
];

export const UsingInputDisplay: StoryObj<Args> = {
  parameters: {
    badges: ['1.3', 'implementationExample'],
    axe: {
      disabledRules: ['color-contrast'], // adding for disabled field example
    },
  },
  render: ({ min = 0, max = 100, step = 1, value = 50, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sliderValue, setSliderValue] = useState(value);

    return (
      <div className="flex w-full items-center justify-center gap-2">
        <Text>{min}</Text>
        <Slider
          aria-label="Slider with input"
          className="w-1/2"
          max={max}
          min={min}
          step={step}
          {...rest}
          onChange={({ target }) => setSliderValue(Number(target.value))}
          value={sliderValue}
        />
        <Text>{max}</Text>
        <InputField
          aria-label="display value"
          className="mx-2  w-14"
          readOnly
          value={sliderValue}
        />
      </div>
    );
  },
};

export const UsingControlButtons: StoryObj<Args> = {
  parameters: {
    badges: ['1.3', 'implementationExample'],
  },
  render: ({ min = 0, max = 100, step = 1, value = 50, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sliderValue, setSliderValue] = useState(value);

    return (
      <div className="flex w-full items-center justify-center gap-2">
        <Button
          aria-label="Decrement"
          disabled={sliderValue === min}
          onClick={() => setSliderValue(Math.max(min, sliderValue - 1))}
          status="neutral"
          variant="secondary"
        >
          &ndash;
        </Button>
        <Text>{min}</Text>
        <Slider
          aria-label="select a value"
          className="w-1/2"
          max={max}
          min={min}
          step={step}
          {...rest}
          onChange={({ target }) => setSliderValue(Number(target.value))}
          tooltip={`Slider: ${sliderValue}`}
          value={sliderValue}
        />
        <Text>{max}</Text>
        <Button
          aria-label="Increment"
          disabled={sliderValue === max}
          onClick={() => setSliderValue(Math.min(max, sliderValue + 1))}
          status="neutral"
          variant="secondary"
        >
          +
        </Button>
      </div>
    );
  },
};

export const WithHighlightedContent: StoryObj<Args> = {
  parameters: {
    badges: ['1.3', 'implementationExample'],
  },
  render: ({ min = 0, max = 100, step = 25, value = 50, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sliderValue, setSliderValue] = useState(value);

    return (
      <article>
        <div className="items-top flex justify-center gap-10">
          <Slider
            aria-describedby="mood-description"
            aria-label="Mood Slider"
            className="w-1/2"
            markers={moodData.map((mood) => mood.description)}
            max={max}
            min={min}
            step={step}
            {...rest}
            onChange={({ target }) => setSliderValue(Number(target.value))}
            value={sliderValue}
          />
          <div className="text-h1">
            {moodData.map((mood, index) => {
              return (
                sliderValue === mood.value && (
                  <span key={`mood-emoji-${mood.emoji}`}>{mood.emoji}</span>
                )
              );
            })}
          </div>
        </div>
        <Text className="py-3 text-center" id="mood-description">
          Current mood:{' '}
          <strong>
            {moodData.map((mood) => {
              return (
                sliderValue === mood.value && (
                  <span key={`mood-desc-${mood.description}`}>
                    {mood.description}
                  </span>
                )
              );
            })}
          </strong>
        </Text>
      </article>
    );
  },
};

export const WithVisualLabel: StoryObj<Args> = {
  parameters: {
    badges: ['1.3', 'implementationExample'],
  },
  render: ({ min = 0, max = 100, step = 25, value = 50, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sliderValue, setSliderValue] = useState(value);

    return (
      <article>
        <div className="items-top flex flex-col justify-center ">
          <Label
            className="w-1/2 py-4 text-center"
            id="slider-label"
            text="Mood Slider"
          />
          <div className="text-h1 w-1/2 py-4 text-center">
            {moodData.map((mood) => {
              return (
                sliderValue === mood.value && (
                  <span key={`mood-emoji-${mood.emoji}`}>{mood.emoji}</span>
                )
              );
            })}
          </div>
          <Slider
            aria-label="Mood Slider"
            aria-labelledby="slider-label"
            className="w-1/2"
            markers={moodData.map((mood) => mood.description)}
            max={max}
            min={min}
            step={step}
            {...rest}
            onChange={({ target }) => setSliderValue(Number(target.value))}
            value={sliderValue}
          />
        </div>
      </article>
    );
  },
};

export const WithMultipleVisualLabels: StoryObj<Args> = {
  parameters: {
    badges: ['1.3', 'implementationExample'],
  },
  render: ({ min = 0, max = 100, step = 25, value = 50, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sliderValue, setSliderValue] = useState(value);

    return (
      <article>
        <div className="items-top flex flex-col justify-center ">
          <Label
            className="w-1/2 py-4 text-center"
            id="slider-label"
            text="Mood Slider"
          />
          <div className="text-h1 flex w-1/2 justify-between py-4 text-center">
            {moodData.map((mood, index) => {
              return (
                <div
                  className={
                    sliderValue === mood.value
                      ? 'scale-150 transition-transform'
                      : ''
                  }
                  key={`mood-${mood.description}`}
                >
                  {mood.emoji}
                </div>
              );
            })}
          </div>
          <Slider
            aria-label="Mood Slider"
            aria-labelledby="slider-label"
            className="w-1/2"
            markers={moodData.map((mood) => mood.description)}
            max={max}
            min={min}
            step={step}
            {...rest}
            onChange={({ target }) => setSliderValue(Number(target.value))}
            value={sliderValue}
          />
        </div>
      </article>
    );
  },
};
