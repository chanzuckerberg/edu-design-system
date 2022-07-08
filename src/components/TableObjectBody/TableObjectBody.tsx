import clsx from 'clsx';
import React, { ReactNode, useEffect, useState, useRef, UIEvent } from 'react';
import styles from '../TableObject/TableObject.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TableObjectBody} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const TableObjectBody = ({ children, className, ...other }: Props) => {
  /**
   * Set states and refs
   * 1) Set isEnd state: set to true, right shadow gradient activates. Removed when false
   * 2) Set isState state: set to true, left shadow gradient activates. Removed when false
   * 3) Target table body and table body inner DOM elements
   */
  const [isEnd, setIsEnd] = useState(true); /* 1 */
  const [isStart, setIsStart] = useState(false); /* 2 */
  const tableObjectBodyRef = useRef<HTMLDivElement>(null); /* 3 */
  const tableObjectBodyInnerRef = useRef<HTMLDivElement>(null); /* 3 */

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
    const table =
      tableObjectBodyRef.current &&
      tableObjectBodyRef.current.querySelector('.table'); /* 1 */
    if (table) {
      const tableObjectBodyWidth =
        tableObjectBodyRef.current.clientWidth; /* 2 */
      const tableWidth = table.clientWidth; /* 2 */
      const tableOffScreen =
        table.clientWidth - tableObjectBodyRef?.current?.clientWidth; /* 2 */

      if (tableWidth <= tableObjectBodyWidth) {
        /* 3 */
        setIsEnd(false);
        setIsStart(false);
      } else if (
        tableObjectBodyInnerRef.current &&
        tableObjectBodyInnerRef.current.scrollLeft > 0 &&
        tableObjectBodyInnerRef.current.scrollLeft < tableOffScreen
      ) {
        /* 4 */
        setIsEnd(true);
        setIsStart(true);
      } else if (
        tableObjectBodyInnerRef.current &&
        tableObjectBodyInnerRef.current.scrollLeft >= tableOffScreen
      ) {
        /* 5 */
        setIsEnd(false);
        setIsStart(true);
      } else {
        /* 6 */
        setIsEnd(true);
        setIsStart(false);
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
    styles['table-object__body'],
    className,
    isStart && styles['eds-is-overflow-left'],
    isEnd && styles['eds-is-overflow-right'],
  );
  return (
    <div className={componentClassName} ref={tableObjectBodyRef} {...other}>
      <div
        className={styles['table-object__body-inner']}
        onScroll={handleOnScroll}
        ref={tableObjectBodyInnerRef}
      >
        {children}
      </div>
    </div>
  );
};
