import clsx from 'clsx';
import React, { useContext } from 'react';
import styles from './AccordionTitle.module.css';
import { AccordionContext } from '../Accordion';
import type { HeadingElement } from '../Heading';
import Heading from '../Heading';
export type Props = {
  /**
   * Used to specify which heading element should be rendered.
   * If provided, overrides parent <Accordion> headingAs prop.
   */
  as?: HeadingElement;
  /**
   * Child node(s) that can be nested inside component.
   */
  children: React.ReactNode;
  /**
   * Additional classnames passed in for styling
   */
  className?: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * The panel subcomponent that is hidden or revealed for the EDS Accordion component.
 */
export const AccordionTitle = ({
  as,
  children,
  className,
  ...other
}: Props) => {
  const { headingAs, variant } = useContext(AccordionContext);

  const componentClassName = clsx(
    styles['accordion-title'],
    variant === 'compact' && styles['accordion-title--compact'],
    className,
  );

  return (
    <Heading className={componentClassName} size={as || headingAs} {...other}>
      {children}
    </Heading>
  );
};
