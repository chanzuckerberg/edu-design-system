import React, { ReactNode } from 'react';
import clsx from 'clsx';

export interface Props {
  /**
   * Child node(s) that can be nested inside component. `DrawerHeader`, `DrawerBody`, and `ModelFooter` are the only permissible children of the Drawer
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const DrawerFooter: React.FC<Props> = ({
  children,
  className,
  ...other
}) => {
  const componentClassName = clsx('drawer__footer', className, {});
  return (
    <footer className={componentClassName} {...other}>
      {children}
    </footer>
  );
};
