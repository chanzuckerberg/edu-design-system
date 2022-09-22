import clsx from 'clsx';
import React, {
  createRef,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { useUID } from 'react-uid';
import styles from './FiltersDrawer.module.css';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Drawer from '../Drawer';
import FiltersButton from '../FiltersButton';
import Heading from '../Heading';

export type FiltersDrawerProps = {
  /**
   * Form controls, form fields, or other relevant information that will be displayed in the filters drawer.
   */
  children: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * CSS class names that can be appended to the footer button group.
   */
  footerButtonGroupClassName?: string;
  /**
   * Indicates status that filters have been selected, influencing toggle button variant.
   */
  hasSelectedFilters?: boolean;
  /**
   * Callback called when the clear button is called.
   */
  onClear?: () => void;
  /**
   * Callback called when filters drawer is closed.
   */
  onClose?: () => void;
  /**
   * Callback called when the apply button is called.
   */
  onApply?: () => void;
  /**
   * Trigger element that toggles the filters drawer.
   * Must be able to accept an 'onClick: () => void' prop.
   *
   * Either `triggerElement` or `triggerText` must be passed in, and if both are passed, `triggerElement` will be used.
   */
  triggerElement?: ReactNode;
  /**
   * Text to be placed in the button that activates the Filters Drawer
   *
   * Either `triggerElement` or `triggerText` must be passed in, and if both are passed, `triggerElement` will be used.
   */
  triggerText?: string;
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
  children,
  className,
  footerButtonGroupClassName,
  hasSelectedFilters,
  onClear,
  onApply,
  onClose,
  triggerElement,
  triggerText,
}: FiltersDrawerProps) => {
  if (
    !triggerElement &&
    !triggerText &&
    process.env.NODE_ENV !== 'production'
  ) {
    throw new Error(
      'Provide triggerText as trigger button text or a custom triggerElement for FiltersDrawer control',
    );
  }

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

  /**
   * Manages overflow state.
   */
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

  const trigger = triggerElement ? (
    React.cloneElement(triggerElement as ReactElement, {
      onClick: () => setIsActive(true),
    })
  ) : (
    <FiltersButton
      hasSelectedFilters={hasSelectedFilters}
      onClick={() => setIsActive(true)}
      // in this ternary operator, triggerText will never be falsy since we check for it earlier.
      triggerText={triggerText!} // eslint-disable-line @typescript-eslint/no-non-null-assertion
    />
  );

  const bodyClassName = clsx(styles['filters-drawer__body'], className);
  const footerClassName = clsx(
    styles['filters-drawer__footer'],
    isOverflowing && styles['filters-drawer__footer--overflow'],
  );

  const buttonGroupClassName = clsx(
    styles['footer__button-group'],
    footerButtonGroupClassName,
  );

  const generatedId = useUID();

  return (
    <div>
      {trigger}
      <Drawer
        aria-labelledby={generatedId}
        className={styles['filters-drawer']}
        dismissible={true}
        drawerContainerClassName={styles['filters-drawer__container']}
        isActive={isActive}
        onClose={closeFilters}
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
        <Drawer.Body className={bodyClassName} ref={filtersBody}>
          {children}
        </Drawer.Body>
        {(onClear || onApply) && (
          <Drawer.Footer className={footerClassName}>
            <ButtonGroup className={buttonGroupClassName}>
              {onClear && (
                <Button
                  className={styles['footer__button']}
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
              )}
              {onApply && (
                <Button
                  className={styles['footer__button']}
                  onClick={applyFilters}
                  variant="primary"
                >
                  Apply
                </Button>
              )}
            </ButtonGroup>
          </Drawer.Footer>
        )}
      </Drawer>
    </div>
  );
};
