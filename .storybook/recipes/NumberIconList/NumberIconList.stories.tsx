import type { StoryObj } from '@storybook/react';
import React from 'react';

import { NumberIconList } from './NumberIconList';
import { NumberIcon } from '../../../src';

export default {
  title: 'Recipes/NumberIconList',
  component: NumberIconList,
};

type Args = React.ComponentProps<typeof NumberIconList>;
export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <NumberIcon aria-label="Item 1" number={1} size="sm" />
        <NumberIcon
          aria-label="Item 2"
          incomplete
          number={2}
          numberIconTitle="incomplete step 2"
          size="sm"
        />
        <NumberIcon aria-label="Item 3" number={3} size="sm" />
        <NumberIcon
          aria-label="Item 4"
          incomplete
          number={4}
          numberIconTitle="incomplete step 4"
          size="sm"
        />
        <NumberIcon
          aria-label="Item 5"
          incomplete
          number={5}
          numberIconTitle="incomplete step 5"
          size="sm"
        />
        <NumberIcon
          aria-label="Item 6"
          incomplete
          number={6}
          numberIconTitle="incomplete step 6"
          size="sm"
        />
      </>
    ),
  },
};
