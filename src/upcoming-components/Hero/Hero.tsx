import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Hero.module.css';
import LayoutContainer from '../../components/LayoutContainer';

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
 *
 * TEST CHANGE
 */
export const Hero = ({
  children,
  className,
  imgAlt,
  imgSrc,
  title,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['hero'], className, {});
  return (
    <div className={componentClassName} {...other}>
      <img alt={imgAlt} className={styles['hero__img']} src={imgSrc} />
      <div className={styles['hero__inner']}>
        <LayoutContainer className={styles['hero__layout-container']}>
          <div className={styles['hero__body']}>{children}</div>
        </LayoutContainer>
      </div>
    </div>
  );
};
