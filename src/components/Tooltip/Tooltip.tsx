import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import * as React from 'react';
import styles from './Tooltip.module.css';

// Full list of Tippy props: https://atomiks.github.io/tippyjs/v6/all-props/
type TooltipProps = {
  /**
   * Where the tooltip should be placed in relation to the element it's attached to.
   *
   * Tippy also supports 'top-start', 'top-end', 'right-start', 'right-end', etc,
   * but our CSS currently only supports the 4 main sides.
   */
  align?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * Behavior of the tooltip transition, defaults to an opacity "fade".
   * Animation guidelines are provided in https://atomiks.github.io/tippyjs/v5/animations/.
   * A false value will disable animations.
   */
  animation?: string | boolean;
  /**
   * The trigger element the tooltip appears next to.
   */
  children?: React.ReactElement;
  /**
   * Custom classname for additional styles.
   *
   * These styles will only affect the tooltip bubble.
   */
  className?: string;
  /**
   * How long to delay the Tooltip showing and hiding, in milliseconds.
   *
   * If a single number is provided, it will be applied to showing and hiding.
   * If an array with 2 numbers is provided, the first will apply to showing and
   * the second will be applied to hiding.
   * https://atomiks.github.io/tippyjs/v6/all-props/#delay
   */
  delay?: number | [number | null, number | null];
  /**
   * The trigger element the tooltip appears next to.
   *
   * Use this instead of `children` if the trigger element is being
   * stored in a ref. Most cases will use `children` and not
   * `reference`.
   */
  reference?: React.RefObject<Element> | Element;
  /**
   * The content of the tooltip bubble.
   */
  text?: React.ReactNode;
  /**
   * Whether the tooltip has a light or dark background.
   */
  variant?:
    | 'light'
    /** @deprecated */
    | 'dark';
  /**
   * Whether the tooltip is always visible or always invisible.
   *
   * This is most often left undefined so the Tooltip component
   * controls if/when the bubble appears (on hover, click, focus, etc).
   */
  visible?: boolean;
};

// @tippyjs/react does not expose tippy.js types, have to extract via props and grab element type from array type
type Plugins = NonNullable<React.ComponentProps<typeof Tippy>['plugins']>;
type Plugin = Plugins[number];

/**
 * ```ts
 * import {Tooltip} from "@chanzuckerberg/eds-components";
 * ```
 *
 * A styled tooltip built on Tippy.js.
 *
 * https://atomiks.github.io/tippyjs/
 * https://github.com/atomiks/tippyjs-react
 */
export const Tooltip = ({
  variant = 'light',
  align = 'top',
  className,
  text,
  ...rest
}: TooltipProps) => {
  if (variant === 'dark' && process.env.NODE_ENV !== 'production') {
    console.warn('Dark variant is deprecated.');
  }
  // Hides tooltip when escape key is pressed, following:
  // https://atomiks.github.io/tippyjs/v6/plugins/#hideonesc
  const hideOnEsc: Plugin = {
    name: 'hideOnEsc',
    defaultValue: true,
    fn: ({ hide }) => {
      function onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
          hide();
        }
      }
      return {
        onShow() {
          document.addEventListener('keydown', onKeyDown);
        },
        onHide() {
          document.removeEventListener('keydown', onKeyDown);
        },
      };
    },
  };
  return (
    <Tippy
      {...rest}
      className={clsx(
        styles['tooltip'],
        className,
        variant === 'light' && styles['tooltip--light'],
        variant === 'dark' && styles['tooltip--dark'],
      )}
      content={text}
      duration={200}
      placement={align}
      plugins={[hideOnEsc]}
    />
  );
};
