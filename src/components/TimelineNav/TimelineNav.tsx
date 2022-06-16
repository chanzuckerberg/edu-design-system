import clsx from 'clsx';
import React, {
  ReactNode,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { allByType } from 'react-children-by-type';
import { useUIDSeed } from 'react-uid';
import styles from './TimelineNav.module.css';
import {
  EdsThemeColorBackgroundGradeCompleteDefault,
  EdsThemeColorBackgroundGradeReviseDefault,
  EdsThemeColorBackgroundGradeStopDefault,
  EdsThemeColorBorderNeutralSubtle,
} from '../../tokens-dist/ts/colors';
import {
  L_ARROW_KEYCODE,
  U_ARROW_KEYCODE,
  R_ARROW_KEYCODE,
  D_ARROW_KEYCODE,
} from '../../util/keycodes';
import Icon from '../Icon';
import NumberIcon from '../NumberIcon';
import TimelineNavPanel, { TimelineNavPanelVariant } from '../TimelineNavPanel';

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
  /**
   * The array of items to be passed into the component. The array must take on the specified shape
   * TODO: improve `any` type
   */
  items?: Array<any>;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * Function passed down from higher level component into TimelineNav
   */
  timelineNavOnClick?: () => void;
  /**
   * Overflow variants
   * - **inverted** changes the overflow shadow to the inverted color
   */
  overflow?: 'inverted';
  /**
   * Stylistic variations:
   * - **ordered** uses a ordered list <ol> instead of the default unordered list <ul>, and allows for icons, bullets, or numbers
   */
  variant?: 'ordered';
  /**
   * Timeline nav item tab name
   */
  title?: string;
}

export interface TimelineNavItem {
  props: {
    ariaLabel: string;
    children: ReactNode;
    variant?: TimelineNavPanelVariant;
    title?: string;
  };
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TimelineNav} from "@chanzuckerberg/eds";
 * ```
 *
 * Timeline nav Component
 * 1) Provides a list-view pane for item labels/titles, and a details pane for each item's content. When an item in the list is selected, the details pane is updated.
 */
export const TimelineNav = ({
  className,
  children,
  variant,
  activeIndex = 0,
  timelineNavOnClick,
  id,
  overflow,
  onChange,
  required,
  title,
  ...other
}: Props) => {
  /**
   * Initialize states, constants, and refs
   */
  const ref = useRef<number | undefined>();
  const [activeIndexState, setActiveIndexState] = useState(
    activeIndex ? activeIndex : 0,
  );
  /**
   * Set the only children components allowed within <TimelineNav> to be TimelineNavPanel
   */
  const timelineNavItems = useCallback(() => {
    return allByType(children, TimelineNavPanel);
  }, [children]);

  const timelineNavItemRefs = timelineNavItems().map(() => React.createRef());

  // we can't use the hook in an iterator like this, so generate the base and increment if needed
  const [idVar, setId] = useState<string[]>([]);
  const [ariaLabelledByVar, setAriaLabelledBy] = useState<string[]>([]);
  const getUID = useUIDSeed();

  /**
   * Get previous prop
   * 1) This is used to compare the previous prop to the current prop
   */
  function usePrevious(activeIndex: number) {
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
      timelineNavItemRefs[activeIndex].current.focus();
    }
  }, [prevActiveIndex, activeIndex, timelineNavItemRefs]);

  /**
   * Autogenerate ids on tabs if not defined.
   */
  useEffect(() => {
    setId(
      // TODO: improve `any` type
      timelineNavItems().map((item: any) =>
        item.props.id ? item.props.id : getUID(item),
      ),
    );
    setAriaLabelledBy(
      // TODO: improve `any` type
      timelineNavItems().map((item: any) =>
        item.props['aria-labelledby']
          ? item.props['aria-labelledby']
          : getUID(item),
      ),
    );
  }, [timelineNavItems, getUID]);

  /**
   * On open
   * 1) On click of a tab, set activeIndexState to index of tab being clicked\
   * 2) If function is passed into onChange prop, run that on click
   */
  function onOpen(index: number) {
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
   *
   * TODO: improve `any` type
   */
  function onKeyDown(e: any) {
    let activeTimelineNavPanel = null;
    // TODO: improve `any` type
    timelineNavItemRefs.map((item: any) => {
      if (item.current === document.activeElement) {
        activeTimelineNavPanel = item;
      }
      return item;
    });

    if (!activeTimelineNavPanel) return;

    const index = timelineNavItemRefs.indexOf(activeTimelineNavPanel); /* 2 */
    const next =
      index === timelineNavItemRefs.length - 1 ? 0 : index + 1; /* 2 */
    const prev =
      index === 0 ? timelineNavItemRefs.length - 1 : index - 1; /* 2 */

    if ([R_ARROW_KEYCODE, D_ARROW_KEYCODE].includes(e.code)) {
      /* 3 */
      timelineNavItemRefs[next].current.focus();
    } else if ([L_ARROW_KEYCODE, U_ARROW_KEYCODE].includes(e.code)) {
      /* 4 */
      timelineNavItemRefs[prev].current.focus();
    }
  }

  const childrenWithProps = React.Children.map(
    timelineNavItems(),
    // TODO: improve `any` type
    (child: any, i: number) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error TODO: fix "No overload matches this call" error
        return React.cloneElement<Props>(child, {
          id: idVar[i],
          ['aria-labelledby']: ariaLabelledByVar[i],
        });
      }
      return child;
    },
  );
  const componentClassName = clsx(styles['timeline-nav'], className, {});

  const iconVariant = (itemVariant: TimelineNavPanelVariant, i: number) => {
    switch (itemVariant) {
      case 'success':
        return (
          <Icon
            className={styles['timeline-nav__icon']}
            color={EdsThemeColorBackgroundGradeCompleteDefault}
            name="check-circle"
            purpose="decorative"
          />
        );
      case 'warning':
        return (
          <Icon
            className={styles['timeline-nav__icon']}
            color={EdsThemeColorBackgroundGradeReviseDefault}
            name="error"
            purpose="decorative"
          />
        );
      case 'error':
        return (
          <Icon
            className={styles['timeline-nav__icon']}
            color={EdsThemeColorBackgroundGradeStopDefault}
            name="cancel"
            purpose="decorative"
          />
        );
      case 'number':
        return (
          <NumberIcon
            aria-label={`step ${i}`}
            className={styles['timeline-nav__icon']}
            number={i}
            numberIconTitle="incomplete step"
          />
        );
      case 'incomplete':
        return (
          <Icon
            className={styles['timeline-nav__icon']}
            color={EdsThemeColorBorderNeutralSubtle}
            name="star-outline"
            purpose="decorative"
          />
        );
      case 'complete':
        return (
          <Icon
            className={styles['timeline-nav__icon']}
            color={EdsThemeColorBackgroundGradeCompleteDefault}
            name="star"
            purpose="decorative"
          />
        );
      default:
        return (
          <NumberIcon
            aria-label="incomplete step"
            className={styles['timeline-nav__icon']}
            incomplete={true}
            number={i}
            numberIconTitle="incomplete step"
          />
        );
    }
  };

  return (
    <div className={componentClassName} {...other}>
      <div className={styles['timeline-nav__nav']}>
        <ol
          className={clsx(styles['timeline-nav__list'], {
            [styles['timeline-nav__list--ordered']]: variant === 'ordered',
          })}
          role="tablist"
        >
          {/* TODO: improve `any` type */}
          {timelineNavItems().map((tab: TimelineNavItem, i: number) => {
            console.log(tab);
            const isActive = activeIndexState === i;
            const itemVariant = variant && tab.props.variant;
            return (
              <li
                className={clsx(
                  styles['timeline-nav__item'],

                  isActive && styles['eds-is-active'],
                )}
                key={'timeline-nav-item-' + i}
                role="presentation"
              >
                <a
                  aria-controls={idVar[i]}
                  aria-label={tab.props.ariaLabel}
                  aria-selected={isActive}
                  className={styles['timeline-nav__link']}
                  href={`#${idVar[i]}`}
                  id={ariaLabelledByVar[i]}
                  key={'timeline-nav-link' + i}
                  onClick={(e) => {
                    e.preventDefault();
                    onOpen(i);
                  }}
                  onKeyDown={onKeyDown}
                  ref={timelineNavItemRefs[i]}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                >
                  <div
                    className={clsx(
                      styles['timeline-nav__link-left'],
                      itemVariant && styles['timeline-nav__link-hidden'],
                    )}
                  >
                    {iconVariant(itemVariant, i)}
                  </div>
                  {tab.props.title}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
      <div className={styles['timeline-nav__body']}>
        {childrenWithProps[activeIndexState]}
      </div>
    </div>
  );
};

TimelineNav.Panel = TimelineNavPanel;
