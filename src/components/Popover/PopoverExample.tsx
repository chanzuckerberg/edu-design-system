import clsx from 'clsx';
import React, { ReactNode, useState, useRef, MutableRefObject } from 'react';
import { Popover } from './Popover';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { NotificationList } from '../NotificationList/NotificationList';
import { NotificationListItem } from '../NotificationListItem/NotificationListItem';
import { PopoverBody } from '../PopoverBody/PopoverBody';
import { PopoverHeader } from '../PopoverHeader/PopoverHeader';
import { TextPassage } from '../TextPassage/TextPassage';

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
export const PopoverExample: React.FC<Props> = ({
  children,
  className,
  ...other
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverButton = useRef() as MutableRefObject<HTMLSpanElement>;

  function openContinuePopover() {
    setPopoverOpen(true);
  }

  function closeContinuePopover(event: any) {
    setTimeout(() => {
      popoverButton.current.focus();
    }, 1);
    if (event) {
      event.preventDefault();
    }
    setPopoverOpen(false);
  }
  const componentClassName = clsx('tooltip-popover', className, {});
  return (
    <div
      style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100vh',
        width: '180px',
      }}
      className={componentClassName}
      {...other}
    >
      <Button text="Open Popover" onClick={openContinuePopover} />

      <Popover
        dismissible={true}
        isActive={popoverOpen}
        onClose={closeContinuePopover}
        ariaLabelledBy="popover-heading-1"
        ariaDescribedBy="popover-description-1"
      >
        <PopoverHeader
          titleAfter={<Button text="Mark All Seen" variant="link" />}
        >
          <Heading id="popover-heading-1" as="h6">
            Notifications (4)
          </Heading>
        </PopoverHeader>
        <PopoverBody>
          <NotificationList>
            <NotificationListItem
              href="#"
              title="English Teacher gave you feedback"
              date="now"
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
            ></NotificationListItem>
            <NotificationListItem
              href="#"
              title="English Teacher gave you feedback"
              date="now"
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
            ></NotificationListItem>
            <NotificationListItem
              href="#"
              title="English Teacher gave you feedback"
              date="now"
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
            ></NotificationListItem>
            <NotificationListItem
              href="#"
              title="English Teacher gave you feedback"
              date="now"
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
            ></NotificationListItem>
          </NotificationList>
          <PopoverHeader>
            <Heading id="popover-heading-2" as="h6">
              Already Seen
            </Heading>
          </PopoverHeader>
          <NotificationList>
            <NotificationListItem
              href="#"
              title="English Teacher gave you feedback"
              date="now"
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
              markedAsRead={true}
            ></NotificationListItem>
            <NotificationListItem
              href="#"
              title="English Teacher gave you feedback"
              date="now"
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
              markedAsRead={true}
            ></NotificationListItem>
          </NotificationList>
        </PopoverBody>
      </Popover>
    </div>
  );
};
