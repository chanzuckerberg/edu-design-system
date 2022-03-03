import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './PageHeader.module.css';

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
export const PageHeader: React.FC<Props> = ({
  align,
  className,
  description,
  kicker,
  title,
  titleAfter,
  right,
  ...other
}) => {
  const componentClassName = clsx(styles['page-header'], className, {
    [styles['page-header--center']]: align === 'center',
  });

  return (
    <div className={componentClassName} {...other}>
      <div className={styles['page-header__left']}>
        {kicker && <p className={styles['page-header__kicker']}>{kicker}</p>}
        <h1 className={styles['page-header__title']}>
          {title}
          {titleAfter && (
            <div className={styles['page-header__title-after']}>
              {titleAfter}
            </div>
          )}
        </h1>

        {description && (
          <div className={styles['page-header__description']}>
            {description}
          </div>
        )}
      </div>

      {right && <div className={styles['page-header__right']}>{right}</div>}
    </div>
  );
};
