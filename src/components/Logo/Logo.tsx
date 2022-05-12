import clsx from 'clsx';
import React from 'react';
import styles from './Logo.module.css';
import LogoImage from '../LogoImage';

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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * Branding image or text of the site.
 */
export const Logo = ({ alt, className, href, src, title, ...other }: Props) => {
  const componentClassName = clsx(styles['logo'], className, {});
  return (
    <div className={componentClassName} {...other}>
      <a className={styles['logo__link']} href={href} rel="home" title={title}>
        <LogoImage alt={alt} src={src} />
      </a>
    </div>
  );
};
