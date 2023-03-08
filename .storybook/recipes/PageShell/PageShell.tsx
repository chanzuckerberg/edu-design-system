import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import { Link, Layout, LayoutContainer, LayoutSection } from '../../../src';

import styles from './PageShell.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Search students primary nav item is active
   */
  searchStudentsIsActive?: boolean;
  /**
   * Announcements primary nav item is active
   */
  announcementsIsActive?: boolean;
  /**
   * Subject primary nav item is active
   */
  subjectIsActive?: boolean;
  /**
   * Mentoring primary nav item is active
   */
  mentoringIsActive?: boolean;
  /**
   * Student progress primary nav item is active
   */
  studentProgressIsActive?: boolean;
  /**
   * Search students primary nav item is active
   */
  educatorToolsIsActive?: boolean;
  /**
   * Search students primary nav item is active
   */
  curriculumIsActive?: boolean;
}

/**
 * A general wrapper for pages, comes with a stub for a header component baked in.
 */
export const PageShell = ({
  children,
  className,
  searchStudentsIsActive,
  announcementsIsActive,
  subjectIsActive,
  mentoringIsActive,
  studentProgressIsActive,
  educatorToolsIsActive,
  curriculumIsActive,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['page-shell'], className, {});
  return (
    <body className={componentClassName}>
      <Link
        className={styles['page-shell__skip-link']}
        href="#main-content"
        size="sm"
        variant="primary"
      >
        Skip to content
      </Link>
      <Layout gap="none">
        <LayoutSection region="sidebar">
          <div className="fpo xl:fixed xl:h-full">Sidebar Goes Here</div>
        </LayoutSection>
        <LayoutSection region="main">
          <main className={styles['page-shell__main']}>
            <LayoutContainer>{children}</LayoutContainer>
          </main>
        </LayoutSection>
      </Layout>
    </body>
  );
};
