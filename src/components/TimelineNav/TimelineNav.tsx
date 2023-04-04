import { clsx } from 'clsx';
import type { KeyboardEventHandler, ReactNode } from 'react';
import React, { useCallback, useId, useEffect, useRef, useState } from 'react';
import { allByType } from 'react-children-by-type';
import {
  L_ARROW_KEYCODE,
  U_ARROW_KEYCODE,
  R_ARROW_KEYCODE,
  D_ARROW_KEYCODE,
  ENTER_KEYCODE,
  SPACEBAR_KEYCODE,
} from '../../util/keycodes';
import Button from '../Button';
import Icon from '../Icon';
import NumberIcon from '../NumberIcon';
import type { TimelineNavPanelVariant } from '../TimelineNavPanel';
import TimelineNavPanel from '../TimelineNavPanel';
import styles from './TimelineNav.module.css';

export interface Props {
  /**
   * The aria-labelledby attribute creates a relationship between the tab list and the tab panels
   */
  'aria-labelledby'?: string;
  /**
   * Passed down to initially set the activeIndex state
   */
  activeIndex?: number;
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
   * Timeline nav item tab name
   */
  title?: string;
  /**
   * Slot for node to appear to the right of the title. Typically used to include a Badge, Button, or other component
   */
  titleAfter?: ReactNode;
}

export interface TimelineNavItem {
  props: {
    'aria-label': string;
    children: ReactNode;
    completed?: boolean;
    title?: string;
    titleAfter?: ReactNode;
    variant?: TimelineNavPanelVariant;
  };
}

/**
 * `import {TimelineNav} from "@chanzuckerberg/eds";`
 *
 * Provides a list-view pane for item labels/titles, and a details pane for each item's content.
 * When an item in the list is selected, the details pane is updated.
 */
export const TimelineNav = ({
  activeIndex = 0,
  children,
  className,
  id,
  onChange,
  title,
  titleAfter,
  ...other
}: Props) => {
  /**
   * Initialize states, constants, and refs
   */
  const ref = useRef<number | undefined>();
  const backRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [activeIndexState, setActiveIndexState] = useState(
    activeIndex ? activeIndex : 0,
  );
  /**
   * Set the only children components allowed within <TimelineNav> to be TimelineNavPanel
   */
  const timelineNavItems = useCallback(() => {
    return allByType(children, TimelineNavPanel);
  }, [children]);

  const timelineNavItemRefs = timelineNavItems().map(() =>
    // This usage of React.createRef is intentional.
    // eslint-disable-next-line @chanzuckerberg/edu-react/no-create-ref-in-function-component
    React.createRef<HTMLAnchorElement>(),
  );

  // we can't use the hook in an iterator like this, so generate the base and increment if needed
  const [idVar, setId] = useState<string[]>([]);
  const [ariaLabelledByVar, setAriaLabelledBy] = useState<string[]>([]);

  /**
   * Get previous prop
   *
   * This is used to compare the previous prop to the current prop.
   */
  function usePrevious(activeIndex: number) {
    // eslint-disable-next-line @chanzuckerberg/edu-react/use-effect-deps-presence
    useEffect(() => {
      ref.current = activeIndex;
    });
    return ref.current;
  }

  /**
   * Use effect
   *
   * Set prevActiveIndex to previous value prop.
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
      timelineNavItemRefs[activeIndex].current?.focus();
    }
  }, [prevActiveIndex, activeIndex, timelineNavItemRefs]);

  const generatedId = useId();
  const idPrefix = id || generatedId;
  const generatedAriaLabelledBy = useId();
  const ariaLabelledByPrefix =
    other['aria-labelledby'] || generatedAriaLabelledBy;

  /**
   * Autogenerate ids on tabs if not defined.
   */
  useEffect(() => {
    setId(
      timelineNavItems().map((item, index) =>
        item.props.id ? item.props.id : `${idPrefix}-${index}`,
      ),
    );
    setAriaLabelledBy(
      timelineNavItems().map((item, index) =>
        item.props['aria-labelledby']
          ? item.props['aria-labelledby']
          : `${ariaLabelledByPrefix}-${index}`,
      ),
    );
  }, [timelineNavItems, idPrefix, ariaLabelledByPrefix]);

  /**
   * On open
   */
  function onOpen(index: number) {
    // On click of a tab, set activeIndexState to index of tab being clicked.
    setActiveIndexState(index);
    setIsActive(true);

    if (onChange) {
      // If function is passed into onChange prop, run that on click.
      onChange(index);
    }
  }

  /**
   * On KeyDown
   *
   * Find active tab. If there isn't one, do nothing on Keydown.
   */
  const onKeyDown: KeyboardEventHandler = function (e) {
    let activeTimelineNavPanel = null;
    timelineNavItemRefs.map((item) => {
      if (item.current === document.activeElement) {
        activeTimelineNavPanel = item;
      }
      return item;
    });

    if (!activeTimelineNavPanel) return;

    // Set active tab, next tab, and previous tab.
    const index = timelineNavItemRefs.indexOf(activeTimelineNavPanel);
    const next = index === timelineNavItemRefs.length - 1 ? 0 : index + 1;
    const prev = index === 0 ? timelineNavItemRefs.length - 1 : index - 1;

    if ([R_ARROW_KEYCODE, D_ARROW_KEYCODE].includes(e.key)) {
      // If right or down arrow key keyed, focus on next tab.
      timelineNavItemRefs[next].current?.focus();
    } else if ([L_ARROW_KEYCODE, U_ARROW_KEYCODE].includes(e.key)) {
      // If left or up arrow key keyed, focus on the previous tab.
      timelineNavItemRefs[prev].current?.focus();
    } else if (e.key === ENTER_KEYCODE || e.key === SPACEBAR_KEYCODE) {
      setTimeout(() => {
        /**
         * If enter or spacebar keyed, set focus to the 'Back' button. This
         * is wrapped in a setTimeout() method to ensure that document.activeElement
         * gets set properly.
         *
         * Note: this may be improved by identifying what has a delayed rendering
         */
        backRef.current?.focus();
      }, 500);
    }
  };

  const childrenWithProps = React.Children.map(
    timelineNavItems(),
    (child, i) => {
      // Checking isValidElement is the safe way and avoids a typescript error too.
      if (React.isValidElement(child)) {
        return React.cloneElement<Props>(child, {
          id: idVar[i],
          ['aria-labelledby']: ariaLabelledByVar[i],
        });
      }
      return child;
    },
  );
  const componentClassName = clsx(
    styles['timeline-nav'],
    isActive && styles['eds-is-active'],
    className,
  );

  const iconVariant = (itemVariant: TimelineNavPanelVariant, i: number) => {
    switch (itemVariant) {
      case 'success':
        return (
          <Icon
            className={clsx(
              styles['timeline-nav__icon'],
              styles['timeline-nav__icon--success'],
            )}
            name="check-circle"
            purpose="decorative"
          />
        );
      case 'warning':
        return (
          <Icon
            className={clsx(
              styles['timeline-nav__icon'],
              styles['timeline-nav__icon--warning'],
            )}
            name="error"
            purpose="decorative"
          />
        );
      case 'error':
        return (
          <Icon
            className={clsx(
              styles['timeline-nav__icon'],
              styles['timeline-nav__icon--error'],
            )}
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
            className={clsx(
              styles['timeline-nav__icon'],
              styles['timeline-nav__icon--incomplete'],
            )}
            name="star-outline"
            purpose="decorative"
          />
        );
      case 'complete':
        return (
          <Icon
            className={clsx(
              styles['timeline-nav__icon'],
              styles['timeline-nav__icon--success'],
            )}
            name="star"
            purpose="decorative"
          />
        );
      default:
        return (
          <NumberIcon
            aria-label="incomplete step"
            className={styles['timeline-nav__icon']}
            incomplete
            number={i}
            numberIconTitle="incomplete step"
          />
        );
    }
  };

  /**
   * onBack (used by 'Back' button on < lg viewports)
   *
   * Return focus to the button that was clicked to open the current panel;
   * activeIndexState holds the index of the last nav item selected in the
   * timelinNavItemRefs array.
   */
  const onBack = () => {
    const element = timelineNavItemRefs[activeIndexState].current;

    if (element) {
      /**
       * Return focus to the button that was clicked to open the current panel;
       * activeIndexState holds the index of the last nav item selected in the
       * timelinNavItemRefs array.
       */
      element.focus();
      /**
       * Because the 'Back' button's onFocus listener removes the selected nav
       * item from the tab order, we need to manually insert it back into the tab
       * order by setting its tabIndex back to "0".
       */
      element.tabIndex = 0;
    }

    /**
     * Body panel is visible/hidden depending on true/false value of isActive;
     * hide it by setting isActive to false.
     */
    setIsActive(false);
  };

  /**
   * resetTabIndex (used by 'Back' button on <lg viewports)
   *
   * This fixes an issue where a keyboard user who has focus on the
   * 'Back' button could use shift-tab to put keyboard focus back
   * on the menu, which is currently off-canvas. To prevent this
   * unwanted behavior, we set the currently active menu item's
   * tabIndex to "-1" so that it can't be focusable in sequential
   * keyboard navigation. The 'Back' button should be the only way
   * users are able to return to the nav list, both visually and
   * via keyboard navigation.
   * See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex#sect1
   */
  const resetTabIndex = () => {
    const element = timelineNavItemRefs[activeIndexState].current;

    if (element) {
      element.tabIndex = -1;
    }
  };

  return (
    <div className={componentClassName} {...other}>
      <div className={styles['timeline-nav__nav']}>
        <ol
          className={clsx(
            styles['timeline-nav__list'],
            styles['timeline-nav__list--ordered'],
            isActive && styles['eds-is-active'],
          )}
          role="tablist"
        >
          {timelineNavItems().map((tab, i) => {
            const isActive = activeIndexState === i;
            const itemVariant = tab.props.variant;
            return (
              <li
                className={clsx(
                  styles['timeline-nav__item'],
                  isActive && styles['eds-is-active'],
                )}
                // FIXME
                // eslint-disable-next-line react/no-array-index-key
                key={'timeline-nav-item-' + i}
                role="presentation"
              >
                <a
                  aria-controls={idVar[i]}
                  aria-label={tab.props['aria-label']}
                  aria-selected={isActive}
                  className={styles['timeline-nav__link']}
                  href={`#${idVar[i]}`}
                  id={ariaLabelledByVar[i]}
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
                  <div className={clsx(styles['timeline-nav__link-title'])}>
                    {tab.props.title}
                    {tab.props.titleAfter && (
                      <div
                        className={clsx(
                          styles['timeline-nav__link-title-after'],
                        )}
                      >
                        {tab.props.titleAfter}
                      </div>
                    )}
                  </div>
                  <Icon
                    className={clsx(styles['timeline-nav__link-arrow'])}
                    name="arrow-forward"
                    purpose="informative"
                    size="var(--eds-size-2-and-half)"
                    title="forward"
                  />
                </a>
              </li>
            );
          })}
        </ol>
      </div>
      <div
        className={clsx(
          styles['timeline-nav__body'],
          isActive && styles['eds-is-active'],
        )}
      >
        <Button
          className={clsx(styles['timeline-nav__back'])}
          onClick={onBack}
          onFocus={resetTabIndex}
          ref={backRef}
          status="neutral"
          variant="link"
        >
          <Icon name="arrow-back" purpose="informative" title="back" />
          Back
        </Button>
        {childrenWithProps[activeIndexState]}
      </div>
    </div>
  );
};

TimelineNav.Panel = TimelineNavPanel;
