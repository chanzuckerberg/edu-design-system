import clsx from 'clsx';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import svg4everybody from 'svg4everybody';
import styles from './Icon.module.css';
import icons from '../../icons/spritemap/spritemap.svg';

interface IconPropsBase {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Either a fragment of svg elements (g, path, circle, etc.), or a single
   * svg element. Useful for creating specific icon components.
   *
   * @example
   * function CircleIcon(props: IconProps) {
   *   return (
   *     <Icon {...props}>
   *       <circle cx="50" cy="50" r="50" />
   *     </Icon>
   *   )
   * }
   */
  children?: React.ReactNode;
  /**
   * The SVG Color, expects a valid css color (hex, rgb, etc.).
   * Recommendation: if `currentColor` isn't sufficient, use color tokens from
   * @chanzuckerberg/eds/lib/tokens/colors.ts
   */
  color?: string;
  /**
   * If true, the element will be displayed as a block, otherwise
   * default is inline like images
   */
  fullWidth?: boolean;
  /**
   * ID used so the svg can read the title of the SVG icon to the user when accessibility is needed
   */
  id?: string;
  /**
   * Inverted variant for dark backgrounds
   *
   * TODO: investigate if needed
   */
  inverted?: boolean;
  /**
   * Name of icon to reference in icon sprite
   *
   * TODO: add typing of possible icon names
   */
  name?: string;
  /**
   * Width/Height string (px, rem, em, vh, etc.)
   * Recommendation: use "EdsFontSize" tokens from
   * @chanzuckerberg/eds/lib/tokens/variables.json
   */
  size?: string;
}

interface InformativeIconProps extends IconPropsBase {
  /**
   * The role of the icon.
   *
   * Use "informative" when the icon **_does_** provide additional meaning to other text on the
   * page. You'll be required to pass in a title to label the icon.
   */
  purpose: 'informative';
  title: string;
}

interface DecorativeIconProps extends IconPropsBase {
  /**
   * The role of the icon.
   *
   * Use "decorative" when the icon **_does not_** provide any additional context or meaning to
   * associated text. Basically the icon is for show and people don't need it to understand what's
   * on the page.
   */
  purpose: 'decorative';
}

export type IconProps = DecorativeIconProps | InformativeIconProps;

interface SvgStyle extends React.CSSProperties {
  '--icon-size'?: string;
}

/**
 * Render arbitrary SVG path data while enforcing good accessibility practices.
 *
 * If you're looking for specific icon files, look in the `src/icons` directory.
 */
export const Icon = (props: IconProps) => {
  const {
    children,
    className,
    color = 'currentColor',
    name,
    fullWidth = false,
    id,
    inverted,
    purpose,
    size,
  } = props;
  const [idVar, setId] = useState('');

  useEffect(() => {
    setId(id || nanoid());
    svg4everybody(); // Required to get IE to render icon sprites
  }, [id]);

  const componentClassName = clsx(
    styles['icon'],
    className,
    inverted && styles['icon--inverted'],
    fullWidth && styles['icon--full-width'],
  );
  const style: SvgStyle = {
    '--icon-size': size,
  };

  const svgCommonProps = {
    className: componentClassName,
    fill: color,
    height: size,
    /**
     * height/width html properties are overriden by the defaults applied in CSS module
     */
    style,
    width: size,
    xmlns: 'http://www.w3.org/2000/svg',
  };
  // allow passing custom SVGs to render, otherwise
  // load from the spritemap of EDS icons
  const svgToUse = children || <use xlinkHref={`${icons}#${name}`} />;

  if (purpose === 'informative') {
    return (
      <svg {...svgCommonProps} role="img">
        <title id={idVar}>{props.title}</title>
        {svgToUse}
      </svg>
    );
  } else {
    return (
      <svg {...svgCommonProps} aria-hidden>
        {svgToUse}
      </svg>
    );
  }
};
