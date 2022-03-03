import React from 'react';
import clsx from 'clsx';

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
   * Source of the image used for the logo
   */
  src?: string;
}

/**
 * Primary UI component for user interaction
 */
export const LogoImage: React.FC<Props> = ({
  className,
  alt = 'logo placeholder',
  src = 'https://assets.codepen.io/598/summit-learning-logo.svg',
  ...other
}) => {
  const componentClassName = clsx('logo__img', className, {});
  return <img className={componentClassName} src={src} alt={alt} {...other} />;
};
