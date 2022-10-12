import Tippy, {TippyProps} from '@tippyjs/react';
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
   * The element or ref to append the tooltip to.
   * Defaults to the body element.
   * 'parent' is suggested if used in a modal.
   */
  appendTo?: 'parent' | Element | ((ref: Element) => Element);
  /**
   * Behavior of the tooltip transition, defaults to an opacity "fade".
   * Animation guidelines are provided in https://atomiks.github.io/tippyjs/v5/animations/.
   * To disable animations, pass `duration={0}`.
   */
  animation?: string;
  /**
   * The trigger element the tooltip appears next to.
   */
  children?: React.ReactElement;
  /**
   * If the child being passed into the Tooltip via the `children` prop is not interactive (e.g. a disabled button or an icon).
   *
   * Please note that spacing and placement styling will need to be added to a wrapper around the Tooltip,
   * not on the child component inside the Tooltip, because there will be a wrapper around the child. Example:
   * <div className="spacing-goes-here"><Tooltip text="Tooltip text"><Button disabled>Button text</Button></Tooltip></div>
   */
  childNotInteractive?: boolean;
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
   * Duration of Tooltip animation, in milliseconds. Default is 200.
   */
  duration?: number;
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
} & TippyProps &
  React.HTMLAttributes<HTMLElement>;

// @tippyjs/react does not expose tippy.js types, have to extract via props and grab element type from array type
type Plugins = NonNullable<React.ComponentProps<typeof Tippy>['plugins']>;
type Plugin = Plugins[number];

/**
 * ```ts
 * import {Tooltip} from "@chanzuckerberg/eds";
 * ```
 *
 * A styled tooltip built on Tippy.js.
 *
 * https://atomiks.github.io/tippyjs/
 * https://github.com/atomiks/tippyjs-react
 *
 * Example usage:
 *
 * ```tsx
 * <Tooltip>
 *   <Button variant="primary">
 *     Tooltip trigger
 *   </Button>
 * </Tooltip>
 * ```
 */
export const Tooltip = ({
  variant = 'light',
  align = 'top',
  childNotInteractive,
  className,
  duration = 200,
  text,
  ...rest
}: TooltipProps) => {
  if (variant === 'dark' && process.env.NODE_ENV !== 'production') {
    console.warn(
      'The dark variant is deprecated and will be removed in an upcoming release. Please use the default light variant instead.',
    );
  }

  // Hides tooltip when escape key is pressed, following:
  // https://atomiks.github.io/tippyjs/v6/plugins/#hideonesc
  const hideOnEsc: Plugin = {
    name: 'hideOnEsc',
    defaultValue: true,
    fn: ({hide}) => {
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

  let children = rest.children;
  // Tippy only works on elements with a tabindex. If the child is disabled, we need to
  // wrap it in an element with a tabindex in order for it to work.
  if (childNotInteractive) {
    children = (
      <span
        data-testid="disabled-child-tooltip-wrapper"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        {rest.children}
      </span>
    );
  }

  return (
    <Tippy
      {...rest}
      className={clsx(
        styles['tooltip'],
        variant === 'light' && styles['tooltip--light'],
        variant === 'dark' && styles['tooltip--dark'],
        className,
      )}
      content={text}
      duration={duration}
      placement={align}
      plugins={[hideOnEsc]}
    >
      {children}
    </Tippy>
  );
};
