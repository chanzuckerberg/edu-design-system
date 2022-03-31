import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './MediaBlock.module.css';

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
   * Hero image alt text
   */
  imgAlt: string;
  /**
   * Path to hero image
   */
  imgSrc: string;
  /**
   * Available _stylistic_ variations available for the component
   */
  variant?: 'reversed';
}

/**
 * Primary UI component for user interaction
 */
export const MediaBlock = ({
  children,
  className,
  imgSrc,
  imgAlt,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['media-block'],
    className,
    variant === 'reversed' && styles['media-block--reversed'],
  );
  return (
    <div className={componentClassName} {...other}>
      <div className={styles['media-block__body']}>{children}</div>
      <div className={styles['media-block__media']}>
        <img
          className={styles['media-block__image']}
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
    </div>
  );
};
