import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ItemType } from '../DragDrop/DragDrop';
import styles from '../DragDrop/DragDrop.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  item: ItemType;
  index: number;
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DragDropItem = ({ className, item, index, children }: Props) => {
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
            <div className={clsx(styles['drag-drop-item--title'])}>
              {item.content}
            </div>
            {children}
          </div>
        );
      }}
    </Draggable>
  );
};
