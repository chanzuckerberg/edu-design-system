import clsx from 'clsx';
import React from 'react';
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
  dragByHandle: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const DragDropContainer = ({
  className,
  container,
  dragByHandle,
  items,
}: Props) => {
  const componentClassName = clsx(
    styles['drag-drop__container'],
    className,
    {},
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
        {(provided: DroppableProvided) => (
          <div
            className={styles['drag-drop__container-inner']}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item: ItemType, index: number) => (
              <DragDropItem
                dragByHandle={dragByHandle}
                index={index}
                item={item}
                key={item.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  ) : null;
};
