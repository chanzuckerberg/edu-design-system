import React, {ReactNode} from 'react';
import styles from './Logo.module.css';

export interface Props {
  /**
   * Required string of text used to explain what the logo is or where it goes
   */
  'aria-label'?: string;
  /**
   * Alt text used for the image of the logo
   */
  alt?: string;
  /**
   * Logo image that can be nested within at the application level, normally an inline SVG or `<img>` tag.
   */
  children?: ReactNode;
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
}

/**
 * ```ts
 * import {Logo} from "@chanzuckerberg/eds";
 * ```
 *
 * Branding image or text of the site.
 */
export const Logo = ({
  alt,
  'aria-label': ariaLabel,
  className,
  children,
  href,
  src,
  ...other
}: Props) => {
  return (
    <div className={className} {...other}>
      <a
        aria-label={ariaLabel}
        className={styles['logo__link']}
        href={href}
        rel="home"
        title={ariaLabel}
      >
        {children}
      </a>
    </div>
  );
};
