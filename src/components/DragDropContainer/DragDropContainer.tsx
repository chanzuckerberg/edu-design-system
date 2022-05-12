import clsx from 'clsx';
import React from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import styles from '../DragDrop/DragDrop.module.css';
import { ContainerType, ItemType } from '../DragDrop/DragDropTypes';
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
  /**
   * Prop that gets passed to DragDropItem(s)
   */
  useHandles: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const DragDropContainer = ({
  className,
  container,
  items,
  useHandles,
}: Props) => {
  const componentClassName = clsx(styles['drag-drop-container'], className, {});
  return container.id ? (
    <Droppable droppableId={container.id} type="item">
      {(provided: DroppableProvided) => (
        <div
          className={componentClassName}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {items.map((item: ItemType, index: number) => (
            <DragDropItem
              index={index}
              item={item}
              key={item.id}
              useHandles={useHandles}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  ) : null;
};
