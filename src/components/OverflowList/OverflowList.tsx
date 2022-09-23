import clsx from 'clsx';
import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  UIEvent,
  MutableRefObject,
} from 'react';
import styles from './OverflowList.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * ```ts
 * import {OverflowList} from "@chanzuckerberg/eds";
 * ```
 *
 * Component that is used to maintain the object body with content overflowed.
 */
export const OverflowList = ({ className, children, ...other }: Props) => {
  /**
   * Set states and refs
   *
   * Set isEnd state: set to true, right shadow gradient activates. Removed when false
   */
  const [isEnd, setIsEnd] = useState(true);
  /**
   * Set isState state: set to true, left shadow gradient activates. Removed when false
   */
  const [isStart, setIsStart] = useState(false);
  /**
   * Target overflow list and overflow list inner DOM elements
   */
  const overflowListRef = useRef() as MutableRefObject<HTMLDivElement>;
  const overflowListInnerRef = useRef() as MutableRefObject<HTMLUListElement>;
  /**
   * Set right and left gradients on tables.
   */
  const setShadows = () => {
    /**
     * Target the actual overflow list inside overflow list
     */
    const overflowListItems = Array.from(overflowListInnerRef.current.children);
    let childrenWidth = 0;

    overflowListItems.forEach(function (item) {
      const itemMarginLeft = parseInt(
        getComputedStyle(item).marginLeft.slice(0, -2),
      );
      childrenWidth += item.clientWidth + itemMarginLeft;
    });
    if (overflowListItems) {
      /**
       * Get the width of the overflow list offscreen when overflow list overflows
       */
      const overflowListWidth = overflowListRef.current.clientWidth;
      const totalItemsWidth = childrenWidth;
      const overflowListOffscreen =
        totalItemsWidth - overflowListRef.current.clientWidth;

      if (totalItemsWidth <= overflowListWidth) {
        /**
         * If overflow list width is less than or equal to overflow list width, remove all shadows.
         */
        setIsEnd(false);
        setIsStart(false);
      } else if (
        overflowListInnerRef.current.scrollLeft > 0 &&
        overflowListInnerRef.current.scrollLeft < overflowListOffscreen
      ) {
        /**
         * If overflow list inner scroll isn't all the way to the left or to the right, turn all shadows on.
         */
        setIsEnd(true);
        setIsStart(true);
      } else if (
        overflowListInnerRef.current.scrollLeft >= overflowListOffscreen
      ) {
        /**
         * If overflow list inner scroll is >= to width of overflow list offscreen, turn off right shadow and turn left shadow on.
         */
        setIsEnd(false);
        setIsStart(true);
      } else {
        /**
         * Else, set the right shadow to true and the left shadow to false.
         */
        setIsEnd(true);
        setIsStart(false);
      }
    }
  };

  /**
   * Overflow list inner onscroll
   */
  const handleOnScroll = (e: UIEvent<HTMLElement>): void => {
    /**
     * Set shadows when user scrolls the overflow list right and left
     */
    setShadows();
  };

  /**
   * Set shadows when component is updated/loaded
   */
  useEffect(() => {
    setShadows();
    window.addEventListener('resize', setShadows);
    return () => {
      window.removeEventListener('resize', setShadows);
    };
  });

  const componentClassName = clsx(
    styles['overflow-list'],
    isStart && styles['eds-is-overflow-left'],
    isEnd && styles['eds-is-overflow-right'],
    className,
  );
  return (
    <div className={componentClassName} ref={overflowListRef} {...other}>
      <ul
        className={styles['overflow-list__inner']}
        onScroll={handleOnScroll}
        ref={overflowListInnerRef}
        // TODO: add correct aria role for overflow list
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        {children}
      </ul>
    </div>
  );
};
