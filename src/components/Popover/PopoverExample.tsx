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
import Button from '../Button';
import Heading from '../Heading';
import NotificationList from '../NotificationList';
import NotificationListItem from '../NotificationListItem';
import PopoverBody from '../PopoverBody';
import PopoverHeader from '../PopoverHeader';

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
      className={componentClassName}
      style={{
        position: 'relative',
        display: 'inline-block',
        marginTop: '12rem',
      }}
      {...other}
    >
      <Button onClick={openPopover} ref={popoverButton}>
        Open Popover
      </Button>

      <Popover
        ariaDescribedBy="popover-description-1"
        ariaLabelledBy="popover-heading-1"
        isActive={popoverOpen}
        onClose={closePopover}
        position={position}
      >
        <PopoverHeader
          titleAfter={
            <Button size="sm" variant="icon">
              Mark All Seen
            </Button>
          }
        >
          <Heading as="h3" id="popover-heading-1" size="h6">
            Notifications (4)
          </Heading>
        </PopoverHeader>
        <PopoverBody>
          <NotificationList>
            <NotificationListItem
              date="now"
              href="#"
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
              title="English Teacher gave you feedback"
            ></NotificationListItem>
            <NotificationListItem
              date="now"
              href="#"
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
              title="English Teacher gave you feedback"
            ></NotificationListItem>
            <NotificationListItem
              date="now"
              href="#"
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
              title="English Teacher gave you feedback"
            ></NotificationListItem>
            <NotificationListItem
              date="now"
              href="#"
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
              title="English Teacher gave you feedback"
            ></NotificationListItem>
          </NotificationList>
          <PopoverHeader>
            <Heading as="h3" id="popover-heading-2" size="h6">
              Already Seen
            </Heading>
          </PopoverHeader>
          <NotificationList>
            <NotificationListItem
              date="now"
              href="#"
              markedAsRead={true}
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
              title="English Teacher gave you feedback"
            ></NotificationListItem>
            <NotificationListItem
              date="now"
              href="#"
              markedAsRead={true}
              source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
              title="English Teacher gave you feedback"
            ></NotificationListItem>
          </NotificationList>
        </PopoverBody>
      </Popover>
    </div>
  );
};
