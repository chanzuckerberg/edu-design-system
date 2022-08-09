import clsx from 'clsx';
import React, { useState, useRef } from 'react';
import styles from './Filters.module.css';
import Button from '../Button';
import FiltersDrawer from '../FiltersDrawer';
import Icon from '../Icon';

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  checkboxFields: CheckboxField[];
  closeFilters: (checkedIdentifiers: { [key: string]: boolean }) => void;
};

export type CheckboxField = {
  legend?: string;
  checkboxes: Checkbox[];
};

export type Checkbox = {
  label: string;
  identifier: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Filters} from "@chanzuckerberg/eds";
 * ```
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

  const [filtersOpen, setFiltersOpen] = useState(false);

  function closeFiltersDrawer(checkedIdentifiers: { [key: string]: boolean }) {
    setTimeout(() => {
      filtersButton?.current?.focus();
    }, 1);
    closeFilters(checkedIdentifiers);
    setAppliedCheckedBoxes({ ...checkedIdentifiers });
    setFiltersOpen(false);
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
        onClick={() => setFiltersOpen(true)}
        ref={filtersButton}
        status={statusVariant}
        variant={hasFilters ? 'primary' : 'secondary'}
      >
        <Icon name="filter-list" purpose="decorative" size="1.5rem" />
        {/* TODO: allow button labels */}
        All Filters {filterCount > 0 && `(${filterCount})`}
      </Button>
      <FiltersDrawer
        checkboxFields={checkboxFields}
        checkedMap={appliedCheckedBoxes}
        className={className}
        closeFilters={closeFiltersDrawer}
        filtersOpen={filtersOpen}
      />
    </div>
  );
};
