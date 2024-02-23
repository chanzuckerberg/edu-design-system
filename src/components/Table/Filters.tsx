import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  FiltersCheckboxField,
  FiltersDrawer,
  FiltersPopover,
  Icon,
  Table,
} from '../../../src';

import breakpoint from '../../../src/design-tokens/tier-1-definitions/breakpoints';

/**
 * Demonstrates usage of both FiltersPopover and FiltersDrawer depending on screensize.
 */
export const Filters = ({ ...other }) => {
  const [isLarge, setIsLarge] = useState(false);
  const popoverBreakpoint = parseInt(breakpoint['eds-bp-md'], 10) * 16;

  const updateScreenSize = debounce(() => {
    if (window.innerWidth >= popoverBreakpoint && !isLarge) {
      setIsLarge(true);
    }
    if (window.innerWidth < popoverBreakpoint && isLarge) {
      setIsLarge(false);
    }
  }, 200);

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [updateScreenSize]);

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
    <FiltersCheckboxField legend="Filters Segment 1">
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
    </FiltersCheckboxField>
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
      {!isLarge && <FiltersDrawer {...sharedProps} />}
      {isLarge && <FiltersPopover placement="bottom-start" {...sharedProps} />}
      {foodTable}
    </div>
  );
};
