import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useUID } from 'react-uid';
import styles from './Breadcrumbs.module.css';
import { flattenReactChildren } from '../../util/flattenReactChildren';
import BreadcrumbsItem from '../BreadcrumbsItem';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * aria-label for `nav` element to describe Breadcrumbs navigation to screen readers
   */
  ariaLabel?: string;

  /**
   * HTML id for the component
   */
  id?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Breadcrumbs} from "@chanzuckerberg/eds";
 * ```
 *
 * List of Breadcrumb components showing the user where they are in the system and allow them
 * to navigate to parent pages.
 */
export const Breadcrumbs = ({
  className,
  children,
  id,
  ariaLabel = 'breadcrumbs links',
  ...other
}: Props) => {
  const generatedId = useUID();
  const breadcrumbsId = id || generatedId;

  const componentClassName = clsx(styles['breadcrumbs'], className);

  const breadcrumbItems = flattenBreadCrumbItems(children);

  return (
    <nav
      aria-label={ariaLabel}
      className={componentClassName}
      id={breadcrumbsId}
      {...other}
    >
      <ul className={styles['breadcrumbs__list']}>{breadcrumbItems}</ul>
    </nav>
  );
};

const flattenBreadCrumbItems = (children: React.ReactNode) => {
  const flattenedChildren = flattenReactChildren(children);
  /**
   * Throws error if invalid children
   */
  const shouldThrowError = (flattenedChildren as JSX.Element[]).some(
    (child) => {
      if (child.type === BreadcrumbsItem || child.type === Breadcrumbs.Item) {
        return false;
      }
      return true;
    },
  );
  if (process.env.NODE_ENV !== 'production' && shouldThrowError) {
    throw 'Only <Breadcrumbs.Item>, <BreadcrumbsItem>, or React.Fragment of aforementioned components allowed';
  }
  return flattenedChildren;
};

Breadcrumbs.Item = BreadcrumbsItem;
