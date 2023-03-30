import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Slider, InputField, Text, Button, Label } from '../../src';

/**
 * React is confused about what `render` is, preventing hooks:
 * - `render` gets used in a hidden Story component, which follows the rules
 */
/* eslint-disable react-hooks/rules-of-hooks */

export default {
  title: 'Recipes/Sliders',
  component: Slider,
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    fieldNote: {
      type: 'string',
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Slider>;

const moodData = [
  { emoji: '😡', value: 0, description: 'Very Upset' },
  { emoji: '🙁', value: 25, description: 'Upset' },
  { emoji: '😐', value: 50, description: 'Neutral' },
  { emoji: '🙂', value: 75, description: 'Happy' },
  { emoji: '😍', value: 100, description: 'Very Happy' },
];

export const UsingInputDisplay: StoryObj<Args> = {
  parameters: {
    axe: {
      disabledRules: ['color-contrast'], // adding for disabled field example
    },
  },
  render: ({ min = 0, max = 100, step = 1, value = 50, ...rest }) => {
    const [sliderValue, setSliderValue] = useState(value);

    return (
      <div className="flex w-full items-end justify-center gap-2">
        <Text className="py-3">{min}</Text>
        <Slider
          className="w-1/2"
          label="Slider with input"
          max={max}
          min={min}
          step={step}
          {...rest}
          onChange={({ target }) => setSliderValue(Number(target.value))}
          value={sliderValue}
        />
        <Text className="py-3">{max}</Text>
        <InputField
          aria-label="display value"
          className="mx-2 w-14"
          readOnly
          value={sliderValue}
        />
      </div>
    );
  },
};

export const UsingControlButtons: StoryObj<Args> = {
  render: ({ min = 0, max = 100, step = 1, value = 50, ...rest }) => {
    const [sliderValue, setSliderValue] = useState(value);

    return (
      <div className="flex w-full items-end items-center justify-center gap-2">
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
  render: ({ min = 0, max = 100, step = 25, value = 50, ...rest }) => {
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
            {moodData.map((mood) => {
              return sliderValue === mood.value && <>{mood.emoji}</>;
            })}
          </div>
        </div>
        <Text className="py-3 text-center" id="mood-description">
          Current mood:{' '}
          <strong>
            {moodData.map((mood) => {
              return sliderValue === mood.value && <>{mood.description}</>;
            })}
          </strong>
        </Text>
      </article>
    );
  },
};

export const WithVisualLabel: StoryObj<Args> = {
  render: ({ min = 0, max = 100, step = 25, value = 50, ...rest }) => {
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
              return sliderValue === mood.value && <>{mood.emoji}</>;
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
  render: ({ min = 0, max = 100, step = 25, value = 50, ...rest }) => {
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
