import clsx from 'clsx';
import React from 'react';

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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {LogoImage} from "@chanzuckerberg/eds";
 * ```
 *
 * Logo image svg to be used inside the Logo component.
 */
export const LogoImage = ({
  className,
  alt = 'logo placeholder',
  src = 'https://assets.codepen.io/598/summit-learning-logo.svg',
  ...other
}: Props) => {
  const componentClassName = clsx('logo__img', className, {});
  return <img alt={alt} className={componentClassName} src={src} {...other} />;
};
