import clsx from 'clsx';
import React, { ReactNode, useState, useRef } from 'react';
import { Drawer } from './Drawer';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Heading from '../Heading';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {DrawerExample} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const DrawerExample = ({ className, ...other }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerButton = useRef<HTMLButtonElement>(null);

  function openDrawerExample() {
    setDrawerOpen(true);
  }

  function closeDrawerExample(event: any) {
    setTimeout(() => {
      drawerButton?.current?.focus();
    }, 1);
    if (event) {
      event.preventDefault();
    }
    setDrawerOpen(false);
  }
  const componentClassName = clsx('tooltip-drawer', className, {});
  return (
    <div
      className={componentClassName}
      style={{ padding: '1rem', minHeight: '500px' }}
      {...other}
    >
      <Button onClick={openDrawerExample} ref={drawerButton} variant="primary">
        Open Drawer
      </Button>

      <Drawer
        aria-describedby="drawer-description-1"
        aria-labelledby="drawer-heading-1"
        dismissible={true}
        isActive={drawerOpen}
        onClose={closeDrawerExample}
      >
        <Drawer.Header>
          <Heading id="drawer-heading-1" size="h2">
            Drawer title
          </Heading>
        </Drawer.Header>
        <Drawer.Body>
          <div className="fpo">Drawer body</div>
        </Drawer.Body>
        <Drawer.Footer>
          <ButtonGroup>
            <Button variant="primary">Button</Button>
            <Button onClick={closeDrawerExample}>Close Drawer</Button>
          </ButtonGroup>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
};
