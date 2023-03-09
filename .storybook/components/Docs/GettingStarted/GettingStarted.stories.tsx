import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GettingStartedDocumentation } from './GettingStartedDocumentation';
import GettingStartedDocs from '../../../../docs/GETTING_STARTED.md';
import styles from '../markdown.module.css';
export default {
  title: 'Getting Started',
  component: GettingStartedDocumentation,
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

type Args = React.ComponentProps<typeof GettingStartedDocumentation>;

export const GettingStarted: StoryObj<Args> = {
  args: {
    children: <GettingStartedDocs />,
  },
};
