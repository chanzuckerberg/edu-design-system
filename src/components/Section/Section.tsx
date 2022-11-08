import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './Section.module.css';
import type { HeadingElement, HeadingSize } from '../Heading';
import Heading from '../Heading';
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
   * Description that appears below the section title
   */
  description?: ReactNode;
  /**
   * overline appears above the section title
   */
  overline?: ReactNode;
  /**
   * "as" prop, passed to Heading Component
   */
  headingAs?: HeadingElement;
  /**
   * "size" prop, passed to Heading Component
   */
  headingSize?: HeadingSize;
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
 * `import {Section} from "@chanzuckerberg/eds";`
 *
 * Section component contains a section header and body.
 *
 * The Heading component requires a value for "size", so this headingAs prop is provided
 * a default value of "h2" to allow it to remain optional on Section component.
 */
export const Section = ({
  align,
  children,
  className,
  description,
  headingAs,
  headingSize = 'h2',
  overline,
  right,
  title,
  titleAfter,
  titleBefore,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['section'],
    align === 'center' && styles['section--center'],
    className,
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
            <div className={styles['section__title-inner']}>
              {overline && (
                <div className={styles['section__overline']}>{overline}</div>
              )}
              <Heading
                as={headingAs}
                className={styles['section__title']}
                size={headingSize}
              >
                {title}
                {titleAfter && (
                  <span className={styles['section__title-after']}>
                    {titleAfter}
                  </span>
                )}
              </Heading>
              {description && (
                <div className={styles['section__description']}>
                  {description}
                </div>
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
