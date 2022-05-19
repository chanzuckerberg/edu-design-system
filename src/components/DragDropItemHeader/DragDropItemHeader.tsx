import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface Props {
  /**
   * Child node(s) that can be nested inside component. `ModalHeader`, `ModalBody`, and `ModelFooter` are the only permissible children of the Modal
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

export const DragDropItemHeader = ({
  className,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx('drag-drop-item__header', className, {});
  return (
    <header className={componentClassName} {...other}>
      {children}
    </header>
  );
};
