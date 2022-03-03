import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Hero.module.css';
import { LayoutContainer } from '../LayoutContainer/LayoutContainer';

export interface Props {
  /**
   * Child node(s) that can be nested inside component. The Hero child nodes will appear below the hero title
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Hero image alt text
   */
  imgAlt: string;
  /**
   * Path to hero image
   */
  imgSrc: string;
  /**
   * Hero heading title text
   */
  title?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Hero: React.FC<Props> = ({
  children,
  className,
  imgAlt,
  imgSrc,
  title,
  ...other
}) => {
  const componentClassName = clsx(styles['hero'], className, {});
  return (
    <div className={componentClassName} {...other}>
      <img className={styles['hero__img']} src={imgSrc} alt={imgAlt} />
      <div className={styles['hero__inner']}>
        <LayoutContainer className={styles['hero__layout-container']}>
          <div className={styles['hero__body']}>{children}</div>
        </LayoutContainer>
      </div>
    </div>
  );
};
