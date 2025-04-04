import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { ButtonGroup } from './ButtonGroup';
import Button from '../Button';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  args: {
    children: (
      <>
        <Button rank="primary">Button 1</Button>
        <Button rank="secondary">Button 2</Button>
      </>
    ),
  },
  argTypes: {
    buttonLayout: {
      options: ['horizontal', 'vertical', 'horizontal-progressive'],
    },
    children: {
      control: false,
    },
  },
  parameters: {
    badges: ['api-2.0', 'theme-2.0'],
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {};

/**
 * Buttons can have a vertical layout.
 */
export const Vertical: Story = {
  args: {
    buttonLayout: 'vertical',
  },
};

/**
 * Primary and secondary buttons can be put along the edges of the tertiary `Button`.
 */
export const HorizontalProgressive: Story = {
  args: {
    buttonLayout: 'horizontal-progressive',
  },
};

/**
 * When using a tertiary button, you may adjust the layout to nudge the button's alignment to better flow
 * with adjacent content. Use `-ml-X` to set a negative margin within the `ButtonGroup`.
 */
export const HorizontalProgressiveTertiary: Story = {
  args: {
    buttonLayout: 'horizontal-progressive',
    children: (
      <>
        <Button rank="primary">Primary Button</Button>
        <Button className="-ml-spacing-size-2" rank="tertiary">
          Tertiary Button
        </Button>
      </>
    ),
  },
};
