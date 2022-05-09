import clsx from 'clsx';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ItemType } from '../DragDrop/DragDrop';
import styles from '../DragDrop/DragDrop.module.css';

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
}

/**
 * Primary UI component for user interaction
 */
export const DragDropItem = ({ className, item, index }: Props) => {
  const componentClassName = clsx(styles['drag-drop-item'], className, {});
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => {
        return (
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
  );
};
