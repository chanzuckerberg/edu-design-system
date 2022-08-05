import clsx from 'clsx';
import React, { createRef, useEffect, useState, useRef } from 'react';
import { useUID } from 'react-uid';
import styles from './Filters.module.css';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Drawer from '../Drawer';
import FiltersCheckboxField from '../FiltersCheckboxField';
import Heading from '../Heading';

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  children: React.ReactNode;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Filters} from "@chanzuckerberg/eds";
 * ```
 */
export const Filters = ({ children, className }: Props) => {
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
  const footerClassName = clsx(
    styles['filters__footer'],
    isOverflowing && styles['filters__footer--overflow'],
  );

  // TODO: find if filters enabled
  const buttonClassName = clsx(styles['filters__button']);
  const generatedId = useUID();
  return (
    <div>
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
          <div className="fpo">Drawer body</div>
          {children}
        </Drawer.Body>
        <Drawer.Footer className={footerClassName}>
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
