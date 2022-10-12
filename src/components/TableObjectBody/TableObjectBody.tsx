import clsx from 'clsx';
import React, { ReactNode, useEffect, useState, useRef, UIEvent } from 'react';
import styles from '../TableObject/TableObject.module.css';

export interface Props {
  /**
   * Behavior variations:
   * - **overflow** renders a table object body that overflows horizontally off the screen
   */
  behavior?: 'overflow';
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
 * Component TableObjectBody is used in the TableObject component to display the content with shadow gradient and overflow scroll behaviour.
 */
export const TableObjectBody = ({
  behavior,
  children,
  className,
  ...other
}: Props) => {
  /**
   * Set states and refs
   *
   * Set isEnd state: set to true, right shadow gradient activates. Removed when false.
   */
  const [isEnd, setIsEnd] = useState(true);
  /**
   * Set isState state: set to true, left shadow gradient activates. Removed when false.
   */
  const [isStart, setIsStart] = useState(false);
  /**
   * Target table body and table body inner DOM elements.
   */
  const tableObjectBodyRef = useRef<HTMLDivElement>(null);
  const tableObjectBodyInnerRef = useRef<HTMLDivElement>(null);

  /**
   * Set right and left gradients on tables
   */
  const setShadows = () => {
    /**
     * Target the actual table inside table object body.
     */
    const table =
      tableObjectBodyRef.current &&
      tableObjectBodyRef.current.querySelector('table');
    if (table) {
      /**
       * Get the width of the table offscreen when table overflows.
       */
      const tableObjectBodyWidth = tableObjectBodyRef.current.clientWidth;
      const tableWidth = table.clientWidth;
      const tableOffScreen =
        table.clientWidth - tableObjectBodyRef?.current?.clientWidth;

      if (tableWidth <= tableObjectBodyWidth) {
        /**
         * If table width is less than or equal to table object body width, remove all shadows.
         */
        setIsEnd(false);
        setIsStart(false);
      } else if (
        tableObjectBodyInnerRef.current &&
        tableObjectBodyInnerRef.current.scrollLeft > 0 &&
        tableObjectBodyInnerRef.current.scrollLeft < tableOffScreen
      ) {
        /**
         * If table object body inner scroll isn't all the way to the left or to the right, turn all shadows on.
         */
        setIsEnd(true);
        setIsStart(true);
      } else if (
        tableObjectBodyInnerRef.current &&
        tableObjectBodyInnerRef.current.scrollLeft >= tableOffScreen
      ) {
        /**
         * If table body inner scroll is >= to width of table offscreen, turn off right shadow and turn left shadow on.
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
   * Table body inner onscroll
   *
   * Set shadows when user scrolls the table right and left.
   */
  const handleOnScroll = (e: UIEvent<HTMLElement>): void => {
    if (behavior === 'overflow') {
      setShadows();
    }
  };

  /**
   * Set shadows when component is updated/loaded
   */
  // FIXME
  // eslint-disable-next-line @chanzuckerberg/edu-react/use-effect-deps-presence
  useEffect(() => {
    if (behavior === 'overflow') {
      setShadows();
      window.addEventListener('resize', setShadows);
      return () => {
        window.removeEventListener('resize', setShadows);
      };
    }
  });

  const componentClassName = clsx(
    styles['table-object__body'],
    behavior === 'overflow' && styles['table-object__body--overflow'],
    isStart && styles['eds-is-overflow-left'],
    isEnd && styles['eds-is-overflow-right'],
    className,
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
