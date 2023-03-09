import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RecipesDocumentation } from './RecipesDocumentation';
import RecipesDocs from '../../../../docs/RECIPES.md';
import styles from '../markdown.module.css';

export default {
  title: 'Documentation/Recipes',
  component: RecipesDocumentation,
  parameters: {
    chromatic: { disableSnapshot: true },
    axe: {
      skip: true,
    },
  },
  decorators: [
    (Story) => (
      <div className={styles['markdown']}>
        <Story />
      </div>
    ),
  ],
} as Meta;

type Args = React.ComponentProps<typeof RecipesDocumentation>;

export const Recipes: StoryObj<Args> = {
  args: {
    children: <RecipesDocs />,
  },
};
