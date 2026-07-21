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
 * ## Usage
 *
 * * **Unordered**: Used for content where the order is not important.
 * * **Ordered**: Used for content where the order is important.
 * * EDS supports 1 level of nesting because our current products don't require deeper nesting.
 *
 * ### Unordered Lists
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * |Data presentation|Presents grouped or related information in an organized manner.|A list of user names with their status or profile images.|
 * |Hierarchical Data|Displays nested items or subcategories.|A file tree or nested comments in a discussion thread.|
 *
 * ### Ordered Lists
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * |Steps / Instructions|Lists steps in a specific order.|A step-by-step guide for setting up an account.|
 * |Nested steps|Breaks a long list of steps into groups of steps that accomplish a discrete action or piece of the overall task.|Long, complex procedures.|
 *
 * ### Best Practices
 *
 * * Include headings for lists that use custom characters instead of standard bullets or numbering.
 * * Don't rely on custom character bullets to convey meaning.
 * * Don't use multiple custom characters for one list item.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Keep each list item short and to the point.
 * * Use parallel structure in list items to aid understanding.
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
