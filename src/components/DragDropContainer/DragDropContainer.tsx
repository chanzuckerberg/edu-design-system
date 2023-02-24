import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import type { DroppableProvided } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { oneByType } from 'react-children-by-type';
import type { ContainerType, ItemType } from '../DragDrop/DragDropTypes';
import DragDropContainerHeader from '../DragDropContainerHeader';
import DragDropItem from '../DragDropItem';
import styles from '../DragDrop/DragDrop.module.css';

export interface Props {
  /**
   * Prop that will contain an id for each container and an array of itemIds that will be used on initial render
   */
  container: ContainerType;
  /**
   * Empty state contents
   */
  emptyContent?: ReactNode;
  /**
   * Prop that will be an array of items
   */
  items: ItemType[];
}

/**
 * Container for draggable components to be dropped within the container.
 */
export const DragDropContainer = ({
  container,
  items,
  emptyContent,
}: Props) => {
  const componentClassName = clsx(
    styles['drag-drop__container'],
    items.length < 1 && styles['drag-drop__container--empty'],
    container.className,
  );

  const containerInnerClassName = clsx(
    styles['drag-drop__container-inner'],
    container.columnClassName,
  );

  const dragDropContainerHeader = oneByType(
    container.header,
    DragDropContainerHeader,
  );

  const header = React.Children.map(dragDropContainerHeader, (child) => {
    return React.cloneElement(child);
  });

  return container.id ? (
    <div className={componentClassName}>
      {header}
      <Droppable droppableId={container.id} type="item">
        {(provided: DroppableProvided) =>
          items.length > 0 ? (
            <ol
              className={containerInnerClassName}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item: ItemType, index: number) => (
                <DragDropItem index={index} item={item} key={item.id} />
              ))}
              {provided.placeholder}
            </ol>
          ) : (
            <div
              className={containerInnerClassName}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {emptyContent}
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
    </div>
  ) : null;
};
