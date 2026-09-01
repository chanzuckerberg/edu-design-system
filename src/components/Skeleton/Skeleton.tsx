import clsx from 'clsx';
import React from 'react';
import styles from './Skeleton.module.css';

type BaseProps = {
  /**
   * CSS class names to augment the layout of the skeleton component. For skeletons,
   * this is mostly useful to add layout styles (e.g., tailwind CSS margins, flex, etc.)
   */
  className?: string;
  /**
   * Determine whether there should be an animation in the skeleton state
   */
  isAnimating?: boolean;
};

type SkeletonProps = BaseProps & {
  width?: number | string;
  height?: number | string;
};

/**
 * ## Usage
 *
 * Placeholder containers that are used for dynamic pages, to represent a proxy of the page layout
 * when content finishes loading. Sizing and shape of the skeletons can be styled and adjusted, and
 * the components can show an animation while on screen.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Block | The default. A rectangle sized by `width` and `height`. | Cards, images, and other blocks of layout. |
 * | Text | `Skeleton.Text` stands in for a line or paragraph of copy. | Headings, body copy, list rows. |
 * | Circle | `Skeleton.Circle` takes a single `width` and uses it for both dimensions. | Avatars and other round elements. |
 *
 * The shimmer runs by default and can be turned off per instance with `isAnimating={false}`. It is
 * also disabled automatically for anyone who has asked for reduced motion.
 *
 * ## Content & Accessibility
 *
 * Every skeleton renders `aria-hidden`, so assistive tech skips the placeholders entirely. Announce
 * the loading state separately, rather than relying on the skeletons to convey that something is
 * on its way.
 *
 * ### Do's
 *
 * * Use `Skeleton` when you have content that may take some time to load, but you know the general shape and positioning of the content.
 * * For `Skeleton`s using text, it's preferred to use the `ch` size in CSS with an approximate character count similar to the eventual content, so that it scales with the adjacent typography preset used.
 * * All other `Skeleton` components should prefer using relative size units (`rem`, `em`, `%`) so that they adapt to user zoom settings.
 *
 * ### Don'ts
 *
 * * Avoid excessive use of `Skeleton`, especially in cases where the page has static content that isn't fetched asynchronously. Only use `Skeleton` for specific chunks of content that may need more time to load.
 * * Avoid very large `Skeleton` instances (e.g., greater than `25vh` / `25vw`). Consider using multiple smaller `Skeleton` instances, or a background color and centered `LoadingIndicator`.
 *
 * ## Resources
 *
 * * https://www.lukew.com/ff/entry.asp?1797
 */
export const Skeleton = ({
  className,
  isAnimating = true,
  height,
  width,
  ...other
}: SkeletonProps) => {
  const componentClassName = clsx(
    className,
    styles['skeleton'],
    isAnimating && styles['skeleton--is-animating'],
  );
  return (
    <div
      aria-hidden
      className={componentClassName}
      {...other}
      style={{ width, height }}
    ></div>
  );
};

type TextProps = BaseProps & {
  height?: number | string;
  width?: number | string;
};

const TextSkeleton = ({
  className,
  isAnimating = true,
  height,
  width,
  ...other
}: TextProps) => {
  const componentClassName = clsx(
    className,
    styles['skeleton'],
    isAnimating && styles['skeleton--is-animating'],
  );
  return (
    <div
      aria-hidden
      className={componentClassName}
      style={{ width, height: height }}
    ></div>
  );
};

type CircleProps = BaseProps & {
  width?: number | string;
};

const CircleSkeleton = ({
  className,
  isAnimating = true,
  width,
  ...other
}: CircleProps) => {
  const componentClassName = clsx(
    className,
    styles['skeleton'],
    styles['skeleton-circle'],
    isAnimating && styles['skeleton--is-animating'],
  );

  return (
    <div
      aria-hidden
      className={componentClassName}
      style={{ width, height: width }}
    ></div>
  );
};

Skeleton.displayName = 'Skeleton';
TextSkeleton.displayName = 'Skeleton.Text';
CircleSkeleton.displayName = 'Skeleton.Circle';

Skeleton.Text = TextSkeleton;
Skeleton.Circle = CircleSkeleton;
