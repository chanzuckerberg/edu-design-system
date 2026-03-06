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

/**
 * `import {ScrollWrapper} from "@chanzuckerberg/eds";`
 *
 * This is a basic wrapper component that handles functionality to show/hide shadows along the vertical edges.
 * This kicks in once the container's size is smaller than the overall height of the content within. For this to work,
 * the element above the scroll wrapper must have a fixed height. The effect kicks in once the children of the scroll
 * wrapper expand height above that fixed height.
 */
export const ScrollWrapper = ({
  children,
  className,
  orientation = 'vertical',
  shadowType = 'cover',
  ...other
}: ScrollWrapperProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [shadowState, setShadowState] = useState({
    top: false,
    bottom: false,
    start: false,
    end: false,
  });

  const outterClassName = clsx(
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
    const showShadows = { top: false, bottom: false, start: false, end: false };
    if (ev.target) {
      const {
        scrollTop,
        scrollLeft,
        scrollHeight,
        clientHeight,
        scrollWidth,
        clientWidth,
      } = ev.target as HTMLDivElement;

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

      setShadowState(showShadows);
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
    <div className={outterClassName} {...other}>
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
