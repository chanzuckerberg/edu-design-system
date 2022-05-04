import clsx from 'clsx';
import React, { ReactNode } from 'react';
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
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DragDropContainer = ({
  className,
  container,
  items,
  children,
}: Props) => {
  const componentClassName = clsx(styles['drag-drop-container'], className, {});
  return (
    <div className={componentClassName}>
      <Droppable droppableId={container.id} type="item">
        {(provided) => (
          <div
            className={clsx(styles['drag-drop-container--list'])}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <DragDropItem index={index} item={item} key={item.id}>
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
