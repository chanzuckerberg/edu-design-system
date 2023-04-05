import clsx from 'clsx';
import type { MouseEventHandler, ReactNode } from 'react';
import React from 'react';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import styles from '../Drawer/Drawer.module.css';

export type Props = {
  /**
   * Child node(s) that can be nested inside component. `DrawerHeader`, `DrawerBody`, and `DrawerFooter` are the only permissible children of the Drawer
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * onClick function that can be passed in
   */
  onClick?: MouseEventHandler;
  /**
   * Dismissible toggle on the Drawer
   */
  dismissible?: boolean;
  /**
   * Close button text that is visually hidden for accessibility
   */
  closeButtonText?: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {DrawerHeader} from "@chanzuckerberg/eds";`
 *
 * The header content of the Drawer component. Usually houses the heading and the close button.
 */
export const DrawerHeader = ({
  className,
  onClick,
  closeButtonText = 'Close',
  dismissible,
  children,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['drawer__header'], className);
  return (
    <header className={componentClassName} {...other}>
      {children}
      {dismissible && (
        <Button onClick={onClick} status="neutral" variant="icon">
          <Icon
            name="close"
            purpose="informative"
            size="1.5rem"
            title={closeButtonText}
          />
        </Button>
      )}
    </header>
  );
};
