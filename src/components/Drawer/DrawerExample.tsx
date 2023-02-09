import React, { useState, useRef } from 'react';
import { Drawer } from './Drawer';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Heading from '../Heading';

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {DrawerExample} from "@chanzuckerberg/eds";`
 *
 * An example of a controlled Drawer for use as a story.
 */
export const DrawerExample = () => {
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
  return (
    <div className="min-h-[500px] p-4">
      <Button onClick={openDrawerExample} ref={drawerButton} variant="primary">
        Open Drawer
      </Button>

      <Drawer
        aria-describedby="drawer-description-1"
        aria-labelledby="drawer-heading-1"
        dismissible
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
