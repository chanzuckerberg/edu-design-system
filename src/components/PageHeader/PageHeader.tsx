import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './PageHeader.module.css';
import Heading, { HeadingSize } from '../Heading';

export interface Props {
  /**
   * Align variations:
   * - **center** yields a PageHeader whose contents are centered
   */
  align?: 'center';
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Description text that appears directly below the main title
   */
  description?: string | ReactNode;
  /**
   * Kicker appears above the title
   */
  kicker?: string;
  /**
   * Right slot - an area to put right-aligned content in the right column
   */
  right?: ReactNode;
  /**
   * Size property
   */
  headingSize?: HeadingSize;
  /**
   * Page heading title text
   */
  title?: string;
  /**
   * Slot for node to appear to the right of the page title. Typically used to include a Badge, Button, or other component
   */
  titleAfter?: ReactNode;
  variant?: '50-50';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {PageHeader} from "@chanzuckerberg/eds";
 * ```
 *
 * Header to be used at the top of a page.
 */
export const PageHeader = ({
  align,
  className,
  description,
  headingSize = 'headline-lg',
  kicker,
  right,
  title,
  titleAfter,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['page-header'],
    className,
    align === 'center' && styles['page-header--center'],
    variant === '50-50' && styles['page-header--50-50'],
  );

  return (
    <header className={componentClassName} {...other}>
      <div className={styles['page-header__left']}>
        {kicker && <p className={styles['page-header__kicker']}>{kicker}</p>}
        <Heading
          as="h1"
          className={styles['page-header__title']}
          size={headingSize}
        >
          {title}
          {titleAfter && (
            <div className={styles['page-header__title-after']}>
              {titleAfter}
            </div>
          )}
        </Heading>

        {description && (
          <div className={styles['page-header__description']}>
            {description}
          </div>
        )}
      </div>

      {right && <div className={styles['page-header__right']}>{right}</div>}
    </header>
  );
};
