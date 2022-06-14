import clsx from 'clsx';
import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  UIEvent,
} from 'react';
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
  multipleContainers: boolean;
  /**
   * Unstyled Items variant removes all styling from content within items
   */
  unstyledItems: boolean;
  /**
   * Child node(s) that can be nested inside component. `ModalHeader`, `ModalBody`, and `ModelFooter` are the only permissible children of the Modal
   */
  children?: ReactNode;
  /**
   * Prop that allows parent components to get the updated drag and drop object data from the outside
   */
  getNewState?: (newState: NewState) => void;
}

export interface NewState {
  containerOrder: string[];
  containers: Containers;
  items: Items;
}

/**
 * A flexible Drag and Drop component that allows items to be dragged and dropped in containers
 */
export const DragDrop = ({
  className,
  items,
  containers,
  getNewState,
  multipleContainers = false,
  unstyledItems = false,
}: Props) => {
  /**
   * Set states and refs
   * 1) Set isEnd state: set to true, right shadow gradient activates. Removed when false
   * 2) Set isState state: set to true, left shadow gradient activates. Removed when false
   * 3) Target drag drop and drag drop inner DOM elements
   */
  const [isEnd, setIsEnd] = useState(true); /* 1 */
  const [isStart, setIsStart] = useState(false); /* 2 */
  const dragDropInnerRef = useRef() as MutableRefObject<HTMLDivElement>; /* 3 */
  const dragDropRef = useRef() as MutableRefObject<HTMLElement>;
  /**
   * Set right and left gradients on tables
   * 1) Target the actual drag drop inside drag drop
   * 2) Get the width of the drag drop offscreen when drag drop overflows
   * 3) If drag drop width is less than or equal to drag drop width, remove all shadows
   * 4) If drag drop inner scroll isn't all the way to the left or to the right, turn all shadows on
   * 5) If drag drop inner scroll is >= to width of drag drop offscreen, turn off right shadow and turn left shadow on
   * 6) Else, set the right shadow to true and the left shadow to false
   */
  const setShadows = () => {
    const overflowListItems = Array.from(
      dragDropInnerRef.current.children,
    ); /* 1 */
    let childrenWidth = 0;

    overflowListItems.forEach(function (item) {
      const itemMarginLeft = parseInt(
        getComputedStyle(item).marginLeft.slice(0, -2),
      );
      childrenWidth += item.clientWidth + itemMarginLeft;
    });
    if (overflowListItems) {
      const dragDropWidth = dragDropRef.current.clientWidth; /* 2 */
      const totalItemsWidth = childrenWidth; /* 2 */
      const dragDropOffScreen =
        totalItemsWidth - dragDropRef.current.clientWidth; /* 2 */

      if (totalItemsWidth <= dragDropWidth) {
        /* 3 */
        setIsEnd(false);
        setIsStart(false);
      } else if (
        dragDropInnerRef.current.scrollLeft > 0 &&
        dragDropInnerRef.current.scrollLeft < dragDropOffScreen
      ) {
        /* 4 */
        setIsEnd(true);
        setIsStart(true);
      } else if (dragDropInnerRef.current.scrollLeft >= dragDropOffScreen) {
        /* 5 */
        setIsEnd(false);
        setIsStart(true);
      } else {
        /* 6 */
        setIsEnd(true);
        setIsStart(false);
      }
    }
  };

  /**
   * drag drop inner onscroll
   * 1) Set shadows when user scrolls the drag drop right and left
   */
  const handleOnScroll = (e: UIEvent<HTMLElement>): void => {
    setShadows(); /* 1 */
  };

  /**
   * Use effect lifecycle
   * 1) Set shadows when component is updated/loaded
   * 2) Set window resize listener
   * 3) Remove window resize listener
   */
  useEffect(() => {
    dragDropRef.current = dragDropInnerRef.current
      .parentNode as HTMLElement; /* 3 */
    setShadows(); /* 1 */
    window.addEventListener('resize', setShadows); /* 2 */
    return () => {
      window.removeEventListener('resize', setShadows); /* 3 */
    };
  }, [items]);

  /**
   * Update sticky wrapper height on mount
   */

  const containerOrder: string[] = [];
  Object.entries(items).forEach(([key, item]) => {
    items[key] = { ...item, id: key };
  });
  Object.entries(containers).forEach(([key, item]) => {
    containers[key] = { ...item, id: key };
    containerOrder.push(key);
  });
  const itemData = { items, containers, containerOrder };

  /**
   * A drag has 5 life cycle events that can be monitored: onBeforeCapture, onBeforeDragStart, onDragStart, onDragUpdate, and onDragEnd. We perform our reordering functions and update itemData when onDragEnd is fired
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
    const start = itemData.containers[source.droppableId];
    const finish = itemData.containers[destination.droppableId];

    if (start === finish) {
      const newItemIds = start?.itemIds ? [...start.itemIds] : []; // create new array to avoid mutations
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);

      const newContainer = {
        ...start,
        itemIds: newItemIds,
      };

      /**
       * Reducer for creating a new itemData object for this container
       */
      const newState = newContainer.id
        ? {
            ...itemData,
            containers: {
              ...itemData.containers,
              [newContainer.id]: newContainer,
            },
          }
        : itemData;

      /**
       * Update itemData with new container's contents
       */
      if (getNewState) {
        getNewState(newState);
      }
      return;
    }

    /**
     * The drag has ended over a container that is not the source container, so both containers contents need to be updated
     */
    const startItemIds = start?.itemIds ? [...start.itemIds] : [];
    startItemIds.splice(source.index, 1);
    const newStart = {
      ...start,
      itemIds: startItemIds,
    };

    const finishItemIds = finish?.itemIds ? [...finish.itemIds] : [];
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
            ...itemData,
            containers: {
              ...itemData.containers,
              [newStart.id]: newStart,
              [newFinish.id]: newFinish,
            },
          }
        : itemData;

    /**
     * Update itemData with both source and destination containers
     */
    if (getNewState) {
      getNewState(newState);
    }
  };

  /**
   * If either multipleContainers or unstyledItems is set, apply the corresponding class
   */
  const componentClassName = clsx(
    styles['drag-drop'],
    className,
    unstyledItems && styles['drag-drop--unstyled'],
    multipleContainers && styles['drag-drop--multiple'],
    isStart && styles['eds-is-overflow-left'],
    isEnd && styles['eds-is-overflow-right'],
  );

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
              <div
                className={styles['drag-drop__inner']}
                onScroll={handleOnScroll}
                ref={dragDropInnerRef}
              >
                {itemData?.containerOrder &&
                  itemData.containerOrder.map((containerId: string) => {
                    const container = itemData.containers[containerId];
                    const items = container.itemIds
                      ? container.itemIds.map(
                          (itemId) => itemData.items[itemId],
                        )
                      : [];

                    return (
                      <DragDropContainer
                        container={container}
                        emptyContent={container.emptyContent}
                        items={items}
                        key={container.id}
                      />
                    );
                  })}
                {provided.placeholder}
              </div>
            </section>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
