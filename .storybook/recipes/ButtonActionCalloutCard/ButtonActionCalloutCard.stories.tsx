import {StoryObj, Meta} from '@storybook/react';
import React from 'react';

import {Button} from '../../../src';
import {ButtonActionCalloutCard} from './ButtonActionCalloutCard';

export default {
  title: 'Recipes/ButtonActionCalloutCard',
  component: ButtonActionCalloutCard,
} as Meta<Args>;
type Args = React.ComponentProps<typeof ButtonActionCalloutCard>;

export const Default: StoryObj<Args> = {
  args: {
    title: 'Do This Checkpoint',
    children:
      'Develop the text of your Body Book, crafting evidence-supported explanations on how the body is organized and its functions.',
    actions: <Button variant="primary">Preview</Button>,
  },
};
