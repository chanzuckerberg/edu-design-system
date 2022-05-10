import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './PageShell.module.css';
import {
  Button,
  Layout,
  LayoutContainer,
  LayoutSection,
  Main,
} from '../../../src';

import { GlobalHeader } from '../GlobalHeader/GlobalHeader';

export interface Props {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const PageShell = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['page-shell'], className, {});
  return (
    <body className={componentClassName}>
      <Button
        className={styles['page-shell__skip-link']}
        href="#main-content"
        size="sm"
        variant="primary"
      >
        Skip to content
      </Button>
      <Layout gap="none">
        <LayoutSection region="sidebar">
          <GlobalHeader />
        </LayoutSection>
        <LayoutSection region="main">
          <Main>
            <LayoutContainer>{children}</LayoutContainer>
          </Main>
        </LayoutSection>
      </Layout>
    </body>
  );
};
