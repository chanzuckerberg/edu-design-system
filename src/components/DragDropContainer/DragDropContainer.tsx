import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { oneByType } from 'react-children-by-type';
import styles from '../DragDrop/DragDrop.module.css';
import { ContainerType, ItemType } from '../DragDrop/DragDropTypes';
import DragDropContainerHeader from '../DragDropContainerHeader';
import DragDropItem from '../DragDropItem';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Column class names that can be appended to the component.
   * 1) Used to add additional styles to the column
   */
  columnClassName?: string[];
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
 * Primary UI component for user interaction
 */
export const DragDropContainer = ({
  className,
  container,
  items,
  emptyContent,
}: Props) => {
  const componentClassName = clsx(
    styles['drag-drop__container'],
    className,
    items.length < 1 && styles['drag-drop__container--empty'],
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
              className={`${styles['drag-drop__container-inner']} ${
                container.columnClassName && container.columnClassName
              }`}
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
              className={`${styles['drag-drop__container-inner']} ${
                container.columnClassName && container.columnClassName
              }`}
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
