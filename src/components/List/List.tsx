import clsx from 'clsx';
import React from 'react';
import { createContext, useContext } from 'react';

import { type Size } from '../../util/variant-types';

import styles from './List.module.css';

// List component utilities
export type OrderedListProps = React.HTMLAttributes<HTMLOListElement> & {
  // Design API
  /**
   * Size of the list and its item (controls spacing but requires proper usage of `Text`/`Heading` when composing)
   */
  size?: Extract<Size, 'xs' | 'sm' | 'md'>;
  /**
   * Marker to use with the given list type
   * - for `OrderedList`, will use no marker or the `default` marker (e.g., "1.")
   */
  markerType?: 'none' | 'default';
  // Component API
};

export type UnorderedListProps = React.HTMLAttributes<HTMLUListElement> & {
  // Design API
  /**
   * Size of the list and its item (controls spacing but requires proper usage of `Text`/`Heading` when composing)
   */
  size?: Extract<Size, 'xs' | 'sm' | 'md'>;
  /**
   * Marker to use with the given list type
   * - for `UnorderedList`, will use no marker or the `default` marker (e.g., "•")
   */
  markerType?: 'none' | 'default';
  // Component API
};

// List item component utilities
export type ListItemProps = React.HTMLAttributes<HTMLLIElement> & {
  // Component API
  size?: Extract<Size, 'xs' | 'sm' | 'md'>;
};

export const ListContext = createContext<{
  size: UnorderedListProps['size'] | OrderedListProps['size'];
}>({ size: 'md' });

export function getListStyleProps(
  props: OrderedListProps | UnorderedListProps,
) {
  const { className, size = 'md', markerType } = props;
  return {
    className: clsx(
      styles['list'],
      styles[`list--size-${size}`],
      markerType && styles[`list--markerType-${markerType}`],
      className,
    ),
  };
}

export function getListItemStyleProps(props: ListItemProps) {
  const { className, size = 'md' } = props;

  return {
    className: clsx(
      styles['list-item'],
      styles[`list-item--size-${size}`],
      className,
    ),
  };
}

const ListItem = (props: ListItemProps) => {
  const { children, ...rest } = props;
  const { size } = useContext(ListContext);

  return <li {...getListItemStyleProps({ ...rest, size })}>{children}</li>;
};

/**
 * Control a list of text items that are semantically unordered.
 *
 * @param props options for the list to control size and marker type
 * @returns ReactNode
 */
export const UnorderedList = (props: UnorderedListProps) => {
  const { children, size } = props;
  return (
    <ListContext.Provider value={{ size }}>
      <ul {...getListStyleProps(props)}>{children}</ul>
    </ListContext.Provider>
  );
};

/**
 * Control a list of text items that are semantically ordered (ordinal sequence by number).
 *
 * @param props options for the list to control size and marker type
 * @returns ReactNode
 */
export const OrderedList = (props: OrderedListProps) => {
  const { children, size } = props;
  return (
    <ListContext.Provider value={{ size }}>
      <ol {...getListStyleProps(props)}>{children}</ol>
    </ListContext.Provider>
  );
};

UnorderedList.ListItem = ListItem;
OrderedList.ListItem = ListItem;
