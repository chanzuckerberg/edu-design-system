import clsx from 'clsx';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styles from './DragDropContainer.module.css';
import { ContainerType, ItemType } from '../DragDrop/DragDrop';
import DragDropItem from '../DragDropItem';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Prop that will contain an id for each container and an array of itemIds that will be used on initial render
   */
  container: ContainerType;
  /**
   * Prop that will be an array of items
   */
  items: ItemType[];
}

/**
 * Primary UI component for user interaction
 */
export const DragDropContainer = ({ className, container, items }: Props) => {
  const componentClassName = clsx(styles['drag-drop-container'], className, {});
  return (
    <Droppable droppableId={container.id} type="item">
      {(provided) => (
        <div
          className={componentClassName}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {items.map((item, index) => (
            <DragDropItem index={index} item={item} key={item.id} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
