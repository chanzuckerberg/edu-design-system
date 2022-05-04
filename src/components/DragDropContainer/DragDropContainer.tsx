import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { ColumnType, CardType } from '../DragDrop/DragDrop';
import styles from '../DragDrop/DragDrop.module.css';
import DragDropItem from '../DragDropItem';

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
export const DragDropContainer = ({
  className,
  column,
  cards,
  children,
  index,
}: Props) => {
  const componentClassName = clsx(styles['drag-drop-container'], className, {});
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => {
        return (
          <div
            className={componentClassName}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Droppable droppableId={column.id} type="card">
              {(provided) => (
                <div
                  className={clsx(styles['drag-drop-container--list'])}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {cards.map((card, index) => (
                    <DragDropItem card={card} index={index} key={card.id}>
                      {children}
                    </DragDropItem>
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
