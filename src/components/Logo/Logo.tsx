import clsx from 'clsx';
import React from 'react';
import styles from './Logo.module.css';
import { LogoImage } from '../LogoImage/LogoImage';

export interface Props {
  /**
   * Alt text used for the image of the logo
   */
  alt?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Logo link URL
   */
  href?: string;
  /**
   * Source of the image used for the logo
   */
  src?: string;
  /**
   * Title for the logo link
   */
  title?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Logo: React.FC<Props> = ({
  alt,
  className,
  href,
  src,
  title,
  ...other
}) => {
  const componentClassName = clsx(styles['logo'], className, {});
  return (
    <div className={componentClassName} {...other}>
      <a href={href} title={title} className={styles['logo__link']} rel="home">
        <LogoImage src={src} alt={alt} />
      </a>
    </div>
  );
};
