import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Section.module.css';

export interface Props {
  /**
   * Align variations:
   * - **center** yields a center-aligned section header
   */
  align?: 'center';
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Description text string that appears below the section title
   */
  description?: string;
  /**
   * Section heading text string
   */
  title?: string;
  /**
   * Section title before container to place items like images or avatars
   */
  titleBefore?: ReactNode;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * TODO: update this comment with a description of the component.
 */
export const Section = ({
  className,
  title,
  description,
  children,
  align,
  titleBefore,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['section'],
    className,
    align === 'center' && styles['section--center'],
  );

  return (
    <section className={componentClassName} {...other}>
      <div className={styles['section__inner']}>
        <header className={styles['section__header']}>
          <div className={styles['section__header-inner']}>
            {titleBefore && (
              <div className={styles['section__title-before']}>
                {titleBefore}
              </div>
            )}
            <h2 className={styles['section__title']}>{title}</h2>
          </div>
          {description && (
            <p className={styles['section__description']}>{description}</p>
          )}
        </header>
        <div className={styles['section__body']}>{children}</div>
      </div>
    </section>
  );
};
