import clsx from 'clsx';
import React, { useState, useRef } from 'react';
import styles from './Filters.module.css';
import Button from '../Button';
import { CheckboxField, FiltersDrawer } from '../FiltersDrawer/FiltersDrawer';
import Icon from '../Icon';

export type Props = {
  /**
   * Checkbox fields that will be displayed in the filters drawer.
   */
  checkboxFields: CheckboxField[];
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Callback called when filters drawer is closed.
   */
  closeFilters: (checkedIdentifiers: { [key: string]: boolean }) => void;
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
export const Filters = ({ checkboxFields, className, closeFilters }: Props) => {
  const checkedMap = {};
  checkboxFields.forEach(({ checkboxes }) => {
    checkboxes.forEach(({ identifier }) => {
      checkedMap[identifier] = false;
    });
  });
  const [appliedCheckedBoxes, setAppliedCheckedBoxes] = useState({
    ...checkedMap,
  });

  const [isActive, setIsActive] = useState(false);

  function closeFiltersDrawer(checkedIdentifiers: { [key: string]: boolean }) {
    setTimeout(() => {
      filtersButton?.current?.focus();
    }, 1);
    closeFilters(checkedIdentifiers);
    setAppliedCheckedBoxes({ ...checkedIdentifiers });
    setIsActive(false);
  }

  const filtersButton = useRef<HTMLButtonElement>(null);
  const filterCount = Object.values(appliedCheckedBoxes).reduce(
    (count: number, status) => {
      if (status) return count + 1;
      else return count;
    },
    0,
  );

  const hasFilters = filterCount > 0;
  const statusVariant = hasFilters ? 'brand' : 'neutral';

  const buttonClassName = clsx(
    !hasFilters && styles['filters__button--no-filter'],
  );
  return (
    <div>
      <Button
        className={buttonClassName}
        onClick={() => setIsActive(true)}
        ref={filtersButton}
        status={statusVariant}
        variant={hasFilters ? 'primary' : 'secondary'}
      >
        <Icon name="filter-list" purpose="decorative" size="1.5rem" />
        Filters {filterCount > 0 && `(${filterCount})`}
      </Button>
      <FiltersDrawer
        checkboxFields={checkboxFields}
        checkedMap={appliedCheckedBoxes}
        className={className}
        closeFilters={closeFiltersDrawer}
        isActive={isActive}
      />
    </div>
  );
};
