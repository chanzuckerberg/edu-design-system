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
  Dropdown,
  NumberIcon,
  ButtonDropdown,
  DropdownMenuItem,
} from '../../../src';

export interface Props {
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
export const ProjectCard = ({ className, title, meta, ...other }: Props) => {
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
          dropdownMenuTrigger={
            <Button
              className={styles['project-card__menu-button']}
              aria-label="Open project dropdown"
              size="sm"
              status="neutral"
              variant="icon"
            >
              <Icon name="dots-vertical" purpose="decorative" />
            </Button>
          }
          className={styles['project-card__button-dropdown']}
        >
          <DropdownMenuItem iconName="schedule" text="Move to other section" />
          <DropdownMenuItem iconName="schedule" text="Move up" />
          <DropdownMenuItem iconName="schedule" text="Move down" />
          <DropdownMenuItem iconName="schedule" text="Move view details" />
        </ButtonDropdown>
      </CardFooter>
    </Card>
  );
};
