import clsx from 'clsx';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './DragDrop.module.css';
import DragContainer from '../DragContainer';
import DragLayer from '../DragLayer';

export interface Props {
  /**
   * An array of items placed in the "destination" container. This array is passed in as a prop to the DragDrop component and it is not altered.
   */
  destItems?: any;

  /**
   * An array of items placed in the "source" container. This set is passed in as a prop to the DragDrop component and it is not altered.
   */
  sourceItems?: any;
}
/**
 * Primary UI component for user interaction
 */
export const DragDrop = ({ sourceItems, destItems }: Props) => {
  return (
    <div className={clsx(styles['drag-drop'])}>
      <DndProvider backend={HTML5Backend}>
        <DragContainer id="sourceContainer" list={sourceItems} />
        <DragContainer id="destContainer" list={destItems} />
        <DragLayer />
      </DndProvider>
    </div>
  );
};
