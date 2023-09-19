import clsx from 'clsx';
import React, {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type UIEvent,
} from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  type DraggableProvided,
  type DropResult,
  type DroppableProvided,
} from 'react-beautiful-dnd';
import { oneByType } from 'react-children-by-type';
import Icon, { type IconName } from '../Icon';
import styles from './DragDrop.module.css';

type ItemContents = {
  id?: string;
  title?: string;
  behavior?: 'hover';
  children?: React.ReactNode;
  handle?: React.ReactNode;
};

type Items = {
  [key: string]: ItemContents;
};

type ContainerContents = {
  className?: string;
  columnClassName?: string;
  emptyContent?: React.ReactNode;
  header?: React.ReactNode;
  id?: string;
  itemIds: string[];
};

type Containers = {
  [key: string]: ContainerContents;
};

type DragDropProps = {
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
   * CSS class names that can be appended to div wrapping the containers.
   */
  containersClassName?: string;
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
};

export type NewState = {
  containerOrder: string[];
  containers: Containers;
  items: Items;
};

type DragDropItemProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Icon to use when defining a drag handle. Default is "drag-indicator"
   */
  icon?: Extract<
    IconName,
    | 'drag-indicator'
    | 'dots-vertical'
    | 'dots-horizontal'
    | 'menu'
    | 'view-headline'
  >;
  /**
   * The contents of an item; includes id, title (optional) and children (optional)
   */
  item: ItemContents;
  /**
   * Item's original indexed position
   */
  index: number;
};

type DragDropContainerHeaderProps = {
  /**
   * Child node(s) to be rendered as the header.
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

type DragDropContainerProps = {
  /**
   * Prop that will contain an id for each container and an array of itemIds that will be used on initial render
   */
  container: ContainerContents;
  /**
   * Empty state contents
   */
  emptyContent?: ReactNode;
  /**
   * Prop that will be an array of items
   */
  items: ItemContents[];
};

/**
 * Container for draggable components to be dropped within the container.
 */
const DragDropContainer = ({
  container,
  items,
  emptyContent,
}: DragDropContainerProps) => {
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
              {items.map((item: ItemContents, index: number) => (
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

/**
 * Component that contains header section for the container which consists of drag and drop components.
 */

const DragDropContainerHeader = ({
  className,
  children,
  ...other
}: DragDropContainerHeaderProps) => {
  return (
    <header className={className} {...other}>
      {children}
    </header>
  );
};

/**
 * Item to be dragged and dropped in containers.
 */
const DragDropItem = ({
  className,
  icon = 'drag-indicator',
  item,
  index,
}: DragDropItemProps) => {
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
              <Icon name={icon} purpose="decorative" size="1.5rem" />
            </div>
            {childrenWithProps}
          </li>
        );
      }}
    </Draggable>
  ) : null;
};

/**
 * `import {DragDrop} from "@chanzuckerberg/eds"`
 *
 * A flexible Drag and Drop component that allows items to be dragged and dropped in containers.
 */
export const DragDrop = ({
  className,
  items,
  containers,
  containersClassName,
  getNewState,
  multipleContainers = false,
  unstyledItems = false,
}: DragDropProps) => {
  /**
   * Set states and refs
   *
   * Set isEnd state: set to true, right shadow gradient activates. Removed when false.
   */
  const [isEnd, setIsEnd] = useState(true);
  /**
   * Set isState state: set to true, left shadow gradient activates. Removed when false.
   */
  const [isStart, setIsStart] = useState(false);
  /**
   * Target drag drop and drag drop inner DOM elements
   */
  const dragDropInnerRef = useRef<HTMLDivElement>(null);
  const dragDropRef = useRef<HTMLElement | null>(null);
  /**
   * Set right and left gradients on tables
   */
  const setShadows = () => {
    if (!dragDropInnerRef.current) {
      return;
    }

    /**
     * Target the actual drag drop inside drag drop.
     */
    const overflowListItems = Array.from(dragDropInnerRef.current.children);
    let childrenWidth = 0;

    overflowListItems.forEach(function (item) {
      const itemMarginLeft = parseInt(
        getComputedStyle(item).marginLeft.slice(0, -2),
        10,
      );
      childrenWidth += item.clientWidth + itemMarginLeft;
    });

    if (dragDropRef.current) {
      /**
       * Get the width of the drag drop offscreen when drag drop overflows.
       */
      const dragDropWidth = dragDropRef.current.clientWidth;
      const totalItemsWidth = childrenWidth;
      const dragDropOffScreen =
        totalItemsWidth - dragDropRef.current.clientWidth;

      if (totalItemsWidth <= dragDropWidth) {
        /**
         * If drag drop width is less than or equal to drag drop width, remove all shadows
         */
        setIsEnd(false);
        setIsStart(false);
      } else if (
        dragDropInnerRef.current.scrollLeft > 0 &&
        dragDropInnerRef.current.scrollLeft < dragDropOffScreen
      ) {
        /**
         * If drag drop inner scroll isn't all the way to the left or to the right, turn all shadows on
         */
        setIsEnd(true);
        setIsStart(true);
      } else if (dragDropInnerRef.current.scrollLeft >= dragDropOffScreen) {
        /**
         * If drag drop inner scroll is >= to width of drag drop offscreen, turn off right shadow and turn left shadow on
         */
        setIsEnd(false);
        setIsStart(true);
      } else {
        /**
         * Else, set the right shadow to true and the left shadow to false
         */
        setIsEnd(true);
        setIsStart(false);
      }
    }
  };

  /**
   * drag drop inner onscroll
   *
   * Set shadows when user scrolls the drag drop right and left.
   */
  const handleOnScroll = (e: UIEvent<HTMLElement>): void => {
    setShadows();
  };

  /**
   * Set shadows when component is updated/loaded.
   */
  useEffect(() => {
    dragDropRef.current = dragDropInnerRef.current?.parentNode as HTMLElement;
    setShadows();
    window.addEventListener('resize', setShadows);
    return () => {
      window.removeEventListener('resize', setShadows);
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
    unstyledItems && styles['drag-drop--unstyled'],
    multipleContainers && styles['drag-drop--multiple'],
    isStart && styles['eds-is-overflow-left'],
    isEnd && styles['eds-is-overflow-right'],
    className,
  );

  const innerClassName = clsx(styles['drag-drop__inner'], containersClassName);

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
                className={innerClassName}
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

DragDrop.ContainerHeader = DragDropContainerHeader;
