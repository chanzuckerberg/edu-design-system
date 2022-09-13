import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import styles from './FiltersPopover.module.css';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Icon from '../Icon';
import Popover, { PopoverProps } from '../Popover';

export type FiltersPopoverProps = {
  /**
   * Form controls, form fields, or other relevant information that will be displayed in the filters popover.
   */
  children: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * CSS class names that can be appended to the footer button group.
   */
  footerButtonGroupClassName?: string;
  /**
   * Indicates status that filters have been selected, influencing toggle button variant.
   */
  hasSelectedFilters?: boolean;
  /**
   * Callback called when the clear button is called.
   */
  onClear?: () => void;
  /**
   * Callback called when filters drawer is closed.
   */
  onClose?: () => void;
  /**
   * Callback called when the apply button is called.
   */
  onApply?: () => void;
  /**
   * Popover placement options relative to the filters trigger button.
   */
  placement?: PopoverProps['placement'];
  /**
   * Text to be placed in the button that activates the Filters Popover
   */
  triggerText: string;
};

type FiltersPopoverRenderProps = {
  /**
   * Closes popover action render prop passed from Popover parent.
   */
  close: (
    focusableElement?: HTMLElement | React.RefObject<HTMLElement>,
  ) => void;
  /**
   * Popover open status render prop passed from Popover parent.
   */
  open: boolean;
} & Omit<FiltersPopoverProps, 'placement'>;

/**
 * This helper component passes render props from <Popover> to handle onClose functionality
 * that HeadlessUI Popover does not provide natively.
 */
const FiltersPopoverRender = ({
  children,
  className,
  close,
  footerButtonGroupClassName,
  hasSelectedFilters,
  onApply,
  onClear,
  onClose,
  open,
  triggerText,
  ...other
}: FiltersPopoverRenderProps) => {
  /**
   * Hooks to emulate an onClose callback for the Popover.
   */
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else if (!open && onClose) {
      onClose();
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const buttonVariant = hasSelectedFilters ? 'primary' : 'secondary';
  const buttonStatus = hasSelectedFilters ? 'brand' : 'neutral';

  const buttonGroupClassName = clsx(
    styles['footer__button-group'],
    footerButtonGroupClassName,
  );

  return (
    <>
      <Popover.Button as={React.Fragment}>
        <Button
          className={styles['filters-popover__button']}
          status={buttonStatus}
          variant={buttonVariant}
        >
          <Icon name="filter-list" purpose="decorative" size="1.5rem" />
          {triggerText}
        </Button>
      </Popover.Button>
      <Popover.Content bodyClassName={styles['filters-popover']} {...other}>
        <div className={className}>{children}</div>
        {(onClear || onApply) && (
          <ButtonGroup className={buttonGroupClassName}>
            {onClear && (
              <Button
                onClick={() => {
                  close();
                  onClear();
                }}
              >
                Clear All
              </Button>
            )}
            {onApply && (
              <Button
                onClick={() => {
                  close();
                  onApply();
                }}
                variant="primary"
              >
                Apply
              </Button>
            )}
          </ButtonGroup>
        )}
      </Popover.Content>
    </>
  );
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {FiltersPopover} from "@chanzuckerberg/eds";
 * ```
 *
 * A popover component with fields of form inputs to select filters.
 */
export const FiltersPopover = ({
  placement = 'bottom-start',
  ...other
}: FiltersPopoverProps) => {
  return (
    <Popover placement={placement}>
      {({ close, open }) => (
        <FiltersPopoverRender close={close} open={open} {...other} />
      )}
    </Popover>
  );
};
