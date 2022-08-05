import clsx from 'clsx';
import React, { useState, useRef } from 'react';
import { useUID } from 'react-uid';
import styles from './Filters.module.css';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Drawer from '../Drawer';
import FiltersCheckboxField from '../FiltersCheckboxField';
import Heading from '../Heading';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  children: React.ReactNode;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Filters} from "@chanzuckerberg/eds";
 * ```
 */
export const Filters = ({ children, className, ...other }: Props) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtersButton = useRef<HTMLButtonElement>(null);

  function openDrawerExample() {
    setFiltersOpen(true);
  }

  function closeDrawerExample(event: any) {
    setTimeout(() => {
      filtersButton?.current?.focus();
    }, 1);
    if (event) {
      event.preventDefault();
    }
    setFiltersOpen(false);
  }
  const componentClassName = clsx(styles['filters'], className);

  // TODO: find if filters enabled
  const buttonClassName = clsx(styles['filters__button']);
  const generatedId = useUID();
  return (
    <div className={componentClassName} {...other}>
      <Button
        className={buttonClassName}
        onClick={openDrawerExample}
        ref={filtersButton}
        variant="primary"
      >
        {/* TODO: allow button labels */}
        All Filters
      </Button>

      <Drawer
        aria-labelledby={generatedId}
        className={componentClassName}
        dismissible={true}
        isActive={filtersOpen}
        onClose={closeDrawerExample}
      >
        <Drawer.Header>
          <Heading id={generatedId} size="h2">
            {/* TODO: allow different headings */}
            All Filters
          </Heading>
        </Drawer.Header>
        <Drawer.Body className={styles['filters__body']}>
          <div className="fpo">Drawer body</div>
          {children}
        </Drawer.Body>
        <Drawer.Footer>
          <ButtonGroup className={styles['footer__button-group']}>
            <Button
              className={styles['footer__button']}
              onClick={closeDrawerExample}
            >
              Clear All
            </Button>
            <Button className={styles['footer__button']} variant="primary">
              Apply
            </Button>
          </ButtonGroup>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
};

Filters.CheckboxField = FiltersCheckboxField;
