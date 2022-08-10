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
  onClose: (checkedValues: { [key: string]: boolean }) => void;
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
export const Filters = ({ checkboxFields, className, onClose }: Props) => {
  /**
   * Maps the checkbox values to false initially to indicate that there are no filters selected.
   * TODO: customize to allow initial filter values.
   */
  const checkedMap = {};
  checkboxFields.forEach(({ checkboxes }) => {
    checkboxes.forEach(({ value }) => {
      checkedMap[value] = false;
    });
  });

  /**
   * Manages state of the applied checkboxes in the context of the filters component.
   * It is only updated when the filters drawer is closed.
   */
  const [appliedCheckedBoxes, setAppliedCheckedBoxes] = useState({
    ...checkedMap,
  });

  /**
   * Manages the active state of the filters drawer.
   */
  const [isActive, setIsActive] = useState(false);

  function closeFiltersDrawer(checkedValues: { [key: string]: boolean }) {
    filtersButton?.current?.focus();
    onClose(checkedValues);
    setAppliedCheckedBoxes({ ...checkedValues });
    setIsActive(false);
  }

  const filtersButton = useRef<HTMLButtonElement>(null);
  /**
   * Counts how many filters have been applied.
   */
  const filterCount = Object.values(appliedCheckedBoxes).reduce(
    (count: number, status) => {
      if (status) return count + 1;
      else return count;
    },
    0,
  );

  const hasFilters = filterCount > 0;
  const statusVariant = hasFilters ? 'brand' : 'neutral';

  return (
    <div>
      <Button
        className={styles['filters__button']}
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
        isActive={isActive}
        onClose={closeFiltersDrawer}
      />
    </div>
  );
};
