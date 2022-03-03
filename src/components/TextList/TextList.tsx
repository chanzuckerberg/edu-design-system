import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './TextList.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Size variant:
   * - **sm** yields a TextList with smaller typography
   */
  size?: 'sm';
  /**
   * The as name for the list element, defaults to use ul
   */
  as?: string;
  /**
   * Theme variant:
   * - **inverted** yields a TextList with lighter typography for darker backgrounds
   */
  inverted?: boolean;
  /**
   * Style variant:
   * - **inline** yields a TextList that places items side by side
   */
  variant?: 'inline';
}

/**
 * Primary UI component for user interaction
 */
export const TextList: React.FC<Props> = ({
  children,
  className,
  size,
  as,
  inverted,
  variant,
  ...other
}) => {
  const componentClassName = clsx(styles['text-list'], className, {
    [styles['text-list--sm']]: size === 'sm',
    [styles['text-list--inline']]: variant === 'inline',
    [styles['text-list--inverted']]: inverted === true,
    [styles['text-list--ol']]: as === 'ol',
  });
  if (as === 'ol') {
    return (
      <ol className={componentClassName} {...other}>
        {children}
      </ol>
    );
  } else {
    return (
      <ul className={componentClassName} {...other}>
        {children}
      </ul>
    );
  }
};
