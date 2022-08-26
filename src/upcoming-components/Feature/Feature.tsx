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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Feature} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const Feature = ({
  className,
  children,
  imgSrc,
  imgAlt,
  title,
  inverted,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['feature'],
    inverted && styles['feature--inverted'],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      <div className={styles['feature__body']}>{children}</div>
      {imgAlt && (
        <div className={styles['feature__media']}>
          <img alt={imgAlt} className={styles['feature__img']} src={imgSrc} />
        </div>
      )}
    </div>
  );
};
