import type { Story } from '@storybook/react';
import type { ReactNode } from 'react';
import React, { useEffect } from 'react';
// @ts-expect-error prism.js must be in JS
import Prism from './prism';
import { LayoutContainer } from '../../../src/components/LayoutContainer/LayoutContainer';
import { LayoutLinelengthContainer } from '../../../src/components/LayoutLinelengthContainer/LayoutLinelengthContainer';
import './prism.css';
import styles from './MarkdownWrapper.module.css';

type MarkdownWrapperProps = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
};

export const MarkdownWrapper = ({ children }: MarkdownWrapperProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <LayoutContainer className={styles['markdown']}>
      <LayoutLinelengthContainer>{children}</LayoutLinelengthContainer>
    </LayoutContainer>
  );
};

export const markdownStorybookOptions = {
  parameters: {
    chromatic: { disableSnapshot: true },
    axe: {
      skip: true,
    },
  },
  decorators: [
    (Story: Story) => (
      <MarkdownWrapper>
        <Story />
      </MarkdownWrapper>
    ),
  ],
};
