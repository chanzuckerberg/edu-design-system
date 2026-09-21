import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';

import { ProgressBar } from './ProgressBar';
import Card from '../Card';
import Text from '../Text';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      subtitle:
        'Component used to visually represent user progress through a series of discrete portions, or a percentage.',
    },
    layout: 'centered',
  },
  tags: ['beta', 'version:1.1.0'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof ProgressBar>;

/**
 * By default, `ProgressBar` uses vertical label layout, standalone context.
 */
export const Default: StoryObj<Args> = {
  args: {
    'aria-label': '33 percent',
    value: 0.33,
    className: 'w-[200px]',
  },
};

/**
 * `context="embedded"` is for a bar that belongs to the container around it rather than to the
 * page. The corners square off so the bar can sit flush against the container's edges, and the
 * labels drop out. Give it an `aria-label`, since nothing visible is left to name it.
 *
 * The bar does not break out of its container's padding on its own. Here the negative margins
 * cancel the `Card`'s padding to take it to the edges, and the `Card` clips the square corners
 * back to its own radius.
 */
export const Embedded: StoryObj<Args> = {
  args: {
    'aria-label': 'Lesson progress, 33 percent',
    context: 'embedded',
    value: 0.33,
  },
  render: (args: Args) => (
    <Card className="w-[366px]">
      <Card.Header subTitle="Lesson 3 of 9" title="Text complexity" />
      <Card.Body className="pb-spacing-size-3 pt-spacing-size-2">
        <Text preset="body-md">
          Pick up where you left off. Your progress is saved as you go.
        </Text>
      </Card.Body>
      <ProgressBar
        {...args}
        className="-mx-spacing-size-3 -mb-spacing-size-3"
      />
    </Card>
  ),
};

/**
 * All labels can be hidden by providing an empty `valueLabel`. You must specify an `aria-label` value in this case.
 */
export const WithNoLabels: StoryObj<Args> = {
  args: {
    'aria-label': '33 percent',
    value: 0.33,
    valueLabel: '',
    className: 'w-[200px]',
  },
};

/**
 * You can add a solitary label
 */
export const WithDescriptionLabel: StoryObj<Args> = {
  args: {
    ...Default.args,
    descriptionLabel: 'Label',
  },
};

/**
 * You can add both a label and sub-label. We should prevent labels from being this long, but if they do, they wrap.
 */
export const WithLongDescriptionLabel: StoryObj<Args> = {
  args: {
    ...Default.args,
    value: 0.5,
    descriptionLabel:
      'We should prevent labels from being this long, but if they do, they wrap',
  },
};

/**
 * Description labels can be rendered horizontally.
 */
export const WithHorizontalDescriptionLabel: StoryObj<Args> = {
  args: {
    ...WithDescriptionLabel.args,
    labelLayout: 'horizontal',
    valueLabel: '',
  },
};

/**
 * You can have a valueLabel only. This can be used when in a horizontal view.
 */
export const WithCustomHorizontalValueLabel: StoryObj<Args> = {
  args: {
    ...Default.args,
    labelLayout: 'horizontal',
    value: 0.5,
    valueLabel: 'Value',
  },
};

/**
 * You can add both a label and sub-label.
 */
export const WithDescriptionLabelAndValueLabel: StoryObj<Args> = {
  args: {
    ...Default.args,
    descriptionLabel: 'Label',
    valueLabel: 'Value',
  },
};

/**
 * Labels will wrap if the text strings are long. Labels should be brief, and sub-labels should be briefer (1-2 words).
 */
export const WithLongDescriptionLabelAndValueLabel: StoryObj<Args> = {
  args: {
    ...Default.args,
    descriptionLabel: 'If both labels are long, it looks really wack',
    valueLabel: 'Fifty units of one hundred',
  },
};

/**
 * All labels can contain freeform text, but not components.
 */
export const DescriptionLabelAndValueStringResizingBehavior: StoryObj<Args> = {
  args: {
    className: 'w-[366px]',
    value: 0.2,
    descriptionLabel:
      'We should prevent labels from being this long, but if they do, they wrap',
    valueLabel: '50% of 100%',
  },
};

/**
 * Horizontal labels can position next to a progress bar. These have a maximum width of 160px (spacing-size-20).
 */
export const HorizontalLabelAndValueStringResizingBehavior: StoryObj<Args> = {
  args: {
    ...DescriptionLabelAndValueStringResizingBehavior.args,
    labelLayout: 'horizontal',
  },
};
