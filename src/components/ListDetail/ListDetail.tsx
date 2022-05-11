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
import styles from './ListDetail.module.css';
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
import ListDetailPanel, { ListDetailPanelVariant } from '../ListDetailPanel';

export interface Props {
  /**
   * The aria-labelledby attribute creates a relationship between the tab list and the tab panels
   */
  ariaLabelledBy?: string;
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
   * Function passed down from higher level component into ListDetail
   */
  listDetailOnClick?: () => void;
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
   * List detail item tab name
   */
  title?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * List Detail Component
 * 1) Provides a list-view pane for item labels/titles, and a details pane for each item's content. When an item in the list is selected, the details pane is updated.
 */
export const ListDetail = ({
  className,
  children,
  variant,
  activeIndex = 0,
  listDetailOnClick,
  ariaLabelledBy,
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
   * Set the only children components allowed within <ListDetail> to be ListDetailPanel
   */
  const listDetailItems = useCallback(() => {
    return allByType(children, ListDetailPanel);
  }, [children]);

  const listDetailItemRefs = listDetailItems().map(() => React.createRef());

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
      listDetailItemRefs[activeIndex].current.focus();
    }
  }, [prevActiveIndex, activeIndex, listDetailItemRefs]);

  /**
   * Autogenerate ids on tabs if not defined.
   */
  useEffect(() => {
    setId(
      // TODO: improve `any` type
      listDetailItems().map((item: any) =>
        item.props.id ? item.props.id : getUID(item),
      ),
    );
    setAriaLabelledBy(
      // TODO: improve `any` type
      listDetailItems().map((item: any) =>
        item.props.ariaLabelledBy ? item.props.ariaLabelledBy : getUID(item),
      ),
    );
  }, [listDetailItems, getUID]);

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
    let activeListDetailPanel = null;
    // TODO: improve `any` type
    listDetailItemRefs.map((item: any) => {
      if (item.current === document.activeElement) {
        activeListDetailPanel = item;
      }
      return item;
    });

    if (!activeListDetailPanel) return;

    const index = listDetailItemRefs.indexOf(activeListDetailPanel); /* 2 */
    const next =
      index === listDetailItemRefs.length - 1 ? 0 : index + 1; /* 2 */
    const prev =
      index === 0 ? listDetailItemRefs.length - 1 : index - 1; /* 2 */

    if ([R_ARROW_KEYCODE, D_ARROW_KEYCODE].includes(e.code)) {
      /* 3 */
      listDetailItemRefs[next].current.focus();
    } else if ([L_ARROW_KEYCODE, U_ARROW_KEYCODE].includes(e.code)) {
      /* 4 */
      listDetailItemRefs[prev].current.focus();
    }
  }

  const childrenWithProps = React.Children.map(
    listDetailItems(),
    // TODO: improve `any` type
    (child: any, i: number) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error TODO: fix "No overload matches this call" error
        return React.cloneElement<Props>(child, {
          id: idVar[i],
          ariaLabelledBy: ariaLabelledByVar[i],
        });
      }
      return child;
    },
  );
  const componentClassName = clsx(styles['list-detail'], className, {});

  const iconVariant = (itemVariant: ListDetailPanelVariant, i: number) => {
    switch (itemVariant) {
      case 'success':
        return (
          <Icon
            className={styles['list-detail__icon']}
            color={EdsThemeColorBackgroundGradeCompleteDefault}
            name="check-circle"
            purpose="decorative"
          />
        );
      case 'warning':
        return (
          <Icon
            className={styles['list-detail__icon']}
            color={EdsThemeColorBackgroundGradeReviseDefault}
            name="error"
            purpose="decorative"
          />
        );
      case 'error':
        return (
          <Icon
            className={styles['list-detail__icon']}
            color={EdsThemeColorBackgroundGradeStopDefault}
            name="cancel"
            purpose="decorative"
          />
        );
      case 'number':
        return <span className={styles['list-detail__number']}>{i}</span>;
      case 'incomplete':
        return (
          <Icon
            className={styles['list-detail__icon']}
            color={EdsThemeColorBorderNeutralSubtle}
            name="star" /* TODO: need to add star-outline variant to Icon */
            purpose="decorative"
          />
        );
      case 'complete':
        return (
          <Icon
            className={styles['list-detail__icon']}
            color={EdsThemeColorBackgroundGradeCompleteDefault}
            name="star"
            purpose="decorative"
          />
        );
      default:
        return '';
    }
  };

  return (
    <div className={componentClassName} {...other}>
      <div className={styles['list-detail__nav']}>
        <ol
          className={clsx(styles['list-detail__list'], {
            [styles['list-detail__list--ordered']]: variant === 'ordered',
          })}
          role="tablist"
        >
          {/* TODO: improve `any` type */}
          {listDetailItems().map((tab: any, i: number) => {
            const isActive = activeIndexState === i;
            const itemVariant = variant && tab.props.variant;
            return (
              <li
                className={clsx(
                  styles['list-detail__item'],

                  isActive && styles['eds-is-active'],
                )}
                key={'list-detail-item-' + i}
                role="presentation"
              >
                <a
                  aria-controls={idVar[i]}
                  aria-label={tab.props.ariaLabel}
                  aria-selected={isActive}
                  className={styles['list-detail__link']}
                  href={`#${idVar[i]}`}
                  id={ariaLabelledByVar[i]}
                  key={'list-detail-link' + i}
                  onClick={(e) => {
                    e.preventDefault();
                    onOpen(i);
                  }}
                  onKeyDown={onKeyDown}
                  ref={listDetailItemRefs[i]}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                >
                  <div
                    className={clsx(styles['list-detail__link-left'], {
                      [styles['list-detail__link-hidden']]: [
                        'bullet',
                        'complete',
                        'number',
                        'success',
                        'warning',
                        'error',
                      ].includes(itemVariant),
                    })}
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
      <div className={styles['list-detail__body']}>
        {childrenWithProps[activeIndexState]}
      </div>
    </div>
  );
};

ListDetail.Panel = ListDetailPanel;
