import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { ColumnType, CardType } from '../DragDrop/DragDrop';
import styles from '../DragDrop/DragDrop.module.css';
import DragDropCard from '../DragDropCard';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  column: ColumnType;
  cards: CardType[];
  index: number;
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DragDropColumn = ({
  className,
  column,
  cards,
  children,
  index,
}: Props) => {
  const componentClassName = clsx(styles['drag-drop-column'], className, {});
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => {
        return (
          <div
            className={componentClassName}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div
              className={clsx(styles['drag-drop-column--title'])}
              {...provided.dragHandleProps}
            >
              {column.title}
            </div>
            <Droppable droppableId={column.id} type="card">
              {(provided) => (
                <div
                  className={clsx(styles['drag-drop-column--list'])}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {cards.map((card, index) => (
                    <DragDropCard card={card} index={index} key={card.id}>
                      {children}
                    </DragDropCard>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};
