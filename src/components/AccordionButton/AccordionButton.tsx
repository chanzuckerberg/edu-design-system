import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import React, { useContext } from 'react';
import styles from './AccordionButton.module.css';
import { AccordionContext } from '../Accordion';
import Icon from '../Icon';

type RenderProps<RenderPropArgs> = {
  children: React.ReactNode | ((args: RenderPropArgs) => React.ReactNode);
};

export type Props = {
  as?: React.ElementType;
  /**
   * Additional classnames passed in for styling
   */
  className?: string;
  /**
   * color passed in for styling icon
   */
  iconColor?: string;
  /**
   * On click callback function
   */
  onClose?: () => void;
} & RenderProps<{ open: boolean }>;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {AccordionButton} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const AccordionButton = ({
  children,
  className,
  iconColor,
  onClose,
  ...other
}: Props) => {
  const { variant } = useContext(AccordionContext);

  const componentClassName = clsx(
    styles['accordion-button'],
    variant === 'compact' && styles['accordion-button--compact'],
    className,
  );
  return (
    <Disclosure.Button as={React.Fragment}>
      {({ open }) => (
        <button
          className={componentClassName}
          onClick={() => {
            if (open && onClose) {
              onClose();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              if (open && onClose) {
                onClose();
              }
            }
          }}
        >
          {typeof children === 'function' ? children({ open }) : children}
          <Icon
            className={clsx(
              styles['accordion-button__icon'],
              open && styles['accordion-button__icon--reversed'],
            )}
            color={iconColor || 'neutral'}
            name="expand-more"
            purpose="informative"
            size="1.5rem"
            title={open ? 'hide content' : 'show content'}
          />
        </button>
      )}
    </Disclosure.Button>
  );
};
