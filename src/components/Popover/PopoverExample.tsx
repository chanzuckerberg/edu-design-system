import clsx from 'clsx';
import React, { ReactNode, useState, useRef, MutableRefObject } from 'react';
import { Popover } from './Popover';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Heading } from '../Heading/Heading';
import { PopoverBody } from '../PopoverBody/PopoverBody';
import { PopoverFooter } from '../PopoverFooter/PopoverFooter';
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
  /**
   * Size prop to pass into Popover
   */
  size?: 'sm' | 'lg' | 'xl';
}

/**
 * Primary UI component for user interaction
 */
export const PopoverExample: React.FC<Props> = ({
  children,
  className,
  size,
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
      style={{ padding: '1rem', minHeight: '500px' }}
      className={componentClassName}
      {...other}
    >
      <Button
        text="Open Popover"
        onClick={openContinuePopover}
        buttonRef={popoverButton}
      />

      <Popover
        dismissible={true}
        isActive={popoverOpen}
        onClose={closeContinuePopover}
        ariaLabelledBy="popover-heading-1"
        ariaDescribedBy="popover-description-1"
        size={size}
      >
        <PopoverHeader>
          <Heading id="popover-heading-1" as="h2">
            Popover Title
          </Heading>
        </PopoverHeader>
        <PopoverBody>
          <TextPassage
            className="u-margin-bottom-md"
            id="popover-description-1"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </TextPassage>
        </PopoverBody>
        <PopoverFooter>
          <ButtonGroup align="right">
            <Button
              variant="primary"
              text="Submit"
              onClick={closeContinuePopover}
            />
            <Button text="Close" onClick={closeContinuePopover} />
          </ButtonGroup>
        </PopoverFooter>
      </Popover>
    </div>
  );
};
