import {StoryObj, Meta} from '@storybook/react';
import React from 'react';

import {PageShell} from './PageShell';

export default {
  title: 'Recipes/PageShell',
  component: PageShell,
  args: {
    children: 'Test',
  },
} as Meta;

type Args = React.ComponentProps<typeof PageShell>;
export const Default: StoryObj<Args> = {};
