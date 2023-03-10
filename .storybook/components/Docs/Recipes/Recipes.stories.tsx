import type { StoryObj } from '@storybook/react';
import React from 'react';
import RecipesDocs from '../../../../docs/RECIPES.md';
import { markdownStorybookOptions } from '../MarkdownWrapper';

export default {
  title: 'Documentation/Recipes',
  component: RecipesDocs,
  ...markdownStorybookOptions,
};

export const Recipes: StoryObj = {
  render: () => <RecipesDocs />,
};
