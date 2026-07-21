import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

import type { Size } from '../../util/variant-types';

import Heading from '../Heading';
import Icon, { type IconName } from '../Icon';
import Text from '../Text';

import styles from './Card.module.css';

export type CardProps = HTMLAttributes<HTMLElement> & {
  // Component API
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * CSS properties defined for the HTML element. Includes the component's CSS Custom Properties:
   *
   * - `--card__top-stripe-bg`
   */
  style?: CardCSSProperties;
  /**
   * When `isInteractive` and has a behavior set, name is used as the name of the hidden form field.
   */
  name?: string;
  // Design API
  /**
   * When `isInteractive`, describes the behavior of the card when selected. Single (radio) or multiple (checkbox) selection.
   */
  behavior?: 'checkbox' | 'radio';
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
   * Whether `Card` itself is directly interactive (code wrapping component so that clicking will perform some navigation or action)
   *
   * **Default is `false`**.
   */
  isInteractive?: boolean;
  /**
   * Decorative top bar used to cause a highlight on a given card. When present, this
   * corresponds to a specified emphasis level.
   *
   * **Default is `"none"`**.
   *
   * @deprecated
   */
  topStripe?: 'none' | 'medium' | 'high';
};
export type CardSubComponentProps = {
  // Component API
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

export type CardHeaderProps = {
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
};

export interface CardCSSProperties extends React.CSSProperties {
  '--card__top-stripe-bg'?: string;
}

// TODO: needs useRef for input field (allow react to control things)?
/**
 * ## Usage
 *
 * * **Static card**: Group related elements, including some combination of images, text, buttons, input fields, etc.
 * * **Interactive card**: A selectable or actionable card.
 *
 * ### Best Practices
 *
 * * Display information so that what the user needs to know first is prioritized.
 * * Limit call-to-action buttons and/or links, using only one primary call-to-action per card.
 * * Do not use a card as an action.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Group related information within separate cards.
 * * Use subheadings, paragraphs, and bullet lists to break up larger amounts of content.
 * * Use headings that make the card's purpose clear.
 * * Include essential, summarized information.
 *
 * ### Dont's
 *
 * * Don't overwhelm the card with too much content; keep it scannable.
 * * Avoid too many call-to-action buttons or links within the same card.
 */
export const Card = ({
  containerColor = 'default',
  behavior,
  className,
  children,
  containerStyle = 'low',
  isDragging,
  isInteractive = false,
  name,
  topStripe = 'none',
  ...other
}: CardProps) => {
  const componentClassName = clsx(
    styles['card'],
    styles[`card--container-style-${containerStyle}`],
    styles[`card--container-color-${containerColor}`],
    typeof isDragging !== 'undefined' &&
      styles[`card--is-dragging-${isDragging}`],
    isInteractive && styles['card--is-interactive'],
    behavior && styles['card--has-behavior'],
    className,
  );

  const behaviorId = React.useId();
  const cardComponent = (
    <div className={componentClassName} {...other}>
      {children}
      {(topStripe || behavior) && (
        <div
          className={clsx(
            styles['card__top-stripe'],
            styles[`top-stripe--${behavior ? 'medium' : topStripe}`],
          )}
        />
      )}
      {behavior && isInteractive && (
        <input
          className={styles['card__behavior-input']}
          id={behaviorId}
          name={name}
          type={behavior}
        />
      )}
    </div>
  );

  return (
    <>
      {behavior && isInteractive ? (
        <label className={styles['card__behavior-label']} htmlFor={behaviorId}>
          {cardComponent}
        </label>
      ) : (
        cardComponent
      )}
    </>
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
    <div className={componentClassName} {...other}>
      {children}
    </div>
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
    <div className={componentClassName} {...other}>
      <div className={styles['header__custom']}>{children}</div>
    </div>
  ) : (
    <div className={componentClassName} {...other}>
      {icon && (
        <div className={styles['header__icon']}>
          <Icon
            name={icon}
            purpose="decorative"
            size={size === 'sm' ? '16px' : '24px'}
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
          <Heading
            as="h3"
            className={headerTitleClassName}
            preset={size === 'sm' ? 'title-sm' : 'title-lg'}
          >
            {title}
          </Heading>
        )}
        {subTitle && (
          <Text
            as="div"
            className={headerSubTitleClassName}
            preset={size === 'sm' ? 'body-xs' : 'body-md'}
          >
            {subTitle}
          </Text>
        )}
      </div>
      {action && <div className={styles['header__action']}>{action}</div>}
    </div>
  );
};

Card.displayName = 'Card';
CardBody.displayName = 'Card.Body';
CardFooter.displayName = 'Card.Footer';
CardHeader.displayName = 'Card.Header';

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;
