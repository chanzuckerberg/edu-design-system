import clsx from 'clsx';
import { debounce } from 'lodash';
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
import {
  L_ARROW_KEYCODE,
  U_ARROW_KEYCODE,
  R_ARROW_KEYCODE,
  D_ARROW_KEYCODE,
} from '../../util/keycodes';
import { useId } from '../../util/useId';
import Tab from '../Tab';
import styles from './Tabs.module.css';

export interface Props {
  /**
   * Reference to another element that describes the purpose of the set of tabs.
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
 * `import {Tabs} from "@chanzuckerberg/eds";`
 *
 * List of of links where each link toggles open associated information in a tab panel.
 */
export const Tabs = ({
  activeIndex = 0,
  'aria-labelledby': ariaLabelledBy,
  children,
  className,
  onChange,
  ...other
}: Props) => {
  const activeTabPanelId = useId();
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIndexState, setActiveIndexState] = useState(activeIndex);
  const [scrollableLeft, setScrollableLeft] = useState<boolean>(false);
  const [scrollableRight, setScrollableRight] = useState<boolean>(false);

  /** Children that are actually tabs. Any others are ignored. */
  const tabs = useMemo(() => {
    return allByType(children, Tab);
  }, [children]);

  const tabRefs = useMemo(
    // This usage of React.createRef is intentional.
    // eslint-disable-next-line @chanzuckerberg/edu-react/no-create-ref-in-function-component
    () => tabs.map(() => React.createRef<HTMLAnchorElement>()),
    [tabs],
  );

  const generatedId = useId();
  const tabIdPrefix = other.id || generatedId;
  const tabIds = useMemo(
    () => tabs.map((tab) => `${tabIdPrefix}-${tab.props.title}`),
    [tabs, tabIdPrefix],
  );

  // Set the active tab if the `activeIndex` prop changes.
  const prevActiveIndex = usePrevious(activeIndex);
  useEffect(() => {
    if (prevActiveIndex != null && prevActiveIndex !== activeIndex) {
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
    'aria-labelledby': tabIds[activeIndexState],
  });

  return (
    <div className={componentClassName} {...other}>
      <div
        className={headerClassName}
        onScroll={(e) => handleTabsScroll(e.target as HTMLDivElement)}
        ref={headerRef}
      >
        <ul
          aria-labelledby={ariaLabelledBy}
          className={styles['tabs__list']}
          role="tablist"
        >
          {tabs.map((tab, i) => {
            const isActive = activeIndexState === i;
            return (
              <li
                className={clsx(
                  styles['tabs__item'],
                  isActive && styles['eds-is-active'],
                )}
                key={tabIds[i]}
                role="presentation"
              >
                <a
                  aria-controls={activeTabPanelId}
                  aria-selected={isActive}
                  className={styles['tabs__link']}
                  href={`#${activeTabPanelId}`}
                  id={tabIds[i]}
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

/**
 * Get the previous value of a prop. Useful for comparing the previous to the current value.
 */
function usePrevious<T>(prop: T) {
  const ref = useRef<T>(prop);
  // eslint-disable-next-line @chanzuckerberg/edu-react/use-effect-deps-presence
  useEffect(() => {
    ref.current = prop;
  });
  return ref.current;
}
