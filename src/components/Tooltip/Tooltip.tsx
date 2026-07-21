import type { TippyProps } from '@tippyjs/react';
import Tippy from '@tippyjs/react';
import clsx from 'clsx';
import * as React from 'react';
import type { HTMLAttributes } from 'react';

import { Text } from '../Text/Text';

import styles from './Tooltip.module.css';

export const defaultPopoverModifiers: TippyProps['popperOptions'] = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 12], // spaces the popover from the trigger element
      },
    },
    {
      name: 'preventOverflow',
      options: {
        mainAxis: false, // prevents popover from offsetting to prevent overflow. Turned off due to resulting misalignment of popover arrow.
      },
    },
    {
      name: 'computeStyles',
      options: {
        roundOffsets: false, // This is to prevent off-by-one rendering glitches, but may add some sub-pixel fuzziness
      },
    },
    {
      name: 'minWidth',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: ({ state }) => {
        state.styles.popper.minWidth = `${state.rects.reference.width}px`;
      },
      effect: ({ state }) => {
        state.elements.popper.style.minWidth = `${
          state.elements.reference.getBoundingClientRect().width
        }px`;
      },
    },
  ],
};

// Full list of Tippy props: https://atomiks.github.io/tippyjs/v6/all-props/
type TooltipProps = {
  // Component API
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
   * Whether the tooltip is always visible or always invisible.
   *
   * This is most often left undefined so the Tooltip component
   * controls if/when the bubble appears (on hover, click, focus, etc).
   */
  visible?: boolean;
  // Design API
  /**
   * Where the tooltip should be placed in relation to the element it's attached to.
   * See: https://atomiks.github.io/tippyjs/v6/all-props/#placement
   *
   * **Default is `"auto"`**.
   */
  placement?: Extract<
    TippyProps['placement'],
    'auto' | 'top' | 'right' | 'bottom' | 'left'
  >;
  /**
   * The content of the tooltip bubble.
   */
  text?: React.ReactNode;
  /**
   * The variant treatment for tooltips
   *
   * **Default is `"default"`**.
   */
  variant?: 'default' | 'inverse';
} & TippyProps &
  HTMLAttributes<HTMLElement>;

// @tippyjs/react does not expose tippy.js types, have to extract via props and grab element type from array type
type Plugins = NonNullable<React.ComponentProps<typeof Tippy>['plugins']>;
type Plugin = Plugins[number];

/**
 * ## Usage
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Standard | Brief text that appears on hover or focus, near a UI element. | Labeling icon-only buttons, explaining uncommon terms. |
 * | Interactive | Includes styled content such as links, formatting, or icons. | Short instructions, embedded documentation, "Learn more" links. |
 * | Disabled element | Visible even on elements that are not interactive. | Explaining why a button is disabled. |
 * | Contextual | Shows information specific to the user's current context or state. | Explaining dynamic UI states, custom user guidance. |
 *
 * ### Best Practices
 *
 * * Don't put tooltips on actions except for icon-only buttons.
 * * Don't style text inside a tooltip.
 * * When an icon's meaning is not immediately obvious or universally recognized, use a tooltip as a hint or clarification.
 * * Don't use tooltips to communicate critical information such as form errors; consider the Toast component instead.
 * * Tooltips aren't meant for a first-time user experience; consider a NUX to guide onboarding.
 * * Display one tooltip at a time.
 *
 * ## Interaction
 *
 * A tooltip is triggered by hovering over an element. The most common example of a trigger is an icon, but hovering over a text link can also trigger a tooltip.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Keep tooltips to 3 lines or less.
 * * Keep icon label tooltips to 2-3 words with no end punctuation.
 * * Use full sentences for definitions and instructive tooltips, with sentence case and end punctuation.
 * * Start instructional tooltips with a verb.
 *
 * ### Dont's
 *
 * * Don't use tooltips to communicate error messages or other critical information.
 * * Don't put essential task instructions in tooltips.
 * * Don't use tooltips to restate text that is already on the screen.
 * * Don't pair tooltips with disabled elements.
 *
 * ## Resources
 *
 * * https://atomiks.github.io/tippyjs/
 * * https://github.com/atomiks/tippyjs-react
 */
export const Tooltip = ({
  childNotInteractive,
  className,
  duration = 200,
  placement = 'auto',
  text, // TODO(next-major): change prop name to `content`
  variant = 'default',
  ...rest
}: TooltipProps) => {
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

  const textContent =
    typeof text === 'string' ? (
      <Text as="span" data-testid="tooltip-content" preset="body-sm">
        {text}
      </Text>
    ) : (
      text
    );

  const tooltipClassNames = clsx(
    styles['tooltip'],
    variant && styles[`tooltip--variant-${variant}`],
    className,
  );

  return (
    <Tippy
      className={tooltipClassNames}
      content={textContent}
      duration={duration}
      placement={placement}
      plugins={[hideOnEsc]}
      popperOptions={defaultPopoverModifiers}
      {...rest}
    >
      {children}
    </Tippy>
  );
};

Tooltip.displayName = 'Tooltip';
