import clsx from 'clsx';
import React, { createRef, useEffect, useState } from 'react';
import { useUID } from 'react-uid';
import styles from './FiltersDrawer.module.css';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Checkbox from '../Checkbox';
import Drawer from '../Drawer';
import FiltersCheckboxField from '../FiltersCheckboxField';
import Heading from '../Heading';

export type Props = {
  /**
   * Checkbox fields that will be displayed in the filters drawer.
   */
  checkboxFields: CheckboxField[];
  /**
   * Checked identifier keys mapped to their boolean checked status.
   */
  checkedMap: { [key: string]: boolean };
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Callback called when filters drawer is closed.
   */
  closeFilters: (checkedIdentifiers: { [key: string]: boolean }) => void;
  /**
   * Sets the filters drawer window open or closed.
   */
  isActive: boolean;
};

export type CheckboxField = {
  /**
   * Legend text string that names the fieldset.
   */
  legend?: string;
  /**
   * List of checkboxes to be placed in the filters.
   */
  checkboxes: Checkbox[];
};

export type Checkbox = {
  /**
   * Visible text label for the checkbox.
   */
  label: string;
  /**
   * Checkbox identifier that is mapped with a boolean value that indicates checked status.
   * Should be unique to the checkbox unless the checkbox is repeated.
   */
  identifier: string;
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
  checkboxFields,
  checkedMap,
  className,
  closeFilters,
  isActive,
}: Props) => {
  const [checkedBoxes, setCheckedBoxes] = useState({ ...checkedMap });
  useEffect(() => {
    if (isActive) {
      setCheckedBoxes({ ...checkedMap });
    }
  }, [isActive, checkedMap]);

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

  function clearFilters() {
    const clearedBoxes = {};
    Object.keys(checkedBoxes).forEach((identifier) => {
      clearedBoxes[identifier] = false;
    });
    closeFilters(clearedBoxes);
  }

  function applyFilters() {
    closeFilters(checkedBoxes);
  }

  const componentClassName = clsx(styles['filters-drawer'], className);
  const footerClassName = clsx(
    styles['filters-drawer__footer'],
    isOverflowing && styles['filters-drawer__footer--overflow'],
  );

  const generatedId = useUID();

  return (
    <Drawer
      aria-labelledby={generatedId}
      className={componentClassName}
      dismissible={true}
      isActive={isActive}
      onClose={() => closeFilters(checkedMap)}
      windowClassName={styles['filters-drawer__window']}
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
  );
};
