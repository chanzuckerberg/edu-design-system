import clsx from 'clsx';
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
  DropdownMenuItem,
} from '../..';
import { HeadingElement } from '../Heading';

export interface Props {
  /**
   * Determines type of clickable
   * - **draggable** renders a card that is used to drag with space for the handle on the left
   */
  behavior?: 'draggable';
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
   * Number aria label
   */
  numberAriaLabel: string;
  /**
   * Property passed in to style draggable project card
   */
  isDragging?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const ProjectCard = ({
  behavior,
  className,
  title,
  meta,
  number,
  headingAs = 'h3',
  buttonDropdownPosition,
  numberAriaLabel,
  isDragging,
  ...other
}: Props) => {
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
        {number && (
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
          variant="base"
        >
          {title}
        </Heading>
        <div className={styles['project-card__meta']}>
          <Icon
            className={styles['project-card__meta-icon']}
            name="event-note"
            purpose="decorative"
            size="0.875rem"
          />
          {meta}
        </div>
      </CardBody>
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
          <DropdownMenuItem>
            <Icon name="schedule" purpose="decorative" size="1.25rem" />
            Move to other section
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="schedule" purpose="decorative" size="1.25rem" />
            Move up
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="schedule" purpose="decorative" size="1.25rem" />
            Move down
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="schedule" purpose="decorative" size="1.25rem" />
            Move view details
          </DropdownMenuItem>
        </ButtonDropdown>
      </CardFooter>
    </Card>
  );
};
