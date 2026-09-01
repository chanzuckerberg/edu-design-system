import clsx from 'clsx';
import debounce from 'lodash/debounce';

import React, {
  type ReactNode,
  type HTMLAttributes,
  useRef,
  useEffect,
  useState,
} from 'react';
import styles from './ScrollWrapper.module.css';

export type ScrollWrapperProps = HTMLAttributes<HTMLDivElement> & {
  // Component API
  /**
   * Contents of the wrapper element
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Determines the direction that the shadows apply
   */
  orientation?: 'horizontal' | 'vertical';
  // Design API
  /**
   * Type of shadow treatment for the wrapper:
   * - **cover** - full-width shadow in the wrapper based on shadow context
   * - **contain** - shadow whose edges fit within the width of the wrapper
   */
  shadowType?: 'cover' | 'contain';
};

type ShadowStates = {
  top: boolean;
  bottom: boolean;
  start: boolean;
  end: boolean;
};

export const setShadowStates = (targetData: HTMLDivElement): ShadowStates => {
  const {
    scrollTop,
    scrollLeft,
    scrollHeight,
    clientHeight,
    scrollWidth,
    clientWidth,
  } = targetData;
  const showShadows = { top: false, bottom: false, start: false, end: false };

  // handle verticals
  if (scrollTop === 0) {
    showShadows.top = false;
  } else {
    showShadows.top = true;
  }

  if (scrollTop < scrollHeight - clientHeight) {
    showShadows.bottom = true;
  } else {
    showShadows.bottom = false;
  }

  // handle horizontals
  if (scrollLeft === 0) {
    showShadows.start = false;
  } else {
    showShadows.start = true;
  }

  if (scrollLeft < scrollWidth - clientWidth) {
    showShadows.end = true;
  } else {
    showShadows.end = false;
  }

  return showShadows;
};

/**
 * ## Usage
 *
 * Wrap content that has a fixed height but is scrollable, so that users have an indication that
 * more content is available. Subtle shadows come in several variants.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Vertical | The default. Scrolls on the y axis and shades the top and bottom edges. | Long dialog bodies. Tall option lists. |
 * | Horizontal | `orientation="horizontal"` scrolls on the x axis and shades the start and end edges. | Wide tables. Toolbars that overflow. |
 *
 * `orientation` picks one axis at a time, so a single wrapper shades either the vertical or the
 * horizontal edges, not both.
 *
 * `shadowType` controls the treatment: `cover` (the default) spans the full width of the wrapper,
 * while `contain` keeps the shadow's edges inside it.
 *
 * The effect depends on the container being shorter than its content, so the element above the
 * scroll wrapper must have a fixed height. Without that, nothing overflows and no shadow appears.
 *
 * ## Interaction
 *
 * When vertical, scrolling will enable both shadows when there is more content above and below the
 * current position. When there is only content above the current position (scrolled to the end of
 * the container), only the top shadow is shown. When scrolled to the very top of the container,
 * only the bottom shadow is shown. The same logic applies to the horizontal scrolling scenario,
 * against the start and end edges.
 *
 * `Modal` renders a `ScrollWrapper` around its body for you, so its content scrolls without any
 * extra setup.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use `ScrollWrapper` in any overlay components that need to exceed the available screen real estate. This is not for ones that definitely will, but ones that have variable content which could grow to be either too tall or too wide.
 * * Use `cover` for the shadow type to emphasize and make clear that more content is available.
 * * Leave the scrollable region in the tab order. It carries `tabIndex={0}` so that people navigating by keyboard can scroll it.
 *
 * ### Don'ts
 *
 * * Avoid wrapping entire pages with `ScrollWrapper`.
 * * Never use multiple, adjacent `ScrollWrapper` instances.
 */
export const ScrollWrapper = ({
  children,
  className,
  orientation = 'vertical',
  shadowType = 'cover',
  ...other
}: ScrollWrapperProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [shadowState, setShadowState] = useState<ShadowStates>({
    top: false,
    bottom: false,
    start: false,
    end: false,
  });

  const outerClassName = clsx(
    styles['scroll-wrapper'],
    orientation && styles[`scroll-wrapper--orientation-${orientation}`],
    shadowState.top && styles['scroll-wrapper--has-top-shadow'],
    shadowState.bottom && styles['scroll-wrapper--has-bottom-shadow'],
    shadowState.start && styles['scroll-wrapper--has-start-shadow'],
    shadowState.end && styles['scroll-wrapper--has-end-shadow'],
    shadowType && styles[`scroll-wrapper--shadow-type-${shadowType}`],
    className,
  );

  // This handler fires upon every scroll event. changes are "debounced" by the set state calls
  const handler = (ev: Event) => {
    if (ev.target) {
      setShadowState(setShadowStates(ev.target as HTMLDivElement));
    }
  };

  // remove the shadows when resizing occurs, so they aren't in the previous state
  const debouncedHandler = debounce(() => {
    setShadowState({ top: false, bottom: false, start: false, end: false });
  }, 250);

  // Hook up the event handlers, monitoring resizes (reset the shadows) and scroll (add based on position)
  useEffect(() => {
    const currentElement = scrollRef.current;
    if (currentElement) {
      currentElement.addEventListener('scroll', handler);
      window.addEventListener('resize', debouncedHandler);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener('scroll', handler);
        window.removeEventListener('resize', debouncedHandler);
      }
    };
  }, [debouncedHandler]);

  return (
    <div className={outerClassName} {...other}>
      <div
        className={clsx(styles['scroll-wrapper__inner'])}
        ref={scrollRef}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
};
