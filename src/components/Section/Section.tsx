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
   * Kicker appears above the section title
   */
  kicker?: string;
  /**
   * Right slot - an area to put right-aligned content after section title
   */
  right?: ReactNode;
  /**
   * Section heading text string
   */
  title?: string;
  /**
   * Slot for node to appear to the right of the section title. Typically used to include a Badge, Button, Tooltip, or other component
   */
  titleAfter?: ReactNode;
  /**
   * Slot for node to appear to the left of the section title. Typically used for images or avatars
   */
  titleBefore?: ReactNode;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Section} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const Section = ({
  align,
  children,
  className,
  description,
  kicker,
  right,
  title,
  titleAfter,
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
        {/* <header className={styles['section__header']}>
          {kicker && <p className={styles['section__kicker']}>{kicker}</p>}
          <div className={styles['section__header-inner']}>
            {titleBefore && (
              <div className={styles['section__title-before']}>
                {titleBefore}
              </div>
            )}
            <h2 className={styles['section__title']}>
              {title}
              {titleAfter && (
                <div className={styles['section__title-after']}>
                  {titleAfter}
                </div>
              )}
            </h2>

            {right && <div className={styles['section__right']}>{right}</div>}
          </div>
          {description && (
            <p className={styles['section__description']}>{description}</p>
          )}
        </header> */}
        <header className={styles['section__header']}>
          <div className={styles['section__header-inner']}>
            {titleBefore && (
              <div className={styles['section__title-before']}>
                {titleBefore}
              </div>
            )}
            <div className={styles['section__title-inner']}>
              {kicker && <p className={styles['section__kicker']}>{kicker}</p>}
              <div className={styles['section__title']}>
                {title}
                {titleAfter && (
                  <div className={styles['section__title-after']}>
                    {titleAfter}
                  </div>
                )}
              </div>
              {description && (
                <p className={styles['section__description']}>{description}</p>
              )}
            </div>
          </div>
          {right && <div className={styles['section__right']}>{right}</div>}
        </header>
        <div className={styles['section__body']}>{children}</div>
      </div>
    </section>
  );
};
