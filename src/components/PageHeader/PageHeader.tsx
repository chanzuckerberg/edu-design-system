import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './PageHeader.module.css';
import Heading, { HeadingSize, HeadingElement } from '../Heading';

export interface Props {
  /**
   * Align variations:
   * - **center** yields a PageHeader whose contents are centered
   */
  align?: 'center';
  /**
   * This prop can be used to specify which size heading should
   * actually be rendered, in the case that you want to render an element
   * as one heading but style it as if it were another. If both an `as` prop
   * and a `size` prop are passed, the `as` will be used to determine the element
   * and the `size` will be used to determine the styling.
   */
  as?: HeadingElement;
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
  kicker?: ReactNode;
  /**
   * Right slot - an area to put right-aligned content in the right column
   */
  right?: ReactNode;
  /**
   * Size property
   */
  headingSize?: HeadingSize;
  /**
   * Size property
   */
  headingVariant?:
    | 'error'
    | 'base'
    | 'brand'
    | 'inherit'
    | 'neutral'
    | 'success'
    | 'warning'
    | 'white';
  /**
   * Controls the layout of the PageHeader, specifically the placement of the left and right slots.
   */
  orientation?: '2up';
  /**
   * Page heading title text
   */
  title?: string;
  /**
   * Slot for node to appear to the right of the page title. Typically used to include a Badge, Button, or other component
   */
  titleAfter?: ReactNode;
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
  as = 'h1',
  className,
  description,
  headingSize = 'headline-lg',
  headingVariant = 'base',
  kicker,
  orientation,
  right,
  title,
  titleAfter,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['page-header'],
    className,
    align === 'center' && styles['page-header--center'],
    orientation === '2up' && styles['page-header--2up'],
  );

  return (
    <header className={componentClassName} {...other}>
      <div className={styles['page-header__left']}>
        {kicker && (
          <div className={styles['page-header__kicker']}>{kicker}</div>
        )}
        <Heading
          as={as}
          className={styles['page-header__title']}
          size={headingSize}
          variant={headingVariant}
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
