import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import styles from './DragDrop.module.css';
import DragDropContainer from '../DragDropContainer';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Draggable items that can be held by a container.
   */
  items?: Items;
  /**
   * Containers can hold items and can accept dropped items from another container in the same context. An array of itemIds may be initially passed into a container.
   */
  containers?: Containers;
  /**
   * Containers can optionally be draggable just like items, in which case their initial order needs to be established here.
   */
  containerOrder?: string[];
  /**
   * By default, two containers are used; the second one gets a different background style. If multipleContainers is set to true, an unlimited number of containers can be used; each one will be styled identically.
   */
  multipleContainers?: boolean;
  unstyledItems?: boolean;
}

export interface Items {
  [any: string]: ItemType;
}

export interface ItemType {
  id: string;
  title?: string;
  children?: ReactNode;
}

export interface Containers {
  [any: string]: ContainerType;
}

export interface ContainerType {
  id: string;
  itemIds: string[];
}

/**
 * Primary UI component for user interaction
 */
export const DragDrop = ({
  className,
  items,
  containers,
  containerOrder,
  multipleContainers = false,
  unstyledItems = false,
}: Props) => {
  const componentClassName = clsx(
    styles['drag-drop'],
    className,
    multipleContainers && styles['drag-drop--multiple'],
    unstyledItems && styles['drag-drop--unstyled'],
  );
  const initialData = { items, containers, containerOrder };
  const [state, setState] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      // dragged outside
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      // same location
      return;
    }

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

      const newState = {
        ...state,
        containers: {
          ...state.containers,
          [newContainer.id]: newContainer,
        },
      };

      setState(newState);
      return;
    }

    // Moving from one list to another
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

    const newState = {
      ...state,
      containers: {
        ...state.containers,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        direction="horizontal"
        droppableId="all-containers"
        type="container"
      >
        {(provided) => {
          return (
            <section
              className={componentClassName}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.containerOrder.map((containerId) => {
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
