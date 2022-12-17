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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Skeleton} from "@chanzuckerberg/eds";`
 *
 * Skeleton states allow for hinting at the layout of pending content before the
 * content is available. The different shapes allow for representation of different
 * types of content. Mix and match to create a layout that mimicks the pending data.
 *
 * Skeletons come in a variety of shapes. The default is a round rect, and there are
 * others for circular objects, or text layouts. Use any meaningful CSS length values
 * (e.g., rem, ch, px, etc.)
 *
 * Examples:
 *
 * For text, Use `Skeleton.Text` and specify the height and the width (for example in 'ch' units).
 *
 * For circular objects, use `Skeleton.Circle' and specify the width (which is the same as the height).
 *
 * For all other shapes, use `Skeleton.Rect` (or just Skeleton) and specify the width and height.
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

Skeleton.Text = TextSkeleton;
Skeleton.Rect = Skeleton;
Skeleton.Circle = CircleSkeleton;
