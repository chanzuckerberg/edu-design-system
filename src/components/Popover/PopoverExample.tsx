import clsx from 'clsx';
import React, {
  ReactNode,
  useState,
  useRef,
  MutableRefObject,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import { Popover } from './Popover';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { NotificationList } from '../NotificationList/NotificationList';
import { NotificationListItem } from '../NotificationListItem/NotificationListItem';
import { PopoverBody } from '../PopoverBody/PopoverBody';
import { PopoverHeader } from '../PopoverHeader/PopoverHeader';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Available _stylistic_ variations available for the Button component
   */
  position?: 'top-left' | 'bottom-left' | 'bottom-right';
}

/**
 * Primary UI component for user interaction
 */
export const PopoverExample: React.FC<Props> = ({
  children,
  className,
  position,
  ...other
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverButton = useRef() as MutableRefObject<HTMLSpanElement>;

  function openPopover() {
    setPopoverOpen(!popoverOpen);
  }

  /**
   * Close the popover
   */
  function closePopover(event: MouseEvent | KeyboardEvent) {
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
        position: 'relative',
        display: 'inline-block',
        marginTop: '12rem',
      }}
      className={componentClassName}
      {...other}
    >
      <Button text="Open Popover" onClick={openPopover} ref={popoverButton} />

      <Popover
        position={position}
        dismissible={true}
        isActive={popoverOpen}
        onClose={closePopover}
        ariaLabelledBy="popover-heading-1"
        ariaDescribedBy="popover-description-1"
      >
        <PopoverHeader
          titleAfter={<Button text="Mark All Seen" size="sm" variant="bare" />}
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
