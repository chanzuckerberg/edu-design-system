import type { StoryObj, Meta } from '@storybook/react-webpack5';
import type React from 'react';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['beta', 'version:1.0'],
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
