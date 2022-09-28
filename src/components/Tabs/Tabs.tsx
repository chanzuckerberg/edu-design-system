import clsx from 'clsx';
import debounce from 'lodash.debounce';
import React, {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import { allByType } from 'react-children-by-type';
import { useUID } from 'react-uid';
import styles from './Tabs.module.css';
import {
  L_ARROW_KEYCODE,
  U_ARROW_KEYCODE,
  R_ARROW_KEYCODE,
  D_ARROW_KEYCODE,
} from '../../util/keycodes';
import Tab from '../Tab';

export interface Props {
  /**
   * The aria-labelledby attribute creates a relationship between the tab list and the tab panels
   */
  'aria-labelledby'?: string;
  /**
   * Calls back with the active index
   */
  onChange?: (index: number) => void;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Passed down to initially set the activeIndex state
   */
  activeIndex?: number;
}

/**
 * ```ts
 * import {Tabs} from "@chanzuckerberg/eds";
 * ```
 *
 * List of of links where each link toggles open associated information in a tab panel.
 */
export const Tabs = ({
  activeIndex = 0,
  children,
  className,
  onChange,
  ...other
}: Props) => {
  const activeTabId = useUID();
  const activeTabPanelId = useUID();
  const ref = useRef<number | undefined>();
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIndexState, setActiveIndexState] = useState(activeIndex);
  const [scrollableLeft, setScrollableLeft] = useState<boolean>(false);
  const [scrollableRight, setScrollableRight] = useState<boolean>(false);

  /** Children that are actually tabs. Any others are ignored. */
  const tabs = useMemo(() => {
    return allByType(children, Tab);
  }, [children]);

  const tabRefs = useMemo(
    () => tabs.map(() => React.createRef<HTMLAnchorElement>()),
    [tabs],
  );

  /**
   * Get previous prop
   *
   * This is used to compare the previous prop to the current prop.
   */
  function usePrevious(activeIndex: number) {
    useEffect(() => {
      ref.current = activeIndex;
    });
    return ref.current;
  }

  /**
   * Set prevActiveIndex to previous value prop
   *
   * If prevActiveIndex is defined and previous value prop is not equal
   * to current value prop, toggle state.
   */
  const prevActiveIndex = usePrevious(activeIndex);
  useEffect(() => {
    if (
      (prevActiveIndex !== undefined || null) &&
      prevActiveIndex !== activeIndex
    ) {
      setActiveIndexState(activeIndex);
      tabRefs[activeIndex].current?.focus();
    }
  }, [prevActiveIndex, activeIndex, tabRefs]);

  /**
   * Handles if scroll fade indicators should be displayed.
   */
  const handleTabsScroll = useCallback((headerEl: HTMLDivElement) => {
    const scrollLeft = headerEl.scrollLeft;
    const width = headerEl.clientWidth;
    const scrollWidth = headerEl.scrollWidth;

    if (scrollLeft > 0) {
      setScrollableLeft(true);
    } else {
      setScrollableLeft(false);
    }

    if (scrollWidth > width && scrollLeft + width < scrollWidth) {
      setScrollableRight(true);
    } else {
      setScrollableRight(false);
    }
  }, []);

  /**
   * Listens for window resize to display scroll fade indicators.
   */
  useEffect(() => {
    if (headerRef && headerRef.current) {
      const resizeHandleTabs = debounce(
        () => {
          if (headerRef.current) {
            handleTabsScroll(headerRef.current);
          }
        },
        100,
        { leading: true },
      );

      /**
       * The event listener actually calls the callback once when initiated, but the event listener
       * is not triggered with prop changes so this line is required.
       * This means the callback may be called twice on initial paint, which is fine, and
       * is better than it not being called at all.
       */
      resizeHandleTabs();
      window.addEventListener('resize', resizeHandleTabs);
      return () => {
        window.removeEventListener('resize', resizeHandleTabs);
      };
    }
  }, [handleTabsScroll]);

  function handleClick(index: number) {
    setActiveIndexState(index);

    if (onChange) {
      onChange(index);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLAnchorElement>) {
    let activeTab = null;

    tabRefs.map((item) => {
      if (item.current === document.activeElement) {
        activeTab = item;
      }
      return item;
    });

    if (!activeTab) return;

    // Set active, next, and previous tab.
    const index = tabRefs.indexOf(activeTab);
    const next = index === tabRefs.length - 1 ? 0 : index + 1;
    const prev = index === 0 ? tabRefs.length - 1 : index - 1;

    if ([R_ARROW_KEYCODE, D_ARROW_KEYCODE].includes(e.key)) {
      // Right or down arrow was pressed. Focus the next tab.
      tabRefs[next].current?.focus();
    } else if ([L_ARROW_KEYCODE, U_ARROW_KEYCODE].includes(e.key)) {
      // Left or up was pressed. Focus the previous tab.
      tabRefs[prev].current?.focus();
    }
  }

  const componentClassName = clsx(styles['tabs'], className);

  const headerClassName = clsx(
    styles['tabs__header'],
    scrollableLeft && styles['tabs--scrollable-left'],
    scrollableRight && styles['tabs--scrollable-right'],
  );

  const activeTabPanel = React.cloneElement(tabs[activeIndexState], {
    id: activeTabPanelId,
    'aria-labelledby': activeTabId,
  });

  return (
    <div className={componentClassName} {...other}>
      <div
        className={headerClassName}
        onScroll={(e) => handleTabsScroll(e.target as HTMLDivElement)}
        ref={headerRef}
      >
        <ul className={styles['tabs__list']} role="tablist">
          {tabs.map((tab, i) => {
            const isActive = activeIndexState === i;
            return (
              <li
                className={clsx(
                  styles['tabs__item'],
                  isActive && styles['eds-is-active'],
                )}
                key={'tabs-item-' + i}
                role="presentation"
              >
                <a
                  aria-controls={activeTabPanelId}
                  aria-selected={isActive}
                  className={styles['tabs__link']}
                  href={`#${activeTabPanelId}`}
                  id={isActive ? activeTabId : undefined}
                  key={'tab-' + i}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(i);
                  }}
                  onKeyDown={handleKeyDown}
                  ref={tabRefs[i]}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                >
                  {tab.props.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>{activeTabPanel}</div>
    </div>
  );
};
