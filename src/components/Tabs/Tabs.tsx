import clsx from 'clsx';
import React, {
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import { allByType } from 'react-children-by-type';
import { useUID, useUIDSeed } from 'react-uid';
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
 * ```ts
 * import {Tabs} from "@chanzuckerberg/eds";
 * ```
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
  const getUID = useUIDSeed();
  const activeTabPanelId = useUID();
  const [activeIndexState, setActiveIndexState] = useState(activeIndex);

  /** Children that are actually tabs. Any others are ignored. */
  const tabs = useMemo(() => {
    return allByType(children, Tab);
  }, [children]);

  const tabRefs = useMemo(
    () => tabs.map(() => React.createRef<HTMLAnchorElement>()),
    [tabs],
  );

  const tabIds = useMemo(() => tabs.map(getUID), [tabs, getUID]);

  // Set the active tab if the `activeIndex` prop changes.
  const prevActiveIndex = usePrevious(activeIndex);
  useEffect(() => {
    if (prevActiveIndex != null && prevActiveIndex !== activeIndex) {
      setActiveIndexState(activeIndex);
      tabRefs[activeIndex].current?.focus();
    }
  }, [prevActiveIndex, activeIndex, tabRefs]);

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

  const activeTabPanel = React.cloneElement(tabs[activeIndexState], {
    id: activeTabPanelId,
    'aria-labelledby': tabIds[activeIndexState],
  });

  return (
    <div className={clsx(styles['tabs'], className)} {...other}>
      <div className={styles['tabs__header']}>
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
  useEffect(() => {
    ref.current = prop;
  });
  return ref.current;
}
