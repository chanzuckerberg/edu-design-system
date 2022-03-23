import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface Props {
  /**
   * aria-labelledby attribute that associates a tab panel with its accompanying tab title text
   */
  ariaLabelledBy?: any;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: any;
  /**
   * Number passed down from ListDetail to show the active index state of ListDetail
   */
  title?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ListDetailPanel: React.FC<Props> = ({
  children,
  className,
  id,
  ariaLabelledBy,
  title,
  ...other
}) => {
  const componentClassName = clsx('list-detail__panel', className, {});
  return (
    <div
      role="tabpanel"
      id={id}
      aria-hidden={false}
      aria-labelledby={ariaLabelledBy}
      className={componentClassName}
      {...other}
    >
      {children}
    </div>
  );
};
