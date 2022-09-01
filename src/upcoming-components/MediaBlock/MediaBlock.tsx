import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './MediaBlock.module.css';

export interface Props {
  /* Child node(s) that can be nested inside component */
  children: ReactNode;
  /* CSS class names that can be appended to the component. */
  className?: string;
  /* Hero image alt text */
  imgAlt: string;
  /* Path to hero image */
  imgSrc: string;
  /* Available _stylistic_ variations available for the component */
  variant?: 'reversed';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {MediaBlock} from "@chanzuckerberg/eds";
 * ```
 *
 * Component presents the layout container for the hero image and the media, along with body content.
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
    variant === 'reversed' && styles['media-block--reversed'],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      <div className={styles['media-block__body']}>{children}</div>
      <div className={styles['media-block__media']}>
        <img alt={imgAlt} className={styles['media-block__img']} src={imgSrc} />
      </div>
    </div>
  );
};
