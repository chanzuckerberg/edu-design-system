import clsx from 'clsx';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import svg4everybody from 'svg4everybody';
import styles from './Icon.module.css';
import icons from '../../icons/spritemap/spritemap.svg';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Declares whether the icon is focusable or not for accessibility
   */
  focusable?: boolean;
  /**
   * ID used so the svg can read the title of the SVG icon to the user when accessibility is needed
   */
  id?: any;
  /**
   * Name of icon to reference in icon sprite
   */
  name?: string;
  /**
   * Inverted variant for dark backgrounds
   */
  inverted?: boolean;
  /**
   * SVG title which serves as alt text for the SVG.
   */
  title?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Icon = ({
  className,
  name,
  focusable = false,
  id,
  inverted,
  title,
  ...other
}: Props) => {
  const [idVar, setId] = useState();

  useEffect(() => {
    setId(id || nanoid());
    svg4everybody(); //Required to get IE to render icon sprites
  }, [id]);

  const componentClassName = clsx(styles['icon'], className, {
    [styles['icon--inverted']]: inverted === true,
  });
  return (
    <svg
      aria-hidden={!title}
      aria-labelledby={title && idVar}
      className={componentClassName}
      focusable={focusable}
      role={title && 'img'}
      {...other}
    >
      {title && <title id={idVar}>{title}</title>}
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};
