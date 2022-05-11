import clsx from 'clsx';
import React, { useState } from 'react';
import {
  DragDropContext,
  DropResult,
  Droppable,
  DroppableProvided,
} from 'react-beautiful-dnd';
import styles from './DragDrop.module.css';
import { Items, Containers } from './DragDropTypes';
import DragDropContainer from '../DragDropContainer';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Draggable items that can be held by a container.
   */
  items: Items;
  /**
   * Containers can hold items and can accept dropped items from another container in the same context. An array of itemIds may be initially passed into a container.
   */
  containers: Containers;
  /**
   * By default, the last container in a context gets unique styling. If more than two containers will be used, setting this prop to true will remove this unique styling and give all containers a simple border.
   */
  multipleContainers?: boolean;
  /**
   * Unstyled Items variant removes all styling from content within items
   */
  unstyledItems?: boolean;
}

/**
 * A flexible Drag and Drop component that allows items to be dragged and dropped in containers
 */
export const DragDrop = ({
  className,
  items,
  containers,
  multipleContainers = false,
  unstyledItems = false,
}: Props) => {
  /**
   * If either multipleContainers or unstyledItems is set, apply the corresponding class
   */
  const componentClassName = clsx(
    styles['drag-drop'],
    className,
    multipleContainers && styles['drag-drop--multiple'],
    unstyledItems && styles['drag-drop--unstyled'],
  );

  const containerOrder: string[] = [];
  Object.entries(items).forEach(([key, item]) => {
    items[key] = { ...item, id: key };
  });
  Object.entries(containers).forEach(([key, item]) => {
    containers[key] = { ...item, id: key };
    containerOrder.push(key);
  });
  const initialData = { items, containers, containerOrder };
  const [state, setState] = useState(initialData);

  /**
   * A drag has 5 life cycle events that can be monitored: onBeforeCapture, onBeforeDragStart, onDragStart, onDragUpdate, and onDragEnd. We perform our reordering functions and update state when onDragEnd is fired
   */
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    /**
     * If the drag ends over a page element that is not a destination within this context, no further action is required
     */
    if (!destination) {
      return;
    }

    /**
     * If the drag ends over the original item's position, no further action is required
     */
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    /**
     * If a drag starts and ends over the same container, re-sort the contents of that container
     */
    const start = state.containers[source.droppableId];
    const finish = state.containers[destination.droppableId];

    if (start === finish) {
      const newItemIds = [...start.itemIds]; // create new array to avoid mutations
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);

      const newContainer = {
        ...start,
        itemIds: newItemIds,
      };

      /**
       * Reducer for creating a new state object for this container
       */
      const newState = newContainer.id
        ? {
            ...state,
            containers: {
              ...state.containers,
              [newContainer.id]: newContainer,
            },
          }
        : state;

      /**
       * Update state with new container's contents
       */
      setState(newState);
      return;
    }

    /**
     * The drag has ended over a container that is not the source container, so both containers contents need to be updated
     */
    const startItemIds = [...start.itemIds];
    startItemIds.splice(source.index, 1);
    const newStart = {
      ...start,
      itemIds: startItemIds,
    };

    const finishItemIds = [...finish.itemIds];
    finishItemIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      itemIds: finishItemIds,
    };

    /**
     * Reducer for updating both source and destination containers
     */
    const newState =
      newStart.id && newFinish.id
        ? {
            ...state,
            containers: {
              ...state.containers,
              [newStart.id]: newStart,
              [newFinish.id]: newFinish,
            },
          }
        : state;

    /**
     * Update state with both source and destination containers
     */
    setState(newState);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        direction="horizontal"
        droppableId="all-containers"
        type="container"
      >
        {(provided: DroppableProvided) => {
          return (
            <section
              className={componentClassName}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.containerOrder.map((containerId: string) => {
                const container = state.containers[containerId];
                const items = container.itemIds.map(
                  (itemId) => state.items[itemId],
                );

                return (
                  <DragDropContainer
                    container={container}
                    items={items}
                    key={container.id}
                  />
                );
              })}
              {provided.placeholder}
            </section>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
