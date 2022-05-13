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
      <CardHeader>
        <NumberIcon
          className={styles['project-card__number']}
          number={1}
          size="sm"
        />
        <Icon
          className={styles['project-card__drag-icon']}
          name="drag-indicator"
          purpose="decorative"
          size="2rem"
        />
      </CardHeader>
      <CardBody className={styles['project-card__body']}>
        <Heading as="h3" className={styles['project-card__title']} size="h6">
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
      <CardFooter>
        <Dropdown
          aria-label="Favorite Animal"
          as="div"
          className="w-60"
          data-testid="dropdown"
          onChange={undefined}
          optionsAlign="right"
          optionsClassName={styles['project-card__dropdown']}
          value="Option 1"
        >
          {({ open }) => (
            <>
              <Dropdown.Button
                // Because we're using a render prop to completely control the styling and icon of the
                // button, we need to configure this component to render as a Fragment. Otherwise we'd
                // render two, nested buttons.
                as={React.Fragment}
              >
                {() => (
                  <Button
                    ariaLabel="Open project dropdown"
                    status="neutral"
                    variant="icon"
                  >
                    <Icon name="dots-vertical" purpose="decorative" />
                  </Button>
                )}
              </Dropdown.Button>
              <Dropdown.Options>
                <Dropdown.Option value="option 1">Option 1</Dropdown.Option>
                <Dropdown.Option value="option 1">Option 2</Dropdown.Option>
                <Dropdown.Option value="option 1">Option 3</Dropdown.Option>
              </Dropdown.Options>
            </>
          )}
        </Dropdown>
      </CardFooter>
    </Card>
  );
};
