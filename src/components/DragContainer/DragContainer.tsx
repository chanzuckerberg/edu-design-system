import clsx from 'clsx';
import update from 'immutability-helper';
import React, { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { DragItemTypes } from '../../util/dragItemTypes';
import DragCard from '../DragCard';
import styles from '../DragDrop/DragDrop.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  list?: any;
  id?: any;
}
export interface BoxMap {
  [key: string]: { top: number; left: number; title: string };
}

export interface Item {
  id: number;
  text: string;
}
/**
 * Primary UI component for user interaction
 */
export const DragContainer = ({ className, list }: Props) => {
  const componentClassName = clsx(styles['drag-container'], className, {});
  const [cards, setCards] = useState(list);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const renderCard = useCallback(
    (card: { id: number; title: string }, index: number) => {
      return (
        <DragCard id={card.id} index={index} key={card.id} moveCard={moveCard}>
          {/* Temporarily hard-coding cursor style while fpo div is here */}
          <div className="fpo" style={{ cursor: 'move' }}>
            {card.title}
          </div>
        </DragCard>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className={componentClassName}>
      {cards.map((card, index) => renderCard(card, index))}
    </div>
  );
};
