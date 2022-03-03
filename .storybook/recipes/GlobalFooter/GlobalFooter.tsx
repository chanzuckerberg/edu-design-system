import clsx from 'clsx';
import React from 'react';
import styles from './GlobalFooter.module.css';
import { Footer } from '../../../src/components/Footer/Footer';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const GlobalFooter: React.FC<Props> = ({ className, ...other }) => {
  const componentClassName = clsx('c-global-footer', className, {});
  return <Footer className={componentClassName} {...other}></Footer>;
};
