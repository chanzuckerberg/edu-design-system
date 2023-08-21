import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import type { HeadingSize, HeadingElement } from '../Heading';
import Heading from '../Heading';
import styles from './PageHeader.module.css';

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
   * overline appears above the title
   */
  overline?: ReactNode;
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
    | 'inherit'
    | 'neutral-subtle'
    | 'neutral-medium'
    | 'neutral-strong'
    | 'brand'
    | 'success'
    | 'warning'
    | 'error'
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
 * `import {PageHeader} from "@chanzuckerberg/eds";`
 *
 * Header to be used at the top of a page.
 * @deprecated
 */
export const PageHeader = ({
  align,
  as = 'h1',
  className,
  description,
  headingSize = 'headline-lg',
  headingVariant = 'neutral-strong',
  overline,
  orientation,
  right,
  title,
  titleAfter,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['page-header'],
    align === 'center' && styles['page-header--center'],
    orientation === '2up' && styles['page-header--2up'],
    className,
  );

  return (
    <header className={componentClassName} {...other}>
      <div className={styles['page-header__left']}>
        {overline}
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
