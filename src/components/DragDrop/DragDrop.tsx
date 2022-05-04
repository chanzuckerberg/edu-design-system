import clsx from 'clsx';
import React, { useState } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import styles from './DragDrop.module.css';
import DragDropColumn from '../DragDropColumn';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}
export type TaskType = {
  id: string;
  content: string;
};

export type Tasks = {
  [any: string]: TaskType;
};

export type ColumnType = {
  id: string;
  title: string;
  taskIds: string[];
};

export type Columns = {
  [any: string]: ColumnType;
};

export type InitialData = {
  tasks: Tasks;
  columns: Columns;
  columnOrder: string[];
};
export const initialData: InitialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Project name #1' },
    'task-2': { id: 'task-2', content: 'Project name #2' },
    'task-3': { id: 'task-3', content: 'Project name #3' },
    'task-4': { id: 'task-4', content: 'Project name #4' },
    'task-5': { id: 'task-5', content: 'Project name #5' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: '',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
    },
    'column-2': {
      id: 'column-2',
      title: '',
      taskIds: [],
    },
  },
  // Facilitate reordering of columns
  columnOrder: ['column-1', 'column-2'],
};
/**
 * Primary UI component for user interaction
 */
export const DragDrop = ({ className }: Props) => {
  const componentClassName = clsx(styles['drag-drop'], className, {});
  const [state, setState] = useState(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

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

    if (type === 'column') {
      const newColumnOrder = [...state.columnOrder];
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      };
      setState(newState);
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = [...start.taskIds]; // create new array to avoid mutations
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = [...start.taskIds];
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = [...finish.taskIds];
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable direction="horizontal" droppableId="all-columns" type="column">
        {(provided) => {
          return (
            <div
              className={componentClassName}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.columnOrder.map((columnId, index) => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => state.tasks[taskId],
                );

                return (
                  <DragDropColumn
                    column={column}
                    index={index}
                    key={column.id}
                    tasks={tasks}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
