import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Feature.module.css';

export interface Props {
  children?: ReactNode /* Child node(s) that can be nested inside component */;
  className?: string /* CSS class names that can be appended to the component. */;
  imgAlt?: string /* Alt text for feature image */;
  imgSrc?: string /* Path to image file */;
  inverted?: boolean /* Color theme for the component. "inverted" theme is for use on dark backgrounds */;
  title?: string /* Title heading text string */;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Feature} from "@chanzuckerberg/eds";
 * ```
 *
 * Component that presents the feature image with additional styling passed in.
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
