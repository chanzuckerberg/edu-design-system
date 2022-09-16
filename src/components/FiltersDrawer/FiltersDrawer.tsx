import clsx from 'clsx';
import React, { createRef, useEffect, useState } from 'react';
import { useUID } from 'react-uid';
import styles from './FiltersDrawer.module.css';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Drawer from '../Drawer';
import Heading from '../Heading';
import Icon from '../Icon';

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
   * Text to be placed in the button that activates the Filters Drawer
   */
  triggerText?: string;
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
  hasSelectedFilters,
  onClear,
  onApply,
  onClose,
  triggerText,
}: FiltersDrawerProps) => {
  /**
   * Manages the active state of the filters drawer.
   */
  const [isActive, setIsActive] = useState(false);

  function closeFiltersDrawer() {
    setIsActive(false);
  }

  function closeFilters() {
    closeFiltersDrawer();
    onClose && onClose();
  }

  function clearFilters() {
    closeFiltersDrawer();
    onClear && onClear();
  }

  function applyFilters() {
    closeFiltersDrawer();
    onApply && onApply();
  }

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

  const buttonVariant = hasSelectedFilters ? 'primary' : 'secondary';
  const buttonStatus = hasSelectedFilters ? 'brand' : 'neutral';

  const bodyClassName = clsx(styles['filters-drawer__body'], className);
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
    <div>
      <Button
        className={styles['filters-drawer__trigger']}
        onClick={() => setIsActive(true)}
        status={buttonStatus}
        variant={buttonVariant}
      >
        <Icon name="filter-list" purpose="decorative" size="1.5rem" />
        {triggerText}
      </Button>
      <Drawer
        aria-labelledby={generatedId}
        className={styles['filters-drawer']}
        dismissible={true}
        drawerContainerClassName={styles['filters-drawer__container']}
        isActive={isActive}
        onClose={closeFilters}
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
        <Drawer.Body className={bodyClassName} ref={filtersBody}>
          {children}
        </Drawer.Body>
        {(onClear || onApply) && (
          <Drawer.Footer className={footerClassName}>
            <ButtonGroup className={buttonGroupClassName}>
              {onClear && (
                <Button
                  className={styles['footer__button']}
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
              )}
              {onApply && (
                <Button
                  className={styles['footer__button']}
                  onClick={applyFilters}
                  variant="primary"
                >
                  Apply
                </Button>
              )}
            </ButtonGroup>
          </Drawer.Footer>
        )}
      </Drawer>
    </div>
  );
};
