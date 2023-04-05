import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import Button from '../Button';
import type { HeadingElement } from '../Heading';
import Heading from '../Heading';
import Icon from '../Icon';
import Text from '../Text';
import styles from './Banner.module.css';

export type Variant = 'brand' | 'neutral' | 'success' | 'warning' | 'error';

export type BannerProps = {
  /**
   * A button or link that's placed in the banner separately from the main content.
   */
  action?: ReactNode;
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
   * The perceived elevation of the banner. A banner with isFlat appears flat against the surface while
   * a banner with isFlat as false has a border and drop shadow.
   */
  isFlat?: boolean;
  /**
   * Controls the layout of the banner
   * - **vertical** renders the banner content center aligned and stacked
   *
   * Vertical banners are used in narrow areas, like sidebars
   */
  orientation?: 'vertical';
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
   * - **neutral** - results in a gray banner
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
  neutral: {
    name: 'forum',
    title: 'notice',
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
 * The Banner component is deprecated and will be removed in an upcoming release.
 *
 * Please visit Zeroheight to find the right notification component for your needs: https://eds.czi.design/
 *
 * `import {Banner} from "@chanzuckerberg/eds";`
 *
 * A banner used to provide and highlight information to a user or ask for a decision or action.
 *
 * Example usage:
 *
 * ```tsx
 * <Banner
 *   onDismiss={handleDismiss}
 *   title="Some Title"
 *   description={<>Some description, possibly with a <Link href="https://go.czi.team/eds">link to some other resource</Link>.</>}
 *   action={<Button onClick={handleAction}>Action</Button>}
 * />
 * ```
 *
 * @deprecated
 */
export const Banner = ({
  action,
  className,
  description,
  descriptionAs = 'p',
  isFlat,
  onDismiss,
  orientation,
  variant = 'brand',
  title,
  titleAs = 'h3',
}: BannerProps) => {
  const isHorizontal = !orientation;

  const componentClassName = clsx(
    // Base styles
    styles['banner'],
    // Variants
    variant === 'neutral' && styles['banner--neutral'],
    variant === 'brand' && styles['banner--brand'],
    variant === 'error' && styles['banner--error'],
    variant === 'warning' && styles['banner--warning'],
    variant === 'success' && styles['banner--success'],
    // Other options
    isHorizontal && styles['banner--horizontal'],
    onDismiss && styles['banner--dismissable'],
    isFlat && styles['banner--flat'],
    className,
  );

  const variantComputed = variant === 'neutral' ? 'neutral-strong' : variant;

  return (
    <aside className={componentClassName}>
      <Icon
        className={styles['banner__icon']}
        name={variantToIconAssetsMap[variant].name}
        purpose="informative"
        title={variantToIconAssetsMap[variant].title}
      />

      <div className={clsx(styles['banner__text-and-action'])}>
        <div>
          {title && (
            <Heading as={titleAs} size="title-md" variant={variantComputed}>
              {title}
            </Heading>
          )}
          {description && (
            <Text as={descriptionAs} size="sm" variant="neutral-medium">
              {description}
            </Text>
          )}
        </div>

        {action && (
          <div className={clsx(styles['banner__action'])}>{action}</div>
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
    </aside>
  );
};
Banner.displayName = 'Banner';
