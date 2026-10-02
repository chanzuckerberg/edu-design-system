import {
  arrow as arrowMiddleware,
  autoPlacement,
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  safePolygon,
  size,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
  useTransitionStatus,
} from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';
import type { HTMLAttributes, RefObject } from 'react';

import { Text } from '../Text/Text';

import styles from './Tooltip.module.css';

/**
 * Space between the trigger and the tooltip bubble, in pixels.
 */
const TOOLTIP_OFFSET = 12;

/**
 * How close the arrow may get to the bubble's corners, in pixels.
 */
const ARROW_PADDING = 3;

type TooltipProps = {
  // Component API
  /**
   * The element or ref to append the tooltip to.
   * Defaults to the body element, or to the trigger's parent when `interactive` is set.
   * 'parent' is suggested if used in a modal.
   */
  appendTo?: 'parent' | Element | ((ref: Element) => Element);
  /**
   * Behavior of the tooltip transition, defaults to an opacity "fade".
   * The value is set on the bubble as `data-animation`, for custom transitions to target.
   * To disable animations, pass `animation={false}` or `duration={0}`.
   */
  animation?: string | boolean;
  /**
   * Whether to show the arrow pointing at the trigger.
   *
   * **Default is `true`**.
   */
  arrow?: boolean;
  /**
   * The trigger element the tooltip appears next to.
   */
  children?: React.ReactElement;
  /**
   * If the child being passed into the Tooltip via the `children` prop is not interactive (e.g. a disabled button or an icon).
   *
   * Please note that spacing and placement styling will need to be added to a wrapper around the Tooltip,
   * not on the child component inside the Tooltip, because there will be a wrapper around the child. Example:
   * <div className="spacing-goes-here"><Tooltip content="Tooltip text"><Button disabled>Button text</Button></Tooltip></div>
   */
  childNotInteractive?: boolean;
  /**
   * Custom classname for additional styles.
   *
   * These styles will only affect the tooltip bubble.
   */
  className?: string;
  /**
   * How long to delay the Tooltip showing and hiding on hover, in milliseconds.
   *
   * If a single number is provided, it will be applied to showing and hiding.
   * If an array with 2 numbers is provided, the first will apply to showing and
   * the second will be applied to hiding. `null` uses no delay.
   */
  delay?: number | [number | null, number | null];
  /**
   * Prevents the tooltip from showing.
   */
  disabled?: boolean;
  /**
   * Duration of Tooltip animation, in milliseconds. Default is 200.
   */
  duration?: number;
  /**
   * Whether the tooltip hides when clicking the trigger or outside of the tooltip.
   * `'toggle'` only hides it by clicking the trigger again, and needs `trigger` to include `'click'`.
   *
   * **Default is `true`**.
   */
  hideOnClick?: boolean | 'toggle';
  /**
   * Lets the pointer move from the trigger into the tooltip without it hiding,
   * so its content can be clicked or selected.
   */
  interactive?: boolean;
  /**
   * Maximum width of the tooltip bubble. Numbers are in pixels.
   *
   * **Default is `350`**.
   */
  maxWidth?: number | string;
  /**
   * Called when the tooltip hides.
   */
  onHide?: () => void;
  /**
   * Called when the tooltip shows.
   */
  onShow?: () => void;
  /**
   * The trigger element the tooltip appears next to.
   *
   * Use this instead of `children` if the trigger element is being
   * stored in a ref. Most cases will use `children` and not
   * `reference`.
   */
  reference?: RefObject<Element | null> | Element;
  /**
   * The events on the trigger that show the tooltip, separated by spaces.
   * Supports `'mouseenter'`, `'focus'` (or `'focusin'`), and `'click'`.
   *
   * **Default is `"mouseenter focus"`**.
   */
  trigger?: string;
  /**
   * Whether the tooltip is always visible or always invisible.
   *
   * This is most often left undefined so the Tooltip component
   * controls if/when the bubble appears (on hover, click, focus, etc).
   */
  visible?: boolean;
  /**
   * The z-index of the tooltip.
   *
   * **Default is `9999`**.
   */
  zIndex?: number;
  // Design API
  /**
   * Where the tooltip should be placed in relation to the element it's attached to.
   * If there isn't room on that side, it flips to the opposite side.
   * `"auto"` picks whichever side has the most space.
   *
   * **Default is `"auto"`**.
   */
  placement?: 'auto' | 'top' | 'right' | 'bottom' | 'left';
  /**
   * The content of the tooltip bubble.
   */
  content?: React.ReactNode;
  /**
   * The variant treatment for tooltips
   *
   * **Default is `"default"`**.
   */
  variant?: 'default' | 'inverse';
} & Omit<HTMLAttributes<HTMLElement>, 'children' | 'content'>;

/**
 * Space-separated ID references, as `aria-describedby` takes them, with any empty ones left out.
 */
function joinIds(...ids: unknown[]) {
  return ids.filter(Boolean).join(' ') || undefined;
}

/**
 * Interaction hooks hand back React props (`onFocus`, `aria-describedby`, ...). A trigger passed
 * by `reference` is not rendered by the Tooltip, so there is nothing to spread them onto.
 * Bind them to the element directly instead, and return a cleanup that unbinds them.
 */
function bindPropsToElement(
  element: Element,
  props: Record<string, unknown>,
): () => void {
  const cleanups: (() => void)[] = [];

  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'function' && /^on[A-Z]/.test(key)) {
      // React's onFocus/onBlur bubble, like the native focusin/focusout
      const eventName =
        key === 'onFocus'
          ? 'focusin'
          : key === 'onBlur'
            ? 'focusout'
            : key.slice(2).toLowerCase();
      // The handlers read `event.nativeEvent`, which only React's synthetic events carry
      const listener = (event: Event) =>
        value(
          new Proxy(event, {
            get(target, property) {
              if (property === 'nativeEvent') return target;
              const result = Reflect.get(target, property, target);
              return typeof result === 'function'
                ? result.bind(target)
                : result;
            },
          }),
        );
      element.addEventListener(eventName, listener);
      cleanups.push(() => element.removeEventListener(eventName, listener));
    } else if (typeof value === 'string' || typeof value === 'boolean') {
      const previousValue = element.getAttribute(key);
      element.setAttribute(
        key,
        key === 'aria-describedby'
          ? (joinIds(previousValue, value) as string)
          : String(value),
      );
      cleanups.push(() =>
        previousValue === null
          ? element.removeAttribute(key)
          : element.setAttribute(key, previousValue),
      );
    }
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

function getDelay(delay: TooltipProps['delay']) {
  if (Array.isArray(delay)) {
    return { open: delay[0] ?? 0, close: delay[1] ?? 0 };
  }
  return delay ?? 0;
}

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
 * * Keep tooltip content simple; avoid complex/custom typography styling inside a tooltip.
 * * When an icon's meaning is not immediately obvious or universally recognized, use a tooltip as a hint or clarification.
 * * Don't use tooltips to communicate critical information such as form errors; consider `ToastNotification` instead.
 * * Tooltips aren't meant for a first-time user experience; consider a NUX to guide onboarding.
 * * Display one tooltip at a time.
 *
 * ## Interaction
 *
 * A tooltip is triggered by hovering over or focusing an element. The most common example of a trigger is an icon, but hovering over a text link can also trigger a tooltip.
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
 * ### Don'ts
 *
 * * Don't use tooltips to communicate error messages or other critical information.
 * * Don't put essential task instructions in tooltips.
 * * Don't use tooltips to restate text that is already on the screen.
 * * Don't pair tooltips with disabled elements directly, as it may not receive pointer events. Attach to a wrapper element instead.
 *
 * ## Resources
 *
 * * https://floating-ui.com/docs/tooltip
 * * https://floating-ui.com/docs/react
 */
export const Tooltip = ({
  animation = 'fade',
  appendTo,
  arrow = true,
  childNotInteractive,
  className,
  content,
  delay,
  disabled,
  duration = 200,
  hideOnClick = true,
  interactive,
  maxWidth = 350,
  onHide,
  onShow,
  placement = 'auto',
  reference,
  trigger = 'mouseenter focus',
  variant = 'default',
  visible,
  zIndex = 9999,
  children: childrenProp,
  style,
  ...rest
}: TooltipProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = visible !== undefined;
  const open = !disabled && (isControlled ? visible : uncontrolledOpen);

  const arrowRef = React.useRef<HTMLDivElement>(null);
  const maxWidthValue =
    typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
  // Floating UI keeps the first `apply` it sees, since it compares functions by their source,
  // so the closure reads the current cap through a ref rather than capturing it
  const maxWidthRef = React.useRef(maxWidthValue);
  maxWidthRef.current = maxWidthValue;
  const {
    context,
    elements,
    floatingStyles,
    middlewareData,
    placement: resolvedPlacement,
    refs,
    update,
  } = useFloating({
    open,
    onOpenChange: setUncontrolledOpen,
    placement: placement === 'auto' ? undefined : placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(TOOLTIP_OFFSET),
      placement === 'auto' ? autoPlacement() : flip(),
      size({
        // The bubble is at least as wide as its trigger, but never past `maxWidth`, which
        // would otherwise lose to the min width and push the arrow off a capped bubble.
        apply({ elements: { floating }, rects }) {
          const triggerWidth = `${rects.reference.width}px`;
          floating.style.minWidth =
            maxWidthRef.current === 'none'
              ? triggerWidth
              : `min(${triggerWidth}, ${maxWidthRef.current})`;
        },
      }),
      arrow && arrowMiddleware({ element: arrowRef, padding: ARROW_PADDING }),
    ],
  });

  // Nothing else re-runs the middleware when only the cap changes, so ask for it
  React.useEffect(() => {
    update();
  }, [maxWidthValue, update]);

  // A controlled tooltip only follows `visible`, so the trigger's events are ignored.
  const interactionsEnabled = !isControlled && !disabled;
  const triggers = trigger.split(/\s+/);
  const hasClickTrigger = triggers.includes('click');

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: interactionsEnabled && triggers.includes('mouseenter'),
      delay: getDelay(delay),
      handleClose: interactive ? safePolygon() : null,
      move: false,
    }),
    useFocus(context, {
      enabled:
        interactionsEnabled &&
        (triggers.includes('focus') || triggers.includes('focusin')),
    }),
    useClick(context, {
      enabled: interactionsEnabled && hasClickTrigger,
      toggle: hideOnClick !== false,
    }),
    useDismiss(context, {
      enabled: interactionsEnabled,
      outsidePress: hideOnClick === true,
      referencePress: hideOnClick === true && !hasClickTrigger,
    }),
    useRole(context, { role: 'tooltip' }),
  ]);

  const animationDuration = animation === false ? 0 : duration;
  const { isMounted, status } = useTransitionStatus(context, {
    duration: animationDuration,
  });
  // Without an animation to wait on, hide as soon as the tooltip closes
  const isRendered = animationDuration > 0 ? isMounted : open;
  const isShown = animationDuration > 0 ? status === 'open' : open;

  const onShowRef = React.useRef(onShow);
  const onHideRef = React.useRef(onHide);
  onShowRef.current = onShow;
  onHideRef.current = onHide;
  const wasOpen = React.useRef(false);
  React.useEffect(() => {
    if (open !== wasOpen.current) {
      wasOpen.current = open;
      (open ? onShowRef : onHideRef).current?.();
    }
  }, [open]);

  let children = childrenProp;
  // Focus only reaches elements with a tabindex. If the child is disabled, we need to
  // wrap it in an element with a tabindex in order for it to work.
  if (childNotInteractive) {
    children = (
      <span
        data-testid="disabled-child-tooltip-wrapper"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        {childrenProp}
      </span>
    );
  }

  const childRef = React.isValidElement<{ ref?: React.Ref<Element> }>(children)
    ? children.props.ref
    : undefined;
  const triggerRef = useMergeRefs([refs.setReference, childRef]);

  React.useEffect(() => {
    if (reference) {
      refs.setReference(
        reference instanceof Element ? reference : reference.current,
      );
    }
  }, [reference, refs]);

  // The tooltip describes its trigger alongside any description the trigger already has. An
  // interactive tooltip holds more than a description, so it marks the trigger expanded
  // instead, unless the trigger already manages `aria-expanded` itself.
  const describedById = open && !interactive ? context.floatingId : undefined;
  const ariaExpanded = interactive ? open : undefined;

  const externalReference = reference ? elements.domReference : null;
  // Rebinds every render, since the interaction props change with the open state
  // eslint-disable-next-line @chanzuckerberg/edu-react/use-effect-deps-presence
  React.useEffect(() => {
    if (externalReference) {
      return bindPropsToElement(
        externalReference,
        getReferenceProps({
          'aria-describedby': describedById,
          'aria-expanded': externalReference.hasAttribute('aria-expanded')
            ? undefined
            : ariaExpanded,
        }),
      );
    }
  });

  let portalRoot: Element | null | undefined;
  if (appendTo === 'parent' || (interactive && appendTo === undefined)) {
    portalRoot = elements.domReference?.parentElement;
  } else if (typeof appendTo === 'function') {
    portalRoot = elements.domReference && appendTo(elements.domReference);
  } else {
    portalRoot = appendTo;
  }

  const bubbleContent =
    typeof content === 'string' ? (
      <Text as="span" data-testid="tooltip-content" preset="body-sm">
        {content}
      </Text>
    ) : (
      content
    );

  const tooltipClassNames = clsx(
    styles['tooltip'],
    variant && styles[`tooltip--variant-${variant}`],
    className,
  );

  const arrowSide = resolvedPlacement.split('-')[0];
  const arrowTransform =
    arrowSide === 'top' || arrowSide === 'bottom'
      ? `translate3d(${middlewareData.arrow?.x ?? 0}px, 0, 0)`
      : `translate3d(0, ${middlewareData.arrow?.y ?? 0}px, 0)`;

  return (
    <>
      {!reference &&
        React.isValidElement<Record<string, unknown>>(children) &&
        React.cloneElement(
          children,
          getReferenceProps({
            'aria-expanded': ariaExpanded,
            ...children.props,
            'aria-describedby': joinIds(
              children.props['aria-describedby'],
              describedById,
            ),
            ref: triggerRef,
          }),
        )}
      {isRendered && (
        <FloatingPortal root={portalRoot as HTMLElement | null | undefined}>
          <div
            ref={refs.setFloating}
            style={{ ...floatingStyles, maxWidth: maxWidthValue, zIndex }}
            {...getFloatingProps()}
          >
            <div
              {...rest}
              className={tooltipClassNames}
              data-animation={animation || undefined}
              data-placement={resolvedPlacement}
              data-state={isShown ? 'visible' : 'hidden'}
              style={{
                transitionDuration: `${animationDuration}ms`,
                ...style,
              }}
            >
              <div className={styles['tooltip__content']}>{bubbleContent}</div>
              {arrow && (
                <div
                  className={styles['tooltip__arrow']}
                  ref={arrowRef}
                  style={{ transform: arrowTransform }}
                />
              )}
            </div>
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

Tooltip.displayName = 'Tooltip';
