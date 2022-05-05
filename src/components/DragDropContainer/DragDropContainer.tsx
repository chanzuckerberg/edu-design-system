import clsx from 'clsx';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ContainerType, ItemType } from '../DragDrop/DragDrop';
import styles from '../DragDrop/DragDrop.module.css';
import DragDropItem from '../DragDropItem';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  container: ContainerType;
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
            <DragDropItem index={index} item={item} key={item.id}>
              {item.children}
            </DragDropItem>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
