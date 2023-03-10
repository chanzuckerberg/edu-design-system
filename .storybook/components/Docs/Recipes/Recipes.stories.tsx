import type { StoryObj } from '@storybook/react';
import React from 'react';
import RecipesDocs from '../../../../docs/RECIPES.md';
import { Documentation } from '../Documentation';

export default {
  title: 'Documentation/Recipes',
  component: RecipesDocs,
  parameters: {
    chromatic: { disableSnapshot: true },
    axe: {
      skip: true,
    },
  },
};

export const Recipes: StoryObj = {
  render: () => (
    <Documentation>
      <RecipesDocs />
    </Documentation>
  ),
};
