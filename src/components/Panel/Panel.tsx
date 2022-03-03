import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Panel.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Alignment variations for the panel
   * - **center** horizontally and vertically aligns the content
   */
  align?: 'center';
}

/**
 * Primary UI component for user interaction
 */
export const Panel: React.FC<Props> = ({
  className,
  children,
  align,
  ...other
}) => {
  const componentClassName = clsx(styles['panel'], className, {
    [styles['panel--align-center']]: align === 'center',
  });

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
