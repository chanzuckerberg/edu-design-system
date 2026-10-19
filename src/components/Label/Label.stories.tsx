import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};
import React from 'react';

import { Label } from './Label';
import Tooltip from '../Tooltip';

export default {
  title: 'Components/Label',
  component: Label,
  parameters: {
    docs: {
      subtitle:
        'Label component used with selection controls (e.g., radio/checkbox fields).',
    },
    layout: 'centered',
  },
  tags: ['autodocs', 'version:2.0'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Label>;

/**
 * Labels denote some text to label the content.
 */
export const Default: StoryObj<Args> = {
  args: {
    text: 'Label',
  },
};

/**
 * You can use `labelAfter` to affix additional functionality to the label, like an optional `<Tooltip>`.
 */
export const LabelAfter: StoryObj<Args> = {
  args: {
    text: 'Label',
    labelAfter: (
      <Tooltip content="Test">
        <span>*</span>
      </Tooltip>
    ),
  },
};
