import clsx from 'clsx';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import styles from './Header.module.css';

export interface Props {
  /**
   * Pinned stop property
   * 1) Pixel value from the top of the page scrolled before the header goes away
   * 2) Used only for `behavior="sticky"` header variant
   */
  pinnedStop?: number;
  /**
   * Unpinned property
   * 1) Used to move the header offscreen but have it ready to move back in
   * 2) Used only for `behavior="sticky"` header variant
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
   * 1) Set the height of the header wrapper so that the spacing stays consistent when
   * the header gets pinned to the top of the page.
   */
  const updateHeaderWrapperHeight = () => {
    if (behavior === 'sticky' && stickyRef.current) {
      stickyRef.current.style.height =
        ref?.current?.clientHeight + 'px'; /* 1 */
    }
  };

  /**
   * Handle window scroll
   * 1) On scroll up below the bottom of the header position, pin the header to the top of the page
   * 2) Else if on scroll down below the header position and above the pinnedStop prop, pin the header to the top of the page
   * 3) Else if on scroll down below the header position, remove the pin
   * 4) Otherwise, remove the pin and scrolled classes
   */
  const handleWindowScroll = () => {
    if (behavior === 'sticky') {
      if (
        document.body.getBoundingClientRect().top > scrollPos &&
        stickyRef.current &&
        stickyRef.current.getBoundingClientRect().bottom < 0
      ) {
        /* 1 */
        setUnpinned(false);
        setPinned(true);
      } else if (
        stickyRef.current &&
        stickyRef.current.getBoundingClientRect().top < 0 &&
        window.scrollY <= pinnedStop
      ) {
        /* 2 */
        setUnpinned(false);
        setPinned(true);
      } else if (
        stickyRef.current &&
        stickyRef.current.getBoundingClientRect().bottom < 0
      ) {
        /* 3 */
        setUnpinned(true);
        setPinned(false);
        setTimeout(() => {
          setScrolled(true);
        }, 300);
      } else {
        /* 4 */
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
  useEffect(() => {
    updateHeaderWrapperHeight();
  });

  /**
   * Use effect lifecycle hook
   * 1) Add scroll and window resize event to adjust values
   */
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
    className,
    behavior === 'sticky' && styles['header--sticky'],
    unpinned === true && styles['eds-is-unpinned'],
    pinned === true && styles['eds-is-pinned'],
    scrolled === true && styles['eds-is-scrolled'],
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
