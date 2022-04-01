import clsx from 'clsx';
import { nanoid } from 'nanoid';
import React, {
  ReactNode,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { allByType } from 'react-children-by-type';
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
  ariaLabelledBy?: any;
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
   * Toggles the visibility of the RadioField legend
   */
  hideLegend?: boolean;
  /**
   * HTML id for the component
   */
  id?: any;
  /**
   * Passed down to initially set the activeIndex state
   */
  activeIndex?: number;
  /**
   * The array of items to be passed into the component. The array must take on the specified shape
   */
  items?: any;
  /**
   * HTML radio tabs label text
   */
  radioLegend?: string;
  /**
   * Changes the position of the radio tabs legend to inline
   */
  radioLegendPosition?: 'inline-label';
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * Stylistic variations:
   * - **sm** yields smaller, uppercase tabs
   */
  size?: 'sm';
  /**
   * Function passed down from higher level component into Tabs
   */
  tabsOnClick?: () => void;
  /**
   * Tabs rendered on a dark backgorund
   */
  inverted?: boolean;
  /**
   * Overflow variants
   * - **inverted** changes the overflow shadow to the inverted color
   */
  overflow?: 'inverted';
  /**
   * Stylistic variations:
   * - **boxed** yields a chunkier, distinct boxed tabs used for primary content
   * - **radio** yields tabs that are controlled by radio buttons
   */
  variant?: 'boxed' | 'radio';
  title?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Tabs = ({
  className,
  children,
  radioLegend,
  hideLegend,
  size,
  variant,
  activeIndex,
  tabsOnClick,
  ariaLabelledBy,
  inverted,
  radioLegendPosition,
  id,
  overflow,
  onChange,
  required,
  ...other
}: Props) => {
  /**
   * Initialize states, constants, and refs
   */
  const ref = useRef();
  const [activeIndexState, setActiveIndexState] = useState(
    activeIndex ? activeIndex : 0,
  );
  /**
   * Set the only children components allowed within <Tabs> to be Tab
   */
  const tabs = useCallback(() => {
    return allByType(children, Tab);
  }, [children]);

  const tabRefs = tabs().map(() => React.createRef());

  // we can't use the hook in an iterator like this, so generate the base and increment if needed
  const [idVar, setId] = useState([]);
  const [ariaLabelledByVar, setAriaLabelledBy] = useState([]);

  /**
   * Get previous prop
   * 1) This is used to compare the previous prop to the current prop
   */
  function usePrevious(activeIndex: any) {
    useEffect(() => {
      ref.current = activeIndex;
    });
    return ref.current;
  }

  /**
   * Use effect
   * 1) Set prevActiveIndex to previous value prop
   * 2) If prevActiveIndex is defined and previous value prop is not equal
   * to current value prop, toggle state
   */
  const prevActiveIndex = usePrevious(activeIndex); /* 1 */
  useEffect(() => {
    if (
      (prevActiveIndex !== undefined || null) &&
      prevActiveIndex !== activeIndex
    ) {
      setActiveIndexState(activeIndex);
      tabRefs[activeIndex].current.focus();
    }
  }, [prevActiveIndex, activeIndex, tabRefs]);

  /**
   * Autogenerate ids on tabs if not defined
   */
  useEffect(() => {
    setId(tabs().map((tab) => (tab.props.id ? tab.props.id : nanoid())));
    setAriaLabelledBy(
      tabs().map((tab) =>
        tab.props.ariaLabelledBy ? tab.props.ariaLabelledBy : nanoid(),
      ),
    );
  }, [tabs]);

  /**
   * On open
   * 1) On click of a tab, set activeIndexState to index of tab being clicked\
   * 2) If function is passed into onChange prop, run that on click
   */
  function onOpen(index: any) {
    setActiveIndexState(index); /* 1 */

    if (onChange) {
      /* 2 */
      onChange(index);
    }
  }

  /**
   * On KeyDown
   * 1) Find active tab. If there isn't one, do nothing on Keydown
   * 2) Set active tab, next tab, and previous tab.
   * 3) If right or down arrow key keyed, focus on next tab.
   * 4) If left or up arrow key keyed, focus on the previous tab.
   */
  function onKeyDown(e: any) {
    let activeTab = null;

    tabRefs.map((item: any) => {
      if (item.current === document.activeElement) {
        activeTab = item;
      }
      return item;
    });

    if (!activeTab) return;

    const index = tabRefs.indexOf(activeTab); /* 2 */
    const next = index === tabRefs.length - 1 ? 0 : index + 1; /* 2 */
    const prev = index === 0 ? tabRefs.length - 1 : index - 1; /* 2 */

    if ([R_ARROW_KEYCODE, D_ARROW_KEYCODE].includes(e.code)) {
      /* 3 */
      tabRefs[next].current.focus();
    } else if ([L_ARROW_KEYCODE, U_ARROW_KEYCODE].includes(e.code)) {
      /* 4 */
      tabRefs[prev].current.focus();
    }
  }

  const componentClassName = clsx(
    styles['tabs'],
    className,
    inverted && 'tabs--inverted',
  );

  const childrenWithProps = React.Children.map(tabs(), (child: any, i: any) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement<Props>(child, {
        id: idVar[i],
        ariaLabelledBy: ariaLabelledByVar[i],
      });
    }
    return child;
  });

  return (
    <div className={componentClassName} {...other}>
      <div className={styles['tabs__header']}>
        <ul className={styles['tabs__list']} role="tablist">
          {tabs().map((tab: any, i: any) => {
            const isActive = activeIndexState === i;
            return (
              <li
                className={clsx('tabs__item', isActive && 'eds-is-active')}
                key={'tabs-item-' + i}
                role="presentation"
              >
                <a
                  className={styles['tabs__link']}
                  role="tab"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpen(i);
                  }}
                  key={'tab-' + i}
                  id={ariaLabelledByVar[i]}
                  onKeyDown={onKeyDown}
                  href={`#${idVar[i]}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  aria-controls={idVar[i]}
                  ref={tabRefs[i]}
                  aria-label={tab.props.ariaLabel}
                >
                  {tab.props.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles['tabs__body']}>
        {childrenWithProps[activeIndexState]}
      </div>
    </div>
  );
};
