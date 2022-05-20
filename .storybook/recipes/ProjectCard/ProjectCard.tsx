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
} from '../../../src';

export interface Props {
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
   * Project card title
   */
  title?: string;
  /**
   * Project card meta data (e.g. calendar)
   */
  meta?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ProjectCard = ({
  className,
  title,
  meta,
  buttonDropdownPosition,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['project-card'], className, {});
  return (
    <Card className={componentClassName} orientation="horizontal" {...other}>
      <div className={styles['project-card__drag-handle']}>
        <Icon
          className={styles['project-card__drag-icon']}
          name="drag-indicator"
          purpose="decorative"
          size="2rem"
        />
      </div>
      <CardHeader>
        <NumberIcon
          className={styles['project-card__number']}
          number={1}
          size="sm"
        />
      </CardHeader>
      <CardBody className={styles['project-card__body']}>
        <Heading
          as="h3"
          className={styles['project-card__title']}
          size="body-sm"
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
