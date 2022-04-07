import clsx from 'clsx';
import React, { ReactNode, useState, useRef, MutableRefObject } from 'react';
import { Drawer } from './Drawer';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { DrawerBody } from '../DrawerBody/DrawerBody';
import { DrawerFooter } from '../DrawerFooter/DrawerFooter';
import { DrawerHeader } from '../DrawerHeader/DrawerHeader';
import { Heading } from '../Heading/Heading';

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
 * Primary UI component for user interaction
 */
export const DrawerExample = ({ className, ...other }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerButton = useRef() as MutableRefObject<HTMLSpanElement>;

  function openDrawerExample() {
    setDrawerOpen(true);
  }

  function closeDrawerExample(event: any) {
    setTimeout(() => {
      drawerButton.current.focus();
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
      <Button onClick={openDrawerExample} ref={drawerButton}>
        Open Drawer
      </Button>

      <Drawer
        ariaDescribedBy="drawer-description-1"
        ariaLabelledBy="drawer-heading-1"
        dismissible={true}
        isActive={drawerOpen}
        onClose={closeDrawerExample}
      >
        <DrawerHeader>
          <Heading id="drawer-heading-1" size="h2">
            Drawer title
          </Heading>
        </DrawerHeader>
        <DrawerBody>
          <div className="fpo">Drawer body</div>
        </DrawerBody>
        <DrawerFooter>
          <ButtonGroup>
            <Button variant="primary">Button</Button>
            <Button onClick={closeDrawerExample}>Close Drawer</Button>
          </ButtonGroup>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};
