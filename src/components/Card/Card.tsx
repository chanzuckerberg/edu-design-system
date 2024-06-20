import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

import type { Size } from '../../util/variant-types';
import Icon, { type IconName } from '../Icon';

import Text from '../Text';

import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  // Component API
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  /**
   * Treatment for the card's container element. When using `"custom-brand"`, set the
   * container background and border color using the brand border/bg utility classes.
   *
   * **Default is `"default"`**.
   */
  containerColor?: 'default' | 'call-out' | 'custom-brand';
  /**
   * The bounding box and other container emphasis details
   *
   * **Default is `"low"`**.
   */
  containerStyle?: 'none' | 'low' | 'high';
  /**
   * State to trigger when the card is being dragged. Can be combined with the HTML `draggable` property,
   * or used programmatically with drag and drop libraries
   */
  isDragging?: boolean;
  /**
   * Whether `Card` itself is directly interactive (clicking will perform some navigation or action)
   *
   * **Default is `false`**.
   */
  isInteractive?: boolean;
  /**
   * Decorative top bar used to cause a highlight on a given card. When present, this
   * corresponds to a specified emphasis level.
   *
   * **Default is `"none"`**.
   */
  topStripe?: 'none' | 'medium' | 'high';
  /**
   * Class to adjust top stripe background color. Choose from brand-background tokens utility classes.
   */
  topStripeColor?: string;
}
export interface CardSubComponentProps {
  // Component API
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

export interface CardHeaderProps {
  // Component API
  /**
   * Child node(s) that can be nested inside component. Used in place of any of the above named slots.
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  /**
   * Component slot to add in an action-focused area to a card. Typically a button with hidden options.
   */
  action?: ReactNode;
  /**
   * Text above the main title of the card, to add category text/information.
   */
  eyebrow?: string;
  /**
   * Card slot for an icon sitting in front of the card header text
   */
  icon?: IconName;
  /**
   * Overall size treatment of the Card header
   */
  size?: Extract<Size, 'sm' | 'md'>;
  /**
   * Secondary text used to describe the content in more detail
   */
  subTitle?: ReactNode;
  /**
   * The title/heading of the component
   */
  title?: string;
}

/**
 * `import {Card} from "@chanzuckerberg/eds";`
 *
 * Card component is the outer wrapper for the block that typically contains a title, image,
 * text, and/or calls to action.
 */
export const Card = ({
  containerColor = 'default',
  className,
  children,
  containerStyle = 'low',
  isDragging,
  isInteractive = false,
  topStripe = 'none',
  topStripeColor = '',
  ...other
}: CardProps) => {
  const componentClassName = clsx(
    styles['card'],
    styles[`card--container-style-${containerStyle}`],
    styles[`card--container-color-${containerColor}`],
    typeof isDragging !== 'undefined' &&
      styles[`card--is-dragging-${isDragging}`],
    isInteractive && styles['card--is-interactive'],
    className,
  );
  return (
    <article className={componentClassName} {...other}>
      {children}
      {topStripe && (
        <div
          className={clsx(
            styles['card__top-stripe'],
            styles[`top-stripe--${topStripe}`],
            topStripeColor,
          )}
        ></div>
      )}
    </article>
  );
};

/**
 * Body of the Card component.
 */
const CardBody = ({ children, className, ...other }: CardSubComponentProps) => {
  const componentClassName = clsx(styles['card__body'], className);
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

/**
 * Footer of the Card component.
 */
const CardFooter = ({
  children,
  className,
  ...other
}: CardSubComponentProps) => {
  const componentClassName = clsx(styles['card__footer'], className);
  return (
    <footer className={componentClassName} {...other}>
      {children}
    </footer>
  );
};

/**
 * Header of the Card component.
 */
const CardHeader = ({
  action,
  children,
  className,
  eyebrow,
  icon,
  size = 'md',
  subTitle,
  title,
  ...other
}: CardHeaderProps) => {
  const componentClassName = clsx(
    styles['card__header'],
    size && styles[`header--size-${size}`],
    className,
  );
  const headerEyebrowClassName = clsx(
    styles['header__eyebrow'],
    size && styles[`header--size-${size}`],
  );
  const headerTitleClassName = clsx(
    styles['header__title'],
    size && styles[`header--size-${size}`],
  );
  const headerSubTitleClassName = clsx(
    styles['header__sub-title'],
    size && styles[`header--size-${size}`],
  );

  return children ? (
    <header className={componentClassName} {...other}>
      <div className={styles['header__custom']}>{children}</div>
    </header>
  ) : (
    <header className={componentClassName} {...other}>
      {icon && (
        <div className={styles['header__icon']}>
          <Icon
            name={icon}
            purpose="decorative"
            size={size === 'sm' ? '1rem' : '1.5rem'}
          />
        </div>
      )}
      <div className={styles['header__text']}>
        {eyebrow && (
          <Text
            as="div"
            className={headerEyebrowClassName}
            preset={size === 'sm' ? 'overline-sm' : 'overline-md'}
          >
            {eyebrow}
          </Text>
        )}
        {title && (
          <Text
            as="div"
            className={headerTitleClassName}
            preset={size === 'sm' ? 'title-sm' : 'headline-sm'}
          >
            {title}
          </Text>
        )}
        {subTitle && (
          <Text
            as="div"
            className={headerSubTitleClassName}
            preset={size === 'sm' ? 'body-sm' : 'body-lg'}
          >
            {subTitle}
          </Text>
        )}
      </div>
      {action && <div className={styles['header__action']}>{action}</div>}
    </header>
  );
};

const ChildCard = ({ className, ...other }: CardProps) => {
  const childClassName = clsx(className, styles['child-card']);
  return <Card {...other} className={childClassName} containerStyle="high" />;
};

Card.displayName = 'Card';
CardBody.displayName = 'Card.Body';
CardFooter.displayName = 'Card.Footer';
CardHeader.displayName = 'Card.Header';
ChildCard.displayName = 'Card.ChildCard';

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.ChildCard = ChildCard;
