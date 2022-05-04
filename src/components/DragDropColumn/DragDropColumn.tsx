import clsx from 'clsx';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { ColumnType, TaskType } from '../DragDrop/DragDrop';
import styles from '../DragDrop/DragDrop.module.css';
import DragDropCard from '../DragDropCard';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  column: ColumnType;
  tasks: TaskType[];
  index: number;
}

/**
 * Primary UI component for user interaction
 */
export const DragDropColumn = ({ className, column, tasks, index }: Props) => {
  const componentClassName = clsx(styles['drag-drop-column'], className, {});
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => {
        return (
          <div
            className={componentClassName}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div {...provided.dragHandleProps}>{column.title}</div>
            <Droppable droppableId={column.id} type="task">
              {(provided) => (
                <div
                  className={clsx('drag-drop-column--list')}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tasks.map((task, index) => (
                    <DragDropCard index={index} key={task.id} task={task}>
                      <div className="fpo">Project info</div>
                    </DragDropCard>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};
