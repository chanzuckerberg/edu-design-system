import React, { useState } from 'react';
import styles from './Filters.module.css';
import Button from '../Button';
import { FiltersCheckboxField } from '../FiltersCheckboxField/FiltersCheckboxField';
import { FiltersDrawer } from '../FiltersDrawer/FiltersDrawer';
import Icon from '../Icon';

export type Props = {
  /**
   * Text to be placed in the button that activates the Filters Drawer
   */
  triggerText?: string;
  /**
   * Button status variant that indicates if filters had been selected.
   */
  hasFilters?: boolean;
  /**
   * Input components, input component fields, or relevant information that will be displayed in the filters drawer.
   */
  children: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Callback called when the clear button is called.
   */
  onClear?: () => void;
  /**
   * CSS class names that can be appended to the footer button group.
   */
  footerButtonGroupClassName?: string;
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
 * import {Filters} from "@chanzuckerberg/eds";
 * ```'
 *
 * A filter component with a button that triggers a drawer of checkbox filters to be selected.
 */
export const Filters = ({
  triggerText,
  hasFilters,
  children,
  className,
  footerButtonGroupClassName,
  onClear,
  onClose,
  onApply,
}: Props) => {
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

  const buttonVariant = hasFilters ? 'primary' : 'secondary';
  const buttonStatus = hasFilters ? 'brand' : 'neutral';

  return (
    <div>
      <Button
        className={styles['filters__button']}
        onClick={() => setIsActive(true)}
        status={buttonStatus}
        variant={buttonVariant}
      >
        <Icon name="filter-list" purpose="decorative" size="1.5rem" />
        {triggerText}
      </Button>
      <FiltersDrawer
        className={className}
        footerButtonGroupClassName={footerButtonGroupClassName}
        isActive={isActive}
        onApply={onApply ? applyFilters : undefined}
        onClear={onClear ? clearFilters : undefined}
        onClose={closeFilters}
      >
        {children}
      </FiltersDrawer>
    </div>
  );
};

Filters.FiltersDrawer = FiltersDrawer;
Filters.FiltersCheckboxField = FiltersCheckboxField;
