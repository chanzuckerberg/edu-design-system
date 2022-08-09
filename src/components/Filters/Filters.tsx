import clsx from 'clsx';
import React, { createRef, useEffect, useState, useRef } from 'react';
import { useUID } from 'react-uid';
import styles from './Filters.module.css';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Checkbox from '../Checkbox';
import Drawer from '../Drawer';
import FiltersCheckboxField from '../FiltersCheckboxField';
import Heading from '../Heading';
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
  const [checkedBoxes, setCheckedBoxes] = useState({ ...checkedMap });
  const [appliedCheckedBoxes, setAppliedCheckedBoxes] = useState({
    ...checkedMap,
  });

  const handleCheckboxChange = (identifier: string) => {
    setCheckedBoxes({
      ...checkedBoxes,
      [identifier]: !checkedBoxes[identifier],
    });
  };

  const filtersCheckboxFieldComponents = checkboxFields.map(
    ({ legend, checkboxes }, index) => (
      <FiltersCheckboxField key={legend || '' + index} legend={legend}>
        {checkboxes.map(({ label, identifier }) => (
          <Checkbox
            checked={checkedBoxes[identifier]}
            key={identifier}
            label={label}
            onChange={() => handleCheckboxChange(identifier)}
          />
        ))}
      </FiltersCheckboxField>
    ),
  );

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const filtersButton = useRef<HTMLButtonElement>(null);
  const filtersBody = createRef<HTMLDivElement>();

  useEffect(() => {
    if (
      filtersBody.current &&
      filtersBody.current.scrollHeight > filtersBody.current.clientHeight
    ) {
      setIsOverflowing(true);
    }
  }, [filtersBody]);

  function openFilterWindow() {
    setCheckedBoxes({ ...appliedCheckedBoxes });
    setFiltersOpen(true);
  }

  function closeFiltersWindow() {
    setTimeout(() => {
      filtersButton?.current?.focus();
    }, 1);
    setFiltersOpen(false);
  }

  function clearFilters() {
    const clearedBoxes = {};
    Object.keys(checkedBoxes).forEach((identifier) => {
      clearedBoxes[identifier] = false;
    });
    setAppliedCheckedBoxes(clearedBoxes);
    closeFilters(clearedBoxes);
    closeFiltersWindow();
  }

  function applyFilters() {
    const newBoxes = { ...checkedBoxes };
    setAppliedCheckedBoxes(newBoxes);
    closeFilters(newBoxes);
    closeFiltersWindow();
  }

  const componentClassName = clsx(styles['filters'], className);
  const footerClassName = clsx(
    styles['filters__footer'],
    isOverflowing && styles['filters__footer--overflow'],
  );

  const generatedId = useUID();
  const filterCount = Object.values(appliedCheckedBoxes).reduce(
    (count: number, status) => {
      if (status) return count + 1;
      else return count;
    },
    0,
  );
  const statusVariant = filterCount > 0 ? 'brand' : 'neutral';
  return (
    <div>
      <Button
        className={styles['filters__button']}
        onClick={openFilterWindow}
        ref={filtersButton}
        status={statusVariant}
        variant="primary"
      >
        <Icon name="filter-list" purpose="decorative" size="1.5rem" />
        {/* TODO: allow button labels */}
        All Filters {filterCount > 0 && `(${filterCount})`}
      </Button>

      <Drawer
        aria-labelledby={generatedId}
        className={componentClassName}
        dismissible={true}
        isActive={filtersOpen}
        onClose={closeFiltersWindow}
        windowClassName={styles['filters__window']}
      >
        <Drawer.Header closeButtonText="close filters">
          <Heading
            className={styles['filters__title']}
            id={generatedId}
            size="headline-sm"
          >
            {/* TODO: allow different headings */}
            All Filters
          </Heading>
        </Drawer.Header>
        <Drawer.Body className={styles['filters__body']} ref={filtersBody}>
          {filtersCheckboxFieldComponents}
        </Drawer.Body>
        <Drawer.Footer className={footerClassName}>
          <ButtonGroup className={styles['footer__button-group']}>
            <Button className={styles['footer__button']} onClick={clearFilters}>
              Clear All
            </Button>
            <Button
              className={styles['footer__button']}
              onClick={applyFilters}
              variant="primary"
            >
              Apply
            </Button>
          </ButtonGroup>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
};
