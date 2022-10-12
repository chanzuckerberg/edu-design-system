import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './ProjectCard.module.css';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  Button,
  NumberIcon,
  ButtonDropdown,
} from '../..';
import type { HeadingElement } from '../Heading';

export interface Props {
  /**
   * Determines type of clickable
   * - **draggable** renders a card that is used to drag with space for the handle on the left
   */
  behavior?: 'draggable';
  /**
   * Button dropdown items
   *
   * If not declared, the button dropdown does not render.
   */
  buttonDropdownItems?: ReactNode;
  /**
   * Determines type of clickable
   * - default renders a dropdown menu to the bottom left of the button
   * - **top-left** renders a dropdown menu to the top left of the button
   * - **top-right** renders a dropdown menu to the top right of the button
   * - **bottom-right** renders a dropdown menu to the bottom right of the button
   */
  buttonDropdownPosition?: 'top-left' | 'top-right' | 'bottom-right';
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Heading as element. Needed to create semantic heading order on page depending on
   * where this is placed
   */
  headingAs?: HeadingElement;
  /**
   * Project card title
   */
  title?: string;
  /**
   * Project card meta data (e.g. calendar)
   */
  meta?: string;
  /**
   * Project card number
   */
  number?: number;
  /**
   * Number aria label. Required if number prop is passed.
   */
  numberAriaLabel?: string;
  /**
   * Property passed in to style draggable project card
   */
  isDragging?: boolean;
}

/**
 * ProjectCard is the primary UI component for user interaction contains card components, button components
 * and draggable components.
 */
export const ProjectCard = ({
  behavior,
  className,
  title,
  meta,
  number,
  headingAs = 'h3',
  buttonDropdownItems,
  buttonDropdownPosition,
  numberAriaLabel,
  isDragging,
  ...other
}: Props) => {
  if (number && !numberAriaLabel && process.env.NODE_ENV !== 'production') {
    throw new Error(
      'You must provide a "numberAriaLabel" for the number icon if a "number" has been passed',
    );
  }
  const componentClassName = clsx(
    styles['project-card'],
    behavior === 'draggable' && styles['project-card--draggable'],
    className,
  );
  return (
    <Card
      className={componentClassName}
      elevation="raised"
      isDragging={isDragging}
      orientation="horizontal"
      {...other}
    >
      <CardHeader className={styles['project-card__header']}>
        {number && numberAriaLabel && (
          <NumberIcon
            aria-label={numberAriaLabel}
            className={styles['project-card__number']}
            number={number}
            size="sm"
          />
        )}
      </CardHeader>
      <CardBody className={styles['project-card__body']}>
        <Heading
          as={headingAs}
          className={styles['project-card__title']}
          size="body-sm"
          variant="neutral-strong"
        >
          {title}
        </Heading>
        {meta && (
          <div className={styles['project-card__meta']}>
            <Icon
              className={styles['project-card__meta-icon']}
              name="event-note"
              purpose="decorative"
              size="0.875rem"
            />
            {meta}
          </div>
        )}
      </CardBody>
      {buttonDropdownItems && (
        <CardFooter className={styles['project-card__footer']}>
          <ButtonDropdown
            className={styles['project-card__button-dropdown']}
            dropdownMenuTrigger={
              <Button
                aria-label="Open project dropdown"
                className={styles['project-card__menu-button']}
                size="sm"
                status="neutral"
                variant="icon"
              >
                <Icon name="dots-vertical" purpose="decorative" />
              </Button>
            }
            position={buttonDropdownPosition}
          >
            {buttonDropdownItems}
          </ButtonDropdown>
        </CardFooter>
      )}
    </Card>
  );
};
