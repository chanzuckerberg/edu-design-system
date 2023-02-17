import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';

import { Slider } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Slider>;

const InteractiveSlider = (args: Args) => {
  const [value, setValue] = useState(args.value);
  return (
    <Slider
      {...args}
      onChange={(e) => setValue(Number(e.target.value))}
      value={value}
    />
  );
};

export const Default: StoryObj<Args> = {
  args: {
    label: 'Slider Label',
    min: 0,
    max: 100,
    value: 50,
  },
  render: (args) => <InteractiveSlider {...args} />,
};
