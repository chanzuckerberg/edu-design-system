import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import styles from './FiltersPopover.module.css';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Popover from '../Popover';

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
   * Open or closed status for the filters popover.
   */
  isActive?: boolean;
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
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {FiltersPopover} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const FiltersPopover = ({
  children,
  className,
  isActive,
  onApply,
  onClear,
  onClose,
  ...other
}: FiltersPopoverProps) => {
  const componentClassName = clsx(styles['filters-popover'], className);

  /**
   * Watches open status and calls onClose callback if status changes from open to close.
   * Ref is required to prevent calling on render, since popover usually initially renders as closed.
   */
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else if (!isActive && onClose) {
      onClose();
    }
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Popover.Content className={componentClassName} {...other}>
      <div>{children}</div>
      {(onClear || onApply) && (
        <div className={styles['filters-popover__footer']}>
          <ButtonGroup className={styles['filters-popover__button-group']}>
            {onClear && (
              <Button
                className={styles['footer__button']}
                onClick={() => onClear()}
              >
                Clear All
              </Button>
            )}
            {onApply && (
              <Button
                className={styles['footer__button']}
                onClick={() => onApply()}
                variant="primary"
              >
                Apply
              </Button>
            )}
          </ButtonGroup>
        </div>
      )}
    </Popover.Content>
  );
};
