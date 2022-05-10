import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Banner.module.css';
import Button from '../Button';
import Heading, { HeadingElement } from '../Heading';
import Icon from '../Icon';
import Text from '../Text';

export type Variant = 'brand' | 'neutral' | 'success' | 'warning' | 'error';

export interface Props {
  /**
   * A button or link that's placed in the banner separately from the main content.
   */
  action?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  action?: React.ReactNode;
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
   * This is deprecated and will be removed in an upcoming release. Please use the default elevation 1
   *
   * The perceived elevation of the banner. An elevation of 0 appears flat against the surface while
   * an elevation of 1 appears to hover slightly. The hover appearance is used to separate the element
   * from the surrounding area. The flat version should only be used on white backgrounds.
   *
   * @deprecated
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
}

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
 * ```ts
 * import {Banner} from "@chanzuckerberg/eds";
 * ```
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
}: Props) => {
  if (isFlat && process.env.NODE_ENV !== 'production') {
    console.warn(
      'The isFlat style is deprecated and will be removed in an upcoming release.\n',
      'Please remove this prop to use the default elevated style (with a border and drop shadow) instead.',
    );
  }

  const isHorizontal = !orientation;

  const componentClassName = clsx(
    // Base styles
    styles['banner'],
    className,
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
  );

  return (
    <article className={componentClassName}>
      {onDismiss && (
        <Button
          className={styles['banner__close-btn']}
          onClick={onDismiss}
          status={variant}
          variant="icon"
        >
          <Icon name={'close'} purpose="informative" title={'dismiss module'} />
        </Button>
      )}

      <Icon
        className={styles['banner__icon']}
        name={variantToIconAssetsMap[variant].name}
        purpose="informative"
        title={variantToIconAssetsMap[variant].title}
      />

      <div className={clsx(styles['banner__textAndAction'])}>
        <div className={clsx(styles['banner__textContent'])}>
          {title && (
            <Heading as={titleAs} size="title-sm">
              {title}
            </Heading>
          )}
          {description && <Text as={descriptionAs}>{description}</Text>}
        </div>

        {action && (
          <div className={clsx(styles['banner__action'])}>{action}</div>
        )}
      </div>
    </article>
  );
};
Banner.displayName = 'Banner';
