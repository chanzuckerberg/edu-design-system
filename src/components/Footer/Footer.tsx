import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Footer.module.css';
import LayoutContainer from '../LayoutContainer';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
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
export const Footer = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['footer'], className, {});
  return (
    <footer className={componentClassName} role="contentinfo" {...other}>
      <LayoutContainer className={styles['footer__inner']}>
        {children}
      </LayoutContainer>
    </footer>
  );
};
