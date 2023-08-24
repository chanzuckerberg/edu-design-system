import clsx from 'clsx';
import React, { useState, useEffect, useRef, forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Checkbox, Fieldset, Icon, Table } from '../../../src';

import Button, { type ButtonProps } from '../Button';
import ButtonGroup from '../ButtonGroup';

import type { VariantStatus } from '../ClickableStyle';
import type { PopoverProps } from '../Popover';

import Popover from '../Popover';
import styles from './Filters.module.css';

type FiltersPopoverProps = {
  /**
   * Form controls, form fields, or other relevant information that will be displayed in the filters popover.
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
   * Popover placement options relative to the filters trigger button.
   */
  placement?: PopoverProps['placement'];
  /**
   * Trigger element that toggles the filters drawer.
   * Must be able to forward a ref.
   */
  triggerElement?: ReactNode;
  /**
   * Text to be placed in the button that activates the Filters Drawer
   */
  triggerText?: string;
};

type FiltersPopoverRenderProps = {
  /**
   * Closes popover action render prop passed from Popover parent.
   */
  close: (
    focusableElement?: HTMLElement | React.RefObject<HTMLElement>,
  ) => void;
  /**
   * Popover open status render prop passed from Popover parent.
   */
  open: boolean;
} & Omit<FiltersPopoverProps, 'placement'>;

/**
 * This helper component passes render props from <Popover> to handle onClose functionality
 * that HeadlessUI Popover does not provide natively.
 */
const FiltersPopoverRender = ({
  children,
  className,
  close,
  footerButtonGroupClassName,
  hasSelectedFilters,
  onApply,
  onClear,
  onClose,
  open,
  triggerElement,
  triggerText,
  ...other
}: FiltersPopoverRenderProps) => {
  if (
    !triggerElement &&
    !triggerText &&
    process.env.NODE_ENV !== 'production'
  ) {
    throw new Error(
      'Provide triggerText as trigger button text or a custom triggerElement for FiltersPopover control',
    );
  }

  // Get a stable reference to the onClose callback.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  /**
   * Hooks to emulate an onClose callback for the Popover.
   * Tracking first render is required to prevent useEffect callback from running on first render since Popover may render as closed.
   */
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else if (!open && onCloseRef.current) {
      onCloseRef.current();
    }
  }, [open]);

  const trigger = triggerElement || (
    <FiltersButton
      hasSelectedFilters={hasSelectedFilters}
      // in this ternary operator, triggerText will never be falsy since we check for it earlier.
      triggerText={triggerText!} // eslint-disable-line @typescript-eslint/no-non-null-assertion
    />
  );

  const buttonGroupClassName = clsx(
    styles['footer__button-group'],
    footerButtonGroupClassName,
  );

  return (
    <>
      <Popover.Button as={React.Fragment}>{trigger}</Popover.Button>
      <Popover.Content bodyClassName={styles['filters-popover']} {...other}>
        <div className={className}>{children}</div>
        {(onClear || onApply) && (
          <ButtonGroup className={buttonGroupClassName}>
            {onClear && (
              <Button
                onClick={() => {
                  close();
                  onClear();
                }}
              >
                Clear All
              </Button>
            )}
            {onApply && (
              <Button
                onClick={() => {
                  close();
                  onApply();
                }}
                variant="primary"
              >
                Apply
              </Button>
            )}
          </ButtonGroup>
        )}
      </Popover.Content>
    </>
  );
};

/**
 * A popover component with fields of form inputs to select filters.
 */
const FiltersPopover = ({
  placement = 'bottom-start',
  ...other
}: FiltersPopoverProps) => {
  return (
    <Popover placement={placement}>
      {({ close, open }) => (
        <FiltersPopoverRender close={close} open={open} {...other} />
      )}
    </Popover>
  );
};

export type FiltersButtonProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Indicates status that filters have been selected, influencing toggle button variant.
   */
  hasSelectedFilters?: boolean;
  /**
   * Text to be placed in the button that activates the Filters.
   */
  triggerText: string;
} & Omit<ButtonProps, 'children' | 'variant' | 'status'>;

export const FiltersButton = forwardRef<HTMLButtonElement, FiltersButtonProps>(
  ({ className, hasSelectedFilters, triggerText, ...other }, ref) => {
    const componentClassName = clsx(styles['filters-button'], className);

    const variantStatus: VariantStatus = hasSelectedFilters
      ? {
          variant: 'primary',
          status: 'brand',
        }
      : {
          variant: 'secondary',
          status: 'neutral',
        };

    return (
      <Button
        className={componentClassName}
        ref={ref}
        {...other}
        {...variantStatus}
      >
        <Icon name="filter-list" purpose="decorative" size="1.5rem" />
        {triggerText}
      </Button>
    );
  },
);

/**
 * Demonstrates usage of both FiltersPopover and FiltersDrawer depending on screensize.
 */
export const Filters = ({ ...other }) => {
  const [checked, setChecked] = useState({
    salad: false,
    sandwich: false,
    soup: false,
  });

  const onCheckboxChange = (food: 'salad' | 'sandwich' | 'soup') => {
    const newChecked = { ...checked };
    newChecked[food] = !checked[food];
    setChecked(newChecked);
  };

  /**
   * Counts how many filters have been applied.
   */
  const filterCount = Object.values(checked).reduce((count: number, status) => {
    return status ? count + 1 : count;
  }, 0);

  const hasSelectedFilters = filterCount > 0;
  const triggerText = hasSelectedFilters
    ? `Filters (${filterCount})`
    : 'Filters';

  const checkboxes = (
    <Fieldset className={styles['filters-filedset']}>
      <Fieldset.Legend
        className={styles['filters-fieldset__legend']}
        text="Filters Segment 1"
      ></Fieldset.Legend>
      <Fieldset.Items className={styles['filters-fieldset__checkboxes']}>
        <Checkbox
          checked={checked.soup}
          label="Soup"
          onChange={() => onCheckboxChange('soup')}
        />
        <Checkbox
          checked={checked.salad}
          label="Salad"
          onChange={() => onCheckboxChange('salad')}
        />
        <Checkbox
          checked={checked.sandwich}
          label="Sandwich"
          onChange={() => onCheckboxChange('sandwich')}
        />
      </Fieldset.Items>
    </Fieldset>
  );

  const foods = [
    {
      name: 'Cereal',
      isSoup: true,
      isSalad: true,
      isSandwich: false,
    },
    {
      name: 'Fried Rice',
      isSoup: false,
      isSalad: true,
      isSandwich: false,
    },
    {
      name: 'Hot Dog',
      isSoup: false,
      isSalad: false,
      isSandwich: true,
    },
    {
      name: 'Mashed Potatoes',
      isSoup: true,
      isSalad: true,
      isSandwich: false,
    },
    {
      name: 'Nigiri',
      isSoup: false,
      isSalad: true,
      isSandwich: true,
    },
    {
      name: 'Oatmeal',
      isSoup: true,
      isSalad: false,
      isSandwich: false,
    },
    {
      name: 'Soup in Bread Bowl',
      isSoup: true,
      isSalad: false,
      isSandwich: true,
    },
    {
      name: 'Sloppy Joe',
      isSoup: true,
      isSalad: true,
      isSandwich: true,
    },
    {
      name: 'Vanilla Soy Latte',
      isSoup: true,
      isSalad: false,
      isSandwich: false,
    },
  ];

  /**
   * Utility function for checking if filter category has been applied.
   * If filter has not been applied, should not filter for the food.
   */
  const whenChecked = (filter: boolean, data: boolean) =>
    filter ? filter === data : true;

  // Filter for foods that have been checked.
  const filteredFoods = foods
    .filter((food) => whenChecked(checked.salad, food.isSalad))
    .filter((food) => whenChecked(checked.soup, food.isSoup))
    .filter((food) => whenChecked(checked.sandwich, food.isSandwich));

  const foodTable = (
    <Table>
      <Table.Header>
        <Table.Row variant="header">
          <Table.HeaderCell className="w-1/4">Food</Table.HeaderCell>
          <Table.HeaderCell className="w-1/4 text-center">
            Soup
          </Table.HeaderCell>
          <Table.HeaderCell className="w-1/4 text-center">
            Salad
          </Table.HeaderCell>
          <Table.HeaderCell className="w-1/4 text-center">
            Sandwich
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {filteredFoods.map((food) => (
          <Table.Row key={'table-row-' + food.name}>
            <Table.Cell>{food.name}</Table.Cell>
            <Table.Cell className="w-1/4 text-center">
              {(food.isSoup && (
                <Icon name="star" purpose="informative" title="is soup" />
              )) ||
                ''}
            </Table.Cell>
            <Table.Cell className="text-center">
              {(food.isSalad && (
                <Icon name="star" purpose="informative" title="is salad" />
              )) ||
                ''}
            </Table.Cell>
            <Table.Cell className="text-center">
              {(food.isSandwich && (
                <Icon name="star" purpose="informative" title="is sandwich" />
              )) ||
                ''}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );

  const sharedProps = {
    hasSelectedFilters,
    triggerText,
    children: checkboxes,
    ...other,
  };

  return (
    <div>
      <FiltersPopover placement="bottom-start" {...sharedProps} />
      {foodTable}
    </div>
  );
};
