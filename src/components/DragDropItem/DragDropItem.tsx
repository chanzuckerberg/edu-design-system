import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import type { DraggableProvided } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import type { ItemType } from '../DragDrop/DragDropTypes';
import Icon from '../Icon';
import styles from '../DragDrop/DragDrop.module.css';

export interface Props {
  /**
   * Behavior variants
   * - **hover** renders a drag handle that only shows up on hover
   */
  behavior?: 'hover';
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * The contents of an item; includes id, title (optional) and children (optional)
   */
  item: ItemType;
  /**
   * Item's original indexed position
   */
  index: number;
}

/**
 * Item to be dragged and dropped in containers.
 */
export const DragDropItem = ({ behavior, className, item, index }: Props) => {
  const componentClassName = clsx(
    styles['drag-drop__item'],
    item.behavior === 'hover' && styles['drag-drop__item--hover'],
    className,
  );

  // `id` is injected in <DragDrop />
  return item.id ? (
    <Draggable draggableId={item.id} index={index}>
      {(provided: DraggableProvided, snapshot) => {
        const childrenWithProps = React.Children.map(
          item.children,
          (child: ReactNode) => {
            // Checking isValidElement is the safe way and avoids a typescript
            // error too.
            if (React.isValidElement(child)) {
              // @ts-expect-error "No overload matches this call" error due to type mismatch
              return React.cloneElement<Props>(child, {
                isDragging: snapshot.isDragging,
                number: index + 1,
              });
            }
          },
        );
        return (
          <li
            className={componentClassName}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div
              aria-label={`Handle for draggable item: ${item.title}`}
              className={clsx(styles['drag-drop__item-handle'])}
              {...provided.dragHandleProps}
            >
              <Icon name="drag-indicator" purpose="decorative" size="1.5rem" />
            </div>
            {childrenWithProps}
          </li>
        );
      }}
    </Draggable>
  ) : null;
};
