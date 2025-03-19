import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import React, { useState } from 'react';

import { Slider } from './Slider';

import { Button } from '../Button/Button';
import { InputField } from '../InputField/InputField';
import { Label } from '../Label/Label';
import { Text } from '../Text/Text';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    badges: ['api-1.3', 'theme-1.0', BADGE.DEPRECATED],
  },
  args: {
    className: 'w-96',
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
  argTypes: {
    fieldNote: {
      type: 'string',
    },
  },
  render: (args: Args) => <InteractiveSlider {...args} />,
};

export default meta;

type Args = React.ComponentProps<typeof Slider>;
type Story = StoryObj<typeof Slider>;

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

export const Default: Story = {
  args: {
    label: 'Slider Label',
  },
};

export const NoVisibleLabel: Story = {
  args: {
    'aria-label': 'Not visible slider label',
  },
};

export const GeneratedMarkers: Story = {
  args: {
    label: 'Slider Label',
    min: 1,
    max: 5,
    value: 3,
    step: 1,
    markers: 'number',
  },
};

export const NegativeNonIntegerMarkers: Story = {
  args: {
    label: 'Slider Label',
    min: -1,
    max: 1,
    value: 0,
    step: 0.5,
    markers: 'number',
  },
};

export const Disabled: Story = {
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

export const MarkersSmallValues: Story = {
  args: {
    label: 'Slider Label',
    min: 1,
    max: 5,
    value: 3,
    markers: ['1', '2', '3', '4', '5'],
  },
};

export const MarkersLargeValues: Story = {
  args: {
    label: 'Slider Label',
    min: 0,
    max: 10000,
    value: 5000,
    step: 2500,
    markers: 'number',
  },
};

export const FieldNote: Story = {
  args: {
    label: 'Slider Label',
    fieldNote: 'This is a fieldnote. It overrides the markers',
    markers: 'number',
  },
};

// For visual regression test
export const Focus: Story = {
  args: {
    label: 'Slider Label',
  },
  parameters: {
    /**
     * No point snapping the button as this story is testing visual regression on the focus state (snap no difference than Default story).
     */
    snapshot: { skip: true },
  },
  play: async () => {
    await userEvent.tab();
  },
};

const moodData = [
  { emoji: '😡', value: 0, description: 'Very Upset' },
  { emoji: '🙁', value: 25, description: 'Upset' },
  { emoji: '😐', value: 50, description: 'Neutral' },
  { emoji: '🙂', value: 75, description: 'Happy' },
  { emoji: '😍', value: 100, description: 'Very Happy' },
];

export const UsingInputDisplay: Story = {
  parameters: {
    badges: ['api-1.3', 'implementationExample'],
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
          className="mx-2 w-14"
          value={sliderValue}
        />
      </div>
    );
  },
};

export const UsingControlButtons: Story = {
  parameters: {
    badges: ['api-1.3', 'current-1.3', 'implementationExample'],
  },
  render: ({ min = 0, max = 100, step = 1, value = 50, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sliderValue, setSliderValue] = useState(value);

    return (
      <div className="flex w-full items-center justify-center gap-2">
        <Button
          aria-label="Decrement"
          isDisabled={sliderValue === min}
          onClick={() => setSliderValue(Math.max(min, sliderValue - 1))}
          rank="secondary"
        >
          &ndash;
        </Button>
        <Text>{min}</Text>
        <Slider
          aria-label="select a value"
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
          isDisabled={sliderValue === max}
          onClick={() => setSliderValue(Math.min(max, sliderValue + 1))}
          rank="secondary"
        >
          +
        </Button>
      </div>
    );
  },
};

export const WithHighlightedContent: Story = {
  parameters: {
    badges: ['api-1.3', 'implementationExample'],
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
            markers={moodData.map((mood) => mood.description)}
            max={max}
            min={min}
            step={step}
            {...rest}
            onChange={({ target }) => setSliderValue(Number(target.value))}
            value={sliderValue}
          />
          <Text as="span" preset="body-xl">
            {moodData.map((mood, index) => {
              return (
                sliderValue === mood.value && (
                  <span key={`mood-emoji-${mood.emoji}`}>{mood.emoji}</span>
                )
              );
            })}
          </Text>
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

export const WithVisualLabel: Story = {
  parameters: {
    badges: ['api-1.3', 'implementationExample'],
  },
  render: ({ min = 0, max = 100, step = 25, value = 50, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sliderValue, setSliderValue] = useState(value);

    return (
      <article>
        <div className="items-top flex flex-col justify-center">
          <Label
            className="py-4 text-center"
            id="slider-label"
            text="Mood Slider"
          />
          <Text as="span" className="py-4 text-center" preset="body-xl">
            {moodData.map((mood) => {
              return (
                sliderValue === mood.value && (
                  <span key={`mood-emoji-${mood.emoji}`}>{mood.emoji}</span>
                )
              );
            })}
          </Text>
          <Slider
            aria-label="Mood Slider"
            aria-labelledby="slider-label"
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

export const WithMultipleVisualLabels: Story = {
  parameters: {
    badges: ['api-1.3', 'implementationExample'],
  },
  render: ({ min = 0, max = 100, step = 25, value = 50, ...rest }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sliderValue, setSliderValue] = useState(value);

    return (
      <article>
        <div className="items-top flex flex-col justify-center">
          <Label
            className="py-4 text-center"
            id="slider-label"
            text="Mood Slider"
          />
          <Text
            as="span"
            className="flex justify-between py-4 text-center"
            preset="body-xl"
          >
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
          </Text>
          <Slider
            aria-label="Mood Slider"
            aria-labelledby="slider-label"
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
