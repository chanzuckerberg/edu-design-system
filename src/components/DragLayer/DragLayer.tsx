import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../DragDrop/DragDrop.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DragLayer = ({ className, children }: Props) => {
  const componentClassName = clsx(styles['drag-layer'], className, {});
  return <div className={componentClassName}>{children}</div>;
};
