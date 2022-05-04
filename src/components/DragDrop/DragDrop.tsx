import clsx from 'clsx';
import React, { useState } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import styles from './DragDrop.module.css';
import DragDropColumn from '../DragDropColumn';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  cards?: Cards;
  columns?: Columns;
  columnOrder?: string[];
}
export type Cards = {
  [any: string]: CardType;
};

export type CardType = {
  id: string;
  content: string;
};

export type Columns = {
  [any: string]: ColumnType;
};

export type ColumnType = {
  id: string;
  title: string;
  cardIds: string[];
};

/**
 * Primary UI component for user interaction
 */
export const DragDrop = ({ className, cards, columns, columnOrder }: Props) => {
  const componentClassName = clsx(styles['drag-drop'], className, {});
  const initialData = { cards, columns, columnOrder };
  const [state, setState] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      // dragged outside
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      // same location
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newCardIds = [...start.cardIds]; // create new array to avoid mutations
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        cardIds: newCardIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    // Moving from one list to another
    const startCardIds = [...start.cardIds];
    startCardIds.splice(source.index, 1);
    const newStart = {
      ...start,
      cardIds: startCardIds,
    };

    const finishCardIds = [...finish.cardIds];
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cardIds: finishCardIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable direction="horizontal" droppableId="all-columns" type="column">
        {(provided) => {
          return (
            <div
              className={componentClassName}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.columnOrder.map((columnId, index) => {
                const column = state.columns[columnId];
                const cards = column.cardIds.map(
                  (cardId) => state.cards[cardId],
                );

                return (
                  <DragDropColumn
                    cards={cards}
                    column={column}
                    index={index}
                    key={column.id}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
