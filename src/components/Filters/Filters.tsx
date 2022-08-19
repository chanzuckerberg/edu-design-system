import React, { useState } from 'react';
import styles from './Filters.module.css';
import Button from '../Button';
import { FiltersCheckboxField } from '../FiltersCheckboxField/FiltersCheckboxField';
import { FiltersDrawer } from '../FiltersDrawer/FiltersDrawer';
import Icon from '../Icon';

export type Props = {
  buttonText?: string;
  buttonStatusVariant: 'neutral' | 'brand';
  /**
   * Checkboxes or Checkbox fields that will be displayed in the filters drawer.
   */
  children: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Callback called when Clear All button is called.
   */
  onClear?: () => void;
  /**
   * Callback called when filters drawer is closed.
   */
  onClose?: () => void;
  /**
   * Callback called when Apply button is called.
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
  buttonText,
  buttonStatusVariant,
  children,
  className,
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
    if (onClose) {
      onClose();
    }
    closeFiltersDrawer();
  }

  function clearFilters() {
    if (onClear) {
      onClear();
    }
    closeFiltersDrawer();
  }

  function applyFilters() {
    if (onApply) {
      onApply();
    }
    closeFiltersDrawer();
  }

  const buttonVariant =
    buttonStatusVariant === 'brand' ? 'primary' : 'secondary';

  return (
    <div>
      <Button
        className={styles['filters__button']}
        onClick={() => setIsActive(true)}
        status={buttonStatusVariant}
        variant={buttonVariant}
      >
        <Icon name="filter-list" purpose="decorative" size="1.5rem" />
        {buttonText}
      </Button>
      <FiltersDrawer
        className={className}
        isActive={isActive}
        onApply={applyFilters}
        onClear={clearFilters}
        onClose={closeFilters}
      >
        {children}
      </FiltersDrawer>
    </div>
  );
};

Filters.FiltersDrawer = FiltersDrawer;
Filters.FiltersCheckboxField = FiltersCheckboxField;
