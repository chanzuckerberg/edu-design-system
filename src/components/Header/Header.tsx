import clsx from 'clsx';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import styles from './Header.module.css';

export interface Props {
  /**
   * Pinned stop property
   *
   * Pixel value from the top of the page scrolled before the header goes away.
   *
   * Used only for `behavior="sticky"` header variant.
   */
  pinnedStop?: number;
  /**
   * Unpinned property
   *
   * Used to move the header offscreen but have it ready to move back in.
   *
   * Used only for `behavior="sticky"` header variant.
   */
  unpinned?: boolean;
  /**
   * Behavior variants
   * - **relative** (default) yields a Header whose position is styled "relative".
   * - **sticky** yields a Header whose position is styled "sticky".
   */
  behavior?: 'relative' | 'sticky';
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component. `PrimaryNavItem` the only permissible children of the PrimaryNav
   */
  children?: ReactNode;
}

/**
 * ```ts
 * import {Header} from "@chanzuckerberg/eds";
 * ```
 *
 * Global container for the header component. This helps set the stage for header recipes across applications.
 */
export const Header = ({
  behavior,
  className,
  children,
  pinnedStop = 150,
  ...other
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const [pinned, setPinned] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [unpinned, setUnpinned] = useState(false);

  /**
   * Update the header wrapper height
   */
  const updateHeaderWrapperHeight = () => {
    if (behavior === 'sticky' && stickyRef.current) {
      /**
       * Set the height of the header wrapper so that the spacing stays consistent when
       * the header gets pinned to the top of the page.
       */
      stickyRef.current.style.height = ref?.current?.clientHeight + 'px';
    }
  };

  /**
   * Handle window scroll
   */
  const handleWindowScroll = () => {
    if (behavior === 'sticky') {
      if (
        document.body.getBoundingClientRect().top > scrollPos &&
        stickyRef.current &&
        stickyRef.current.getBoundingClientRect().bottom < 0
      ) {
        /**
         * On scroll up below the bottom of the header position, pin the header to the top of the page.
         */
        setUnpinned(false);
        setPinned(true);
      } else if (
        stickyRef.current &&
        stickyRef.current.getBoundingClientRect().top < 0 &&
        window.scrollY <= pinnedStop
      ) {
        /**
         * Else if on scroll down below the header position and above the pinnedStop prop, pin the header to the top of the page.
         */
        setUnpinned(false);
        setPinned(true);
      } else if (
        stickyRef.current &&
        stickyRef.current.getBoundingClientRect().bottom < 0
      ) {
        /**
         * Else if on scroll down below the header position, remove the pin.
         */
        setUnpinned(true);
        setPinned(false);
        setTimeout(() => {
          setScrolled(true);
        }, 300);
      } else {
        /**
         * Otherwise, remove the pin and scrolled classes.
         */
        setPinned(false);
        setUnpinned(false);
        setScrolled(false);
      }
      setScrollPos(document.body.getBoundingClientRect().top);
    }
  };

  /**
   * Update sticky wrapper height on mount
   */
  // FIXME
  // eslint-disable-next-line @chanzuckerberg/edu-react/use-effect-deps-presence
  useEffect(() => {
    updateHeaderWrapperHeight();
  });

  /**
   * Use effect lifecycle hook
   *
   * Add scroll and window resize event to adjust values.
   */
  // FIXME
  // eslint-disable-next-line @chanzuckerberg/edu-react/use-effect-deps-presence
  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll, false);
    window.addEventListener('resize', updateHeaderWrapperHeight, false);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll, false);
      window.removeEventListener('resize', updateHeaderWrapperHeight, false);
    };
  });

  const componentClassName = clsx(
    styles['header'],
    behavior === 'sticky' && styles['header--sticky'],
    unpinned === true && styles['eds-is-unpinned'],
    pinned === true && styles['eds-is-pinned'],
    scrolled === true && styles['eds-is-scrolled'],
    className,
  );

  if (behavior === 'sticky') {
    return (
      <div className={styles['header-sticky-container']} ref={stickyRef}>
        <header
          className={componentClassName}
          ref={ref}
          role="banner"
          {...other}
        >
          {children}
        </header>
      </div>
    );
  } else {
    return (
      <header className={componentClassName} ref={ref} role="banner" {...other}>
        {children}
      </header>
    );
  }
};
