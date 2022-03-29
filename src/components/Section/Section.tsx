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
   * Section tile before container to place items like images or avatars
   */
  titleBefore?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Section: React.FC<Props> = ({
  className,
  title,
  description,
  children,
  align,
  titleBefore,
  ...other
}) => {
  const componentClassName = clsx(styles['section'], className, {
    [styles['section--center']]: align === 'center',
  });

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
