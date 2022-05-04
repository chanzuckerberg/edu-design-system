import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Droppable } from 'react-beautiful-dnd';
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
}: Props) => {
  const componentClassName = clsx(styles['drag-drop-container'], className, {});
  return (
    <div className={componentClassName}>
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
};
