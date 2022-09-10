import clsx from 'clsx';
import React, { createRef, useEffect, useState } from 'react';
import { useUID } from 'react-uid';
import styles from './FiltersDrawer.module.css';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Drawer from '../Drawer';
import Heading from '../Heading';

export type FiltersDrawerProps = {
  /**
   * Form controls, form fields, or other relevant information that will be displayed in the filters drawer.
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
   * Sets the filters drawer window open or closed.
   */
  isActive: boolean;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {FiltersDrawer} from "@chanzuckerberg/eds";
 * ```
 *
 * A drawer component with fields of checkboxes to select filters.
 */
export const FiltersDrawer = ({
  children,
  className,
  footerButtonGroupClassName,
  onClear,
  onApply,
  onClose,
  isActive,
}: FiltersDrawerProps) => {
  /**
   * Manages overflow state.
   */
  const [isOverflowing, setIsOverflowing] = useState(false);
  const filtersBody = createRef<HTMLDivElement>();

  useEffect(() => {
    if (
      filtersBody.current &&
      filtersBody.current.scrollHeight > filtersBody.current.clientHeight
    ) {
      setIsOverflowing(true);
    }
  }, [filtersBody]);

  const containerClassName = clsx(
    styles['filters-drawer__container'],
    className,
  );
  const footerClassName = clsx(
    styles['filters-drawer__footer'],
    isOverflowing && styles['filters-drawer__footer--overflow'],
  );

  const buttonGroupClassName = clsx(
    styles['footer__button-group'],
    footerButtonGroupClassName,
  );

  const generatedId = useUID();

  return (
    <Drawer
      aria-labelledby={generatedId}
      className={styles['filters-drawer']}
      dismissible={true}
      drawerContainerClassName={containerClassName}
      isActive={isActive}
      onClose={() => {
        onClose && onClose();
      }}
    >
      <Drawer.Header closeButtonText="close filters">
        <Heading
          className={styles['filters-drawer__title']}
          id={generatedId}
          size="headline-sm"
        >
          Filters
        </Heading>
      </Drawer.Header>
      <Drawer.Body className={styles['filters-drawer__body']} ref={filtersBody}>
        {children}
      </Drawer.Body>
      {(onClear || onApply) && (
        <Drawer.Footer className={footerClassName}>
          <ButtonGroup className={buttonGroupClassName}>
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
        </Drawer.Footer>
      )}
    </Drawer>
  );
};
