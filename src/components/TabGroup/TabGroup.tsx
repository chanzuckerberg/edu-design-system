import clsx from 'clsx';
import debounce from 'lodash/debounce';
import React, {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import { allByType, oneByType, withoutTypes } from 'react-children-by-type';

import {
  L_ARROW_KEYCODE,
  U_ARROW_KEYCODE,
  R_ARROW_KEYCODE,
  D_ARROW_KEYCODE,
} from '../../util/keycodes';
import { useId } from '../../util/useId';
import type { RenderProps } from '../../util/utility-types';
import type { Align } from '../../util/variant-types';
import Icon, { type IconName } from '../Icon';

import styles from './TabGroup.module.css';

export interface TabGroupProps {
  // Component API
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
  // Design API
  /**
   * Alignment of the tabs, when there is additional space available (not full width)
   */
  align?: Align;
  /**
   * Whether the divider line (separating tabs from content) is visible.
   *
   * **Default is `"true"`.
   */
  hasDivider?: boolean;
  /**
   *
   */
  isSticky?: boolean;
  /**
   * Control how the indidivual tabs take up the available space.
   *
   * **Default is `"auto"`.
   */
  tabWidth?: 'auto' | 'full';
}

export interface TabProps {
  // Component API
  /**
   * aria-labelledby attribute that associates a tab panel with its accompanying tab title
   */
  'aria-labelledby'?: string;
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
   * Number passed down from Tabs to show the active index state of Tabs
   */
  activeIndex?: number;
  // Design API
  /**
   * Text used to label the tab in the tab list
   */
  title: string;
  /**
   * Icon name from the defined set of EDS icons
   *
   * **NOTE**: this cannot be used with `illustration`.
   */
  icon?: IconName;
  /**
   * Illustration to appear above the tab text
   *
   * **NOTE**: this cannot be used with `icon`
   */
  illustration?: ReactNode;
}

type TabButtonProps = RenderProps<TabContextArgs>;
export type TabContextArgs = {
  isActive: boolean;
  title: string;
};

/**
 * `import {TabGroup} from "@chanzuckerberg/eds";`
 *
 * List of of links where each link toggles open associated information in a tab panel.
 *
 * Individual tabs allow for a simple text tab header using the `title` prop on each `<Tab>` instance.
 * For a more custom tabs, you can use an additonal `<Tab.Button>` sub-component with a render prop exposing `active` and `title`.
 */
export const TabGroup = ({
  activeIndex = 0,
  align,
  'aria-labelledby': ariaLabelledBy,
  children,
  className,
  hasDivider = true,
  isSticky = false,
  onChange,
  tabWidth = 'auto',
  ...other
}: TabGroupProps) => {
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
    () =>
      tabs.map(
        (tab) => `${tabIdPrefix}-${tab.props.title.replace(/\s/g, '-')}`,
      ),
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
          className={clsx(
            styles['tabs__list'],
            hasDivider && styles['tabs--has-divider'],
            align && styles[`tabs__list--align-${align}`],
          )}
          role="tablist"
        >
          {tabs.map((tab, i) => {
            const isActive = activeIndexState === i;
            const tabButton = oneByType(tab.props.children, Tab.Button);
            return (
              <li
                className={clsx(
                  styles['tabs__item'],
                  isActive && styles['eds-is-active'],
                  tabWidth === 'full' && styles[`tabs--width-${tabWidth}`],
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
                  {tab.props.illustration && (
                    <div className={styles['tab__illustration']}>
                      {tab.props.illustration}
                    </div>
                  )}
                  {tab.props.icon && (
                    <Icon
                      className={styles['tab__icon']}
                      name={tab.props.icon}
                      purpose="decorative"
                      size="1rem"
                    />
                  )}
                  {typeof tabButton?.props.children === 'function'
                    ? tabButton.props.children({
                        isActive,
                        title: tab.props.title,
                      })
                    : tab.props.title}
                  <div
                    aria-hidden="true"
                    className={styles['tab__highlight']}
                  ></div>
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

/**
 * `import {Tab} from "@chanzuckerberg/eds";`
 *
 * Individual tab within the Tabs component.
 * - Use the `title` prop for text-only tab headers
 * - For more custom tab headers use `<Tab.Button>` which uses a render prop with state information
 */
export const Tab = ({
  'aria-labelledby': ariaLabelledBy,
  children,
  className,
  icon,
  id,
  illustration,
  // Destructure `title` so it is not applied to the rendered element
  title,
  ...other
}: TabProps) => {
  return (
    <div
      aria-hidden={false}
      aria-labelledby={ariaLabelledBy}
      className={className}
      id={id}
      role="tabpanel"
      {...other}
    >
      {withoutTypes(children, TabButton)}
    </div>
  );
};

/**
 * This component is a stub, and exists to give a type to the custom Tab button.
 * It cannot be used as a standalone sub-component. See <Tabs> for where we trigger the render prop.
 *
 * Allows for control of the Tab Title contents, for custom tab handling
 *
 * ```jsx
 * <Tab.Button>
 *     {({active, title}) => (
 *         <SomeCustomComponent isActive={active} title={title} />
 *     )}
 * </Tab.Button>
 * ```
 */
const TabButton = (props: TabButtonProps) => {
  return <div />;
};

Tab.displayName = 'Tab';
Tab.Button = TabButton;
TabButton.displayName = 'TabGroup.Button';

TabGroup.displayName = 'TabGroup';
TabGroup.Tab = Tab;
