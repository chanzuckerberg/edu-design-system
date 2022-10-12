import type {StoryObj, Meta} from '@storybook/react';
import type {ComponentProps} from 'react';

import {PageShell} from './PageShell';

export default {
  title: 'Recipes/PageShell',
  component: PageShell,
  args: {
    children: 'Test',
  },
} as Meta;

type Args = ComponentProps<typeof PageShell>;

export const Default: StoryObj<Args> = {};
