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
export const Footer: React.FC<Props> = ({ children, className, ...other }) => {
  const componentClassName = clsx(styles['footer'], className, {});
  return (
    <footer role="contentinfo" className={componentClassName} {...other}>
      <LayoutContainer className={styles['footer__inner']}>
        {children}
      </LayoutContainer>
    </footer>
  );
};
