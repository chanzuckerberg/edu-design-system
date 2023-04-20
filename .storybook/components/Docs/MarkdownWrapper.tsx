import { Markdown } from '@storybook/blocks';
import React, { useEffect } from 'react';
// @ts-expect-error prism.js must be in JS
import Prism from './prism';
import { LayoutContainer } from '../../../src/components/LayoutContainer/LayoutContainer';
import { LayoutLinelengthContainer } from '../../../src/components/LayoutLinelengthContainer/LayoutLinelengthContainer';
import './prism.css';
import styles from './MarkdownWrapper.module.css';

type MarkdownWrapperProps = {
  /**
   * Markdown as string, e.g.:
   * `import ReadMe from './README.md?raw';`
   */
  children: string;
};

export const MarkdownWrapper = ({ children }: MarkdownWrapperProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  console.log(children);
  return (
    <LayoutContainer className={styles['markdown']}>
      <LayoutLinelengthContainer>
        <Markdown>{children}</Markdown>
      </LayoutLinelengthContainer>
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
  render: (args: MarkdownWrapperProps) => <MarkdownWrapper {...args} />,
};
