import clsx from 'clsx';
import React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import styles from '../DragDrop/DragDrop.module.css';
import { ItemType } from '../DragDrop/DragDropTypes';
import Icon from '../Icon';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * The contents of an item; includes id, title (optional) and children (optional)
   */
  item: ItemType;
  /** Item's original indexed position */
  index: number;
}

/**
 * Primary UI component for user interaction
 */
export const DragDropItem = ({ className, item, index }: Props) => {
  const componentClassName = clsx(styles['drag-drop__item'], className, {});

  // `id` is injected in <DragDrop />
  return item.id ? (
    <Draggable draggableId={item.id} index={index}>
      {(provided: DraggableProvided) => {
        return (
          <div
            className={componentClassName}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div
              aria-label={`Handle for draggable item: ${item.title}`}
              className={clsx(styles['drag-drop-item__item-handle'])}
              {...provided.dragHandleProps}
            >
              <Icon name="drag-indicator" purpose="decorative" size="1.5rem" />
            </div>
            {item.children}
          </div>
        );
      }}
    </Draggable>
  ) : null;
};
