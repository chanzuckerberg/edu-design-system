import clsx from 'clsx';
import type { ReactNode, CSSProperties } from 'react';
import React from 'react';
import icons, { type IconName } from '../../icons/spritemap';
import styles from './Icon.module.css';

export type { IconName } from '../../icons/spritemap';

type IconPropsBase = {
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
   * The SVG Color, expects a valid css color (hex, rgb, css variable, etc.).
   *
   */
  color?: string;
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
   * To match included icons, recommend view box of `"0 0 24 24"`
   */
  viewBox?: string;
};

type InformativeIconProps = IconPropsBase & {
  /**
   * The role of the icon.
   *
   * Use "informative" when the icon **_does_** provide additional meaning to other text on the
   * page. You'll be required to pass in a title to label the icon.
   */
  purpose: 'informative';
  title: string;
};

type DecorativeIconProps = IconPropsBase & {
  /**
   * The role of the icon.
   *
   * Use "decorative" when the icon **_does not_** provide any additional context or meaning to
   * associated text. Basically the icon is for show and people don't need it to understand what's
   * on the page.
   */
  purpose: 'decorative';
};

export type IconProps = DecorativeIconProps | InformativeIconProps;

type SvgStyle = CSSProperties & {
  '--icon-size'?: string;
};

/**
 * ## Usage
 *
 * Small illustrations to highlight and emphasize text and screen elements with visual detail.
 * Icons align with adjacent text, and will inherit the text's color. Icons can also be embedded
 * in other components.
 *
 * Icons come from a spritemap in `src/icons`; pick one with `name`. To render your own SVG
 * instead, pass the path data as `children` along with a `viewBox`.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Informative | `purpose="informative"` renders `role="img"` and requires a `title`, so the icon is announced. | A status icon that is the only thing conveying the status. |
 * | Decorative | `purpose="decorative"` renders `aria-hidden`, so assistive tech skips the icon entirely. | A plus icon next to the word "Add". |
 *
 * `color` defaults to `currentColor` so the icon picks up the surrounding text color. Prefer `em`
 * for `size` so the icon scales with the text it sits beside.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use `Icon` to add clarity and character to any buttons, especially those which are closely associated with user actions (e.g., an "add" button may use a plus icon).
 * * Use decorative icons when paired with adjacent, descriptive text.
 *
 * ### Don'ts
 *
 * * Never use decorative `Icon` elements in isolation. Icons must have an associated accessible purpose, so when the icon is the only thing carrying the meaning, use `purpose="informative"` and give it a `title`.
 *
 * ## Resources
 *
 * * https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Rounded
 */
export const Icon = (props: IconProps) => {
  const {
    children,
    className,
    color = 'currentColor',
    name,
    id,
    purpose,
    size,
    viewBox,
  } = props;

  const componentClassName = clsx(styles['icon'], className);
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

Icon.displayName = 'Icon';
