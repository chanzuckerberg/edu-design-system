import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { assertEdsUsage } from '../../util/logging';
import type { IconOrContent } from '../../util/utility-types';
import type { Size } from '../../util/variant-types';

import Heading, { type HeadingElement } from '../Heading';
import { hasSlotContent, IconSlot } from '../Icon';
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

/**
 * Heading levels `Card.Header` takes for its title.
 *
 * A card always sits inside a section the page has already given a heading, so its title
 * goes below that heading rather than competing with it. `h2` and `h3` cover where a card
 * actually lands in an outline: `h1` would claim the page, and `h4` and down are deeper
 * than a card nests.
 *
 * Kept as a value as well as a type so the component can check a level that reached it
 * from untyped code, where the type alone stops nothing.
 */
const titleElements = ['h2', 'h3'] as const;

export type CardHeaderTitleElement = Extract<
  HeadingElement,
  (typeof titleElements)[number]
>;

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
   * Card slot sitting in front of the card header text. Takes an EDS icon name, or any
   * content to render in its place, sized to match `size`.
   */
  icon?: IconOrContent;
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
  /**
   * Which heading level `title` renders at. Take it from the page outline: the level below
   * whatever heading introduces the section the card sits in, not the size you want the
   * title to read at.
   *
   * Only `h2` and `h3` are available, since a card's title sits under a heading the page
   * has already set. The level never changes the title's treatment, which follows `size`,
   * so a card can sit at the right level in the outline and still look the same.
   *
   * **Default is `"h3"`**.
   */
  titleAs?: CardHeaderTitleElement;
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
 * ## Header titles
 *
 * `Card.Header` renders its `title` as a heading, at the level `titleAs` sets. Take that
 * level from the page outline, the one below whatever heading introduces the section the
 * card sits in. Only `h2` and `h3` are available, because a card's title always sits under
 * a heading the page has already set.
 *
 * | Prop | What it sets | Where the value comes from |
 * |------|--------------|----------------------------|
 * | `titleAs` | Which heading tag the title renders as, `h2` or `h3`. | The document structure: the level below the heading of the section holding the card. |
 * | `size` | The treatment of the title, and the rest of the header with it. | The design. |
 *
 * The two stay independent, so moving a card to a different level of the outline never
 * changes how its title looks.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Group related information within separate cards.
 * * Use subheadings, paragraphs, and bullet lists to break up larger amounts of content.
 * * Use headings that make the card's purpose clear.
 * * Include essential, summarized information.
 * * Set `titleAs` to the level the page outline calls for, so a card's title doesn't skip a heading level.
 *
 * ### Don'ts
 *
 * * Don't overwhelm the card with too much content; keep it scannable.
 * * Avoid too many call-to-action buttons or links within the same card.
 * * Don't pick `titleAs` for the size it renders at. The title's treatment comes from `size`.
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
  titleAs = 'h3',
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

  const isSupportedTitleElement = titleElements.includes(titleAs);

  assertEdsUsage(
    [!isSupportedTitleElement],
    `Card.Header takes only \`h2\` or \`h3\` for \`titleAs\`, and \`${titleAs}\` is ignored in favor of \`h3\`. A card's title sits under a heading the page has already set, so pick the level just below that one.`,
  );

  return children ? (
    <div className={componentClassName} {...other}>
      <div className={styles['header__custom']}>{children}</div>
    </div>
  ) : (
    <div className={componentClassName} {...other}>
      {hasSlotContent(icon) && (
        <div className={styles['header__icon']}>
          <IconSlot
            content={icon}
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
            as={isSupportedTitleElement ? titleAs : 'h3'}
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
