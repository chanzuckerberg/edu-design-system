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
 * Primary UI component for user interaction
 */
export const OverflowList = ({ className, children, ...other }: Props) => {
  /**
   * Set states and refs
   * 1) Set isEnd state: set to true, right shadow gradient activates. Removed when false
   * 2) Set isState state: set to true, left shadow gradient activates. Removed when false
   * 3) Target table body and table body inner DOM elements
   */
  const [isEnd, setIsEnd] = useState(true); /* 1 */
  const [isStart, setIsStart] = useState(false); /* 2 */
  const overflowListRef = useRef() as MutableRefObject<HTMLDivElement>; /* 3 */
  const overflowListInnerRef =
    useRef() as MutableRefObject<HTMLUListElement>; /* 3 */
  /**
   * Set right and left gradients on tables
   * 1) Target the actual table inside table object body
   * 2) Get the width of the table offscreen when table overflows
   * 3) If table width is less than or equal to table object body width, remove all shadows
   * 4) If table object body inner scroll isn't all the way to the left or to the right, turn all shadows on
   * 5) If table body inner scroll is >= to width of table offscreen, turn off right shadow and turn left shadow on
   * 6) Else, set the right shadow to true and the left shadow to false
   */
  const setShadows = () => {
    const overflowListItems = Array.from(
      overflowListInnerRef.current.children,
    ); /* 1 */
    let childrenWidth = 0;

    overflowListItems.forEach(function (item) {
      const itemMarginLeft = parseInt(
        getComputedStyle(item).marginLeft.slice(0, -2),
      );
      childrenWidth += item.clientWidth + itemMarginLeft;
    });
    if (overflowListItems) {
      const overflowListWidth = overflowListRef.current.clientWidth; /* 2 */
      const totalItemsWidth = childrenWidth; /* 2 */
      const overflowListOffscreen =
        totalItemsWidth - overflowListRef.current.clientWidth; /* 2 */

      console.log('Total Items Width ' + totalItemsWidth);
      console.log('Overflow List Width ' + overflowListWidth);
      console.log(
        'Overflow List scroll left ' + overflowListInnerRef.current.scrollLeft,
      );
      if (totalItemsWidth <= overflowListWidth) {
        /* 3 */
        setIsEnd(false);
        setIsStart(false);
        console.log('REMOVE BOTH SHADOWS');
      } else if (
        overflowListInnerRef.current.scrollLeft > 0 &&
        overflowListInnerRef.current.scrollLeft < overflowListOffscreen
      ) {
        /* 4 */
        setIsEnd(true);
        setIsStart(true);
        console.log('SHOW BOTH SHADOWS');
      } else if (
        overflowListInnerRef.current.scrollLeft >= overflowListOffscreen
      ) {
        /* 5 */
        setIsEnd(false);
        setIsStart(true);
        console.log('SHOW ONLY RIGHT SHADOW');
      } else {
        /* 6 */
        setIsEnd(true);
        setIsStart(false);
        console.log('SHOW ONLY LEFT SHADOW');
      }
    }
  };

  /**
   * Table body inner onscroll
   * 1) Set shadows when user scrolls the table right and left
   */
  const handleOnScroll = (e: UIEvent<HTMLElement>): void => {
    setShadows(); /* 1 */
  };

  /**
   * Use effect lifecycle
   * 1) Set shadows when component is updated/loaded
   * 2) Set window resize listener
   * 3) Remove window resize listener
   */
  useEffect(() => {
    setShadows(); /* 1 */
    window.addEventListener('resize', setShadows); /* 2 */
    return () => {
      window.removeEventListener('resize', setShadows); /* 3 */
    };
  });

  const componentClassName = clsx(
    styles['overflow-list'],
    className,
    isStart && styles['eds-is-overflow-left'],
    isEnd && styles['eds-is-overflow-right'],
  );
  return (
    <div className={componentClassName} ref={overflowListRef} {...other}>
      <ul
        className={styles['overflow-list__inner']}
        ref={overflowListInnerRef}
        onScroll={handleOnScroll}
      >
        {children}
      </ul>
    </div>
  );
};
