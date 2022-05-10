import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './PageHeader.module.css';
import Heading from '../Heading';

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
  headingSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
 * Primary UI component for user interaction
 */
export const PageHeader = ({
  align,
  className,
  description,
  kicker,
  title,
  titleAfter,
  right,
  headingSize = 'h1',
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['page-header'],
    className,
    align === 'center' && styles['page-header--center'],
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
