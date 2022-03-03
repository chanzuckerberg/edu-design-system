import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Feature.module.css';

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
   * Alt text for feature image
   */
  imgAlt?: string;
  /**
   * Path to image file
   */
  imgSrc?: string;
  /**
   * Color theme for the component. "inverted" theme is for use on dark backgrounds
   */
  inverted?: boolean;
  /**
   * Title heading text string
   */
  title?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Feature: React.FC<Props> = ({
  className,
  children,
  imgSrc,
  imgAlt,
  title,
  inverted,
  ...other
}) => {
  const componentClassName = clsx(styles['feature'], className, {
    [styles['feature--inverted']]: inverted === true,
  });
  return (
    <div className={componentClassName} {...other}>
      <div className={styles['feature__body']}>{children}</div>
      {imgAlt && (
        <div className={styles['feature__media']}>
          <img className={styles['feature__img']} src={imgSrc} alt={imgAlt} />
        </div>
      )}
    </div>
  );
};
