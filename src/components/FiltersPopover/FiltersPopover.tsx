import clsx from 'clsx';
import React, { type ReactNode, useEffect, useRef } from 'react';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import FiltersButton from '../FiltersButton';
import type { PopoverProps } from '../Popover';
import Popover from '../Popover';
import styles from './FiltersPopover.module.css';

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
   * Trigger element that toggles the filters drawer.
   * Must be able to forward a ref.
   */
  triggerElement?: ReactNode;
  /**
   * Text to be placed in the button that activates the Filters Drawer
   */
  triggerText?: string;
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
  triggerElement,
  triggerText,
  ...other
}: FiltersPopoverRenderProps) => {
  if (
    !triggerElement &&
    !triggerText &&
    process.env.NODE_ENV !== 'production'
  ) {
    throw new Error(
      'Provide triggerText as trigger button text or a custom triggerElement for FiltersPopover control',
    );
  }

  // Get a stable reference to the onClose callback.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  /**
   * Hooks to emulate an onClose callback for the Popover.
   * Tracking first render is required to prevent useEffect callback from running on first render since Popover may render as closed.
   */
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else if (!open && onCloseRef.current) {
      onCloseRef.current();
    }
  }, [open]);

  const trigger = triggerElement || (
    <FiltersButton
      hasSelectedFilters={hasSelectedFilters}
      // in this ternary operator, triggerText will never be falsy since we check for it earlier.
      triggerText={triggerText!} // eslint-disable-line @typescript-eslint/no-non-null-assertion
    />
  );

  const buttonGroupClassName = clsx(
    styles['footer__button-group'],
    footerButtonGroupClassName,
  );

  return (
    <>
      <Popover.Button as={React.Fragment}>{trigger}</Popover.Button>
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
 * `import {FiltersPopover} from "@chanzuckerberg/eds";`
 *
 * A popover component with fields of form inputs to select filters.
 * @deprecated
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
