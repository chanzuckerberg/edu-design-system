import type { StoryObj } from '@storybook/react';
import React from 'react';
import { RecipesDocumentation } from './RecipesDocumentation';
import RecipesDocs from '../../../docs/RECIPES.md';

export default {
  title: '',
  component: RecipesDocumentation,
  parameters: {
    chromatic: { disableSnapshot: true },
    axe: {
      skip: true,
    },
  },
};

type Args = React.ComponentProps<typeof RecipesDocumentation>;

export const Recipes: StoryObj<Args> = {
  args: {
    children: <RecipesDocs />,
  },
};
