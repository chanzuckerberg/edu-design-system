import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CardType } from '../DragDrop/DragDrop';
import styles from '../DragDrop/DragDrop.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  task: CardType;
  index: number;
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DragDropCard = ({ className, task, index, children }: Props) => {
  const componentClassName = clsx(styles['drag-drop-card'], className, {});
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => {
        return (
          <div
            className={componentClassName}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className={clsx(styles['drag-drop-card--title'])}>
              {task.content}
            </div>
            {children}
          </div>
        );
      }}
    </Draggable>
  );
};
