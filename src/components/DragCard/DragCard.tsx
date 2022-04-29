import clsx from 'clsx';
import type { Identifier, XYCoord } from 'dnd-core';
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DragItemTypes } from '../../util/dragItemTypes';
import styles from '../DragDrop/DragDrop.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  key?: any;
  index?: any;
  id?: any;
  children?: any;
  moveCard?: any;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

/**
 * Primary UI component for user interaction
 */
export const DragCard = ({
  className,
  id,
  children,
  moveCard,
  index,
}: Props) => {
  const componentClassName = clsx(
    styles['drag-card'],
    className,
    // behavior === 'horizontal' && styles['drag-card'],
    // size === 'sm' && styles['definition-list--sm'],
  );
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: DragItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: DragItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      className={componentClassName}
      data-handler-id={handlerId}
      ref={ref}
      style={{ opacity }}
    >
      {children}
    </div>
  );
};
