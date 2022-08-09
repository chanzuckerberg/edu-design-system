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

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  checkboxFields: CheckboxField[];
  checkedMap: { [key: string]: boolean };
  className?: string;
  closeFilters: (checkedIdentifiers: { [key: string]: boolean }) => void;
  filtersOpen: boolean;
}

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
 * import {FiltersDrawer} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const FiltersDrawer = ({
  checkboxFields,
  checkedMap,
  className,
  closeFilters,
  filtersOpen,
}: Props) => {
  const [checkedBoxes, setCheckedBoxes] = useState({ ...checkedMap });
  useEffect(() => {
    if (filtersOpen) {
      setCheckedBoxes({ ...checkedMap });
    }
  }, [filtersOpen, checkedMap]);

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
      isActive={filtersOpen}
      onClose={() => closeFilters(checkedMap)}
      windowClassName={styles['filters-drawer__window']}
    >
      <Drawer.Header closeButtonText="close filters">
        <Heading
          className={styles['filters-drawer__title']}
          id={generatedId}
          size="headline-sm"
        >
          {/* TODO: allow different headings */}
          All Filters
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
