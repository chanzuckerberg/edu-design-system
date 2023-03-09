import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect } from 'react';
import ThemingDocs from '../../../../docs/THEMING.md';
import { LayoutContainer } from '../../../../src/components/LayoutContainer/LayoutContainer';
import { LayoutLinelengthContainer } from '../../../../src/components/LayoutLinelengthContainer/LayoutLinelengthContainer';
// @ts-expect-error prism.js must be in JS
import Prism from '../prism';
import styles from '../markdown.module.css';

export default {
  title: 'Documentation/Theming',
  component: ThemingDocs,
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

const ThemingDocumentation: React.FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <LayoutContainer>
      <LayoutLinelengthContainer>
        <ThemingDocs />
      </LayoutLinelengthContainer>
    </LayoutContainer>
  );
};

export const Theming: StoryObj = {
  render: () => <ThemingDocumentation />,
};
