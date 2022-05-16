import clsx from 'clsx';
import React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import styles from '../DragDrop/DragDrop.module.css';
import { ItemType } from '../DragDrop/DragDropTypes';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * The contents of an item; includes id, title (optional) and children (optional)
   */
  item: ItemType;
  /** Item's original indexed position */
  index: number;
  /**
   * DragDrop items can be dragged by grabbing a handle, or dragged by grabbing anywhere on the item (default)
   */
  dragByHandle: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const DragDropItem = ({
  className,
  dragByHandle,
  item,
  index,
}: Props) => {
  const componentClassName = clsx(styles['drag-drop-item'], className, {});
  // `id` is injected in <DragDrop />
  return item.id ? (
    <Draggable draggableId={item.id} index={index}>
      {(provided: DraggableProvided) => {
        return dragByHandle ? (
          <div
            className={componentClassName}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div
              aria-label="Handle for draggable item"
              className={clsx(styles['drag-drop-item--handle'])}
              {...provided.dragHandleProps}
            >
              {item.handle}
            </div>
            {item.children}
          </div>
        ) : (
          <div
            className={componentClassName}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {item.title && (
              <div className={clsx(styles['drag-drop-item--title'])}>
                {item.title}
              </div>
            )}
            {item.children}
          </div>
        );
      }}
    </Draggable>
  ) : null;
};
