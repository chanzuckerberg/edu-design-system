import clsx from 'clsx';
import React from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { EdsThemeColorIconNeutralSubtle } from '../../tokens-dist/ts/colors';
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
  useHandles: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const DragDropItem = ({ className, item, index, useHandles }: Props) => {
  const componentClassName = clsx(styles['drag-drop-item'], className, {});
  // `id` is injected in <DragDrop />
  return item.id ? (
    <Draggable draggableId={item.id} index={index}>
      {(provided: DraggableProvided) => {
        return useHandles ? (
          <div
            className={componentClassName}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div className={clsx(styles['drag-drop-item--inner'])}>
              {item.title && (
                <div className={clsx(styles['drag-drop-item--title'])}>
                  {item.title}
                </div>
              )}
              <div className={clsx(styles['drag-drop-item--content'])}>
                {item.children}
              </div>
            </div>
            <div
              className={clsx(styles['drag-drop-item--handle'])}
              {...provided.dragHandleProps}
            >
              <Icon
                color={EdsThemeColorIconNeutralSubtle}
                name="drag-indicator"
                purpose="decorative"
                size="1.25rem"
              />
            </div>
          </div>
        ) : (
          <div
            className={componentClassName}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {item.title && (
              <div className={clsx(styles['drag-drop-item--title'])}>
                {item.title}
              </div>
            )}
            {item.children}
          </div>
        );
      }}
    </Draggable>
  ) : null;
};
