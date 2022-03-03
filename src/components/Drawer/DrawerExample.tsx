import React, { ReactNode, useState, useRef, MutableRefObject } from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Drawer } from './Drawer';
import { DrawerHeader } from '../DrawerHeader/DrawerHeader';
import { DrawerBody } from '../DrawerBody/DrawerBody';
import { DrawerFooter } from '../DrawerFooter/DrawerFooter';
import { Heading } from '../Heading/Heading';
import { TextPassage } from '../TextPassage/TextPassage';
import { Tabs } from '../Tabs/Tabs';
import { Tab } from '../Tab/Tab';
import { TextField } from '../TextField/TextField';
import { TextareaField } from '../TextareaField/TextareaField';
import { SelectField } from '../SelectField/SelectField';
import { RadioField } from '../RadioField/RadioField';
import { RadioFieldItem } from '../RadioFieldItem/RadioFieldItem';
import { TextLink } from '../TextLink/TextLink';
import { DefinitionList } from '../DefinitionList/DefinitionList';
import { DefinitionListItem } from '../DefinitionListItem/DefinitionListItem';
import { Hr } from '../Hr/Hr';

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
export const DrawerExample: React.FC<Props> = ({
  children,
  className,
  ...other
}) => {
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
      style={{ padding: '1rem', minHeight: '500px' }}
      className={componentClassName}
      {...other}
    >
      <Button
        text="Open Drawer"
        onClick={openDrawerExample}
        buttonRef={drawerButton}
      />

      <Drawer
        dismissible={true}
        isActive={drawerOpen}
        onClose={closeDrawerExample}
        ariaLabelledBy="drawer-heading-1"
        ariaDescribedBy="drawer-description-1"
      >
        <DrawerHeader>
          <Heading id="drawer-heading-1" as="h2">
            Drawer title
          </Heading>
        </DrawerHeader>
        <DrawerBody>
          <div className="fpo">Drawer body</div>
        </DrawerBody>
        <DrawerFooter>
          <ButtonGroup>
            <Button variant="primary" text="Button" />
            <Button text="Close Drawer" onClick={closeDrawerExample} />
          </ButtonGroup>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};
