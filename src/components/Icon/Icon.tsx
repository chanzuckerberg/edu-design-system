import clsx from 'clsx';
import type { ReactNode, CSSProperties } from 'react';
import React, { useEffect } from 'react';
import svg4everybody from 'svg4everybody';
import styles from './Icon.module.css';
import icons, { type IconName } from '../../icons/spritemap';

export type { IconName } from '../../icons/spritemap';

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
  children?: ReactNode;
  /**
   * The SVG Color, expects a valid css color (hex, rgb, etc.).
   *
   * Recommendation: if `currentColor` isn't sufficient,
   * use `EdsThemeColor` tokens from
   * `@chanzuckerberg/eds/lib/tokens/colors.ts`
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
   * Name of icon to reference in icon sprite
   */
  name?: IconName;
  /**
   * Width/Height string (px, rem, em, vh, etc.)
   * Generally prefer using "em" as it sizes to its parent container.
   */
  size?: string;
  /**
   * viewBox for the svg, used when the svg information is passed via children.
   */
  viewBox?: string;
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

interface SvgStyle extends CSSProperties {
  '--icon-size'?: string;
}

/**
 * `import {Icon} from "@chanzuckerberg/eds";`
 *
 * Render arbitrary SVG path data while enforcing good accessibility practices.
 *
 * If you're looking for specific icon files, look in the `src/icons` directory.
 *
 * Example usage:
 *
 * ```
 * <Icon name="arrow-foward" purpose="informative" title="go forward" />
 * ```
 */
export const Icon = (props: IconProps) => {
  const {
    children,
    className,
    color = 'currentColor',
    name,
    fullWidth = false,
    id,
    purpose,
    size,
    viewBox,
  } = props;

  useEffect(() => {
    svg4everybody(); // Required to get IE to render icon sprites
  }, []);

  const componentClassName = clsx(
    styles['icon'],
    fullWidth && styles['icon--full-width'],
    className,
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
    viewBox: name ? icons[name].viewBox : viewBox,
  };

  // allow passing custom SVGs to render, otherwise
  // load from the spritemap of EDS icons
  const computedSvg = name ? icons[name].content : children;

  if (purpose === 'informative') {
    return (
      <svg {...svgCommonProps} role="img">
        <title id={id}>{props.title}</title>
        {computedSvg}
      </svg>
    );
  } else {
    return (
      <svg {...svgCommonProps} aria-hidden>
        {computedSvg}
      </svg>
    );
  }
};
