import React, { useState } from 'react';
import styles from './Filters.module.css';
import Button from '../Button';
import FiltersCheckboxField from '../FiltersCheckboxField';
import FiltersDrawer from '../FiltersDrawer';
import FiltersPopover from '../FiltersPopover';
import Icon from '../Icon';
import Popover from '../Popover';

export type Props = {
  /**
   * Text to be placed in the button that activates the Filters Drawer
   */
  triggerText?: string;
  /**
   * Indicates status that filters have been selected, influencing toggle button variant.
   */
  hasSelectedFilters?: boolean;
  /**
   * Input components, input component fields, or relevant information that will be displayed in the filters drawer.
   */
  children: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Callback called when the clear button is called.
   */
  onClear?: () => void;
  /**
   * CSS class names that can be appended to the footer button group.
   */
  footerButtonGroupClassName?: string;
  /**
   * Callback called when filters are closed.
   * Currently only works with the 'drawer' variant.
   */
  onClose?: () => void;
  /**
   * Callback called when the apply button is called.
   */
  onApply?: () => void;
  /**
   * Which filters variant to render.
   */
  variant: 'drawer' | 'popover';
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
  triggerText,
  hasSelectedFilters,
  children,
  className,
  footerButtonGroupClassName,
  onClear,
  onClose,
  onApply,
  variant,
}: Props) => {
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

  const buttonVariant = hasSelectedFilters ? 'primary' : 'secondary';
  const buttonStatus = hasSelectedFilters ? 'brand' : 'neutral';

  return (
    <div>
      {variant === 'popover' && (
        <Popover placement="bottom-start">
          {({ close, open }) => (
            <>
              <Popover.Button as={React.Fragment}>
                <Button
                  className={styles['filters__button']}
                  onClick={() => setIsActive(true)}
                  status={buttonStatus}
                  variant={buttonVariant}
                >
                  <Icon name="filter-list" purpose="decorative" size="1.5rem" />
                  {triggerText}
                </Button>
              </Popover.Button>
              <FiltersPopover
                className={className}
                isActive={open}
                onApply={
                  onApply
                    ? () => {
                        applyFilters();
                        close();
                      }
                    : undefined
                }
                onClear={
                  onClear
                    ? () => {
                        clearFilters();
                        close();
                      }
                    : undefined
                }
                onClose={closeFilters}
              >
                {children}
              </FiltersPopover>
            </>
          )}
        </Popover>
      )}
      {variant === 'drawer' && (
        <>
          <Button
            className={styles['filters__button']}
            onClick={() => setIsActive(true)}
            status={buttonStatus}
            variant={buttonVariant}
          >
            <Icon name="filter-list" purpose="decorative" size="1.5rem" />
            {triggerText}
          </Button>
          <FiltersDrawer
            className={className}
            footerButtonGroupClassName={footerButtonGroupClassName}
            isActive={isActive}
            onApply={onApply ? applyFilters : undefined}
            onClear={onClear ? clearFilters : undefined}
            onClose={closeFilters}
          >
            {children}
          </FiltersDrawer>
        </>
      )}
    </div>
  );
};

Filters.FiltersDrawer = FiltersDrawer;
Filters.FiltersCheckboxField = FiltersCheckboxField;
