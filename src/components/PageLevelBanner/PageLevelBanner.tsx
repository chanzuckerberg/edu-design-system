import clsx from 'clsx';
import React, {ReactNode} from 'react';
import Button from '../Button';
import Heading, {HeadingElement} from '../Heading';
import Icon from '../Icon';
import Text from '../Text';
import styles from './PageLevelBanner.module.css';

export type Variant = 'brand' | 'success' | 'warning' | 'error';

export type PageLevelBannerProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * The description/body text of the banner
   */
  description?: ReactNode;
  /**
   * The element the description renders as
   */
  descriptionAs?: 'p' | 'span';
  /**
   * Callback when banner is dismissed. When passed in, renders banner with a close icon in the top right.
   */
  onDismiss?: () => void;
  /**
   * The title/heading of the banner
   */
  title?: ReactNode;
  /**
   * The element the title renders as
   */
  titleAs?: HeadingElement;
  /**
   * Stylistic variations for the banner type.
   * - **brand** - results in a purple banner
   * - **success** - results in a green banner
   * - **warning** - results in a yellow banner
   * - **error** - results in a red banner
   */
  variant?: Variant;
};

const variantToIconAssetsMap: {
  [key: string]: {
    name: 'notifications' | 'forum' | 'check-circle' | 'warning' | 'dangerous';
    title: string;
  };
} = {
  brand: {
    name: 'notifications',
    title: 'attention',
  },
  success: {
    name: 'check-circle',
    title: 'success',
  },
  warning: {
    name: 'warning',
    title: 'warning',
  },
  error: {
    name: 'dangerous',
    title: 'error',
  },
};

/**
 * ```ts
 * import {PageLevelBanner} from "@chanzuckerberg/eds";
 * ```
 *
 * A banner placed at the top of the page with important information.
 *
 * Example usage:
 *
 * ```tsx
 * <PageLevelBanner
 *   onDismiss={handleDismiss}
 *   title="Some Title"
 *   description={<>Some description, possibly with a <Link href="https://go.czi.team/eds">link to some other resource</Link>.</>}
 * />
 * ```
 */
export const PageLevelBanner = ({
  className,
  description,
  descriptionAs = 'p',
  onDismiss,
  variant = 'brand',
  title,
  titleAs = 'h3',
}: PageLevelBannerProps) => {
  const componentClassName = clsx(
    // Base styles
    styles['banner'],
    // Variants
    variant === 'brand' && styles['banner--brand'],
    variant === 'error' && styles['banner--error'],
    variant === 'warning' && styles['banner--warning'],
    variant === 'success' && styles['banner--success'],
    // Other options
    onDismiss && styles['banner--dismissable'],
    className,
  );

  return (
    <article className={componentClassName}>
      <Icon
        className={styles['banner__icon']}
        name={variantToIconAssetsMap[variant].name}
        purpose="informative"
        title={variantToIconAssetsMap[variant].title}
      />

      <div>
        {title && (
          <Heading as={titleAs} size="title-md" variant={variant}>
            {title}
          </Heading>
        )}
        {description && (
          <Text as={descriptionAs} size="sm" variant="neutral-medium">
            {description}
          </Text>
        )}
      </div>

      {onDismiss && (
        <Button
          className={styles['banner__close-btn']}
          onClick={onDismiss}
          status="neutral"
          variant="icon"
        >
          <Icon
            name="close"
            purpose="informative"
            title="dismiss notification"
          />
        </Button>
      )}
    </article>
  );
};
PageLevelBanner.displayName = 'PageLevelBanner';
