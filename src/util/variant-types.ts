/**
 * This contains the broad types of the common programmatic variants: e.g.,
 * - size
 * - align
 *
 * use Extract to trim any unsupported variants
 */

/**
 * Size range for components, set at named intervals. Sizes need not be precisely
 * some distant or multiple apart; they can be defined as a set that increases with
 * each unit.
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

/**
 * Alignment variants, for horizontal components and sub-components
 */
export type Align = 'left' | 'center' | 'right';

// TODO-AH: generate this from the tokens instead of hard coding
/**
 * By setting the array `as const`, we can treat each array value as
 * read-only and a unique type.
 */
const presets = [
  'headline-lg',
  'headline-lg-bold',
  'headline-lg-bold-mobile',
  'headline-lg-mobile',
  'headline-md',
  'headline-md-bold',
  'headline-md-bold-mobile',
  'headline-md-mobile',
  'headline-sm',
  'headline-sm-bold',
  'headline-sm-bold-mobile',
  'headline-sm-mobile',
  'headline-secondary-lg',
  'headline-secondary-lg-bold',
  'headline-secondary-md',
  'headline-secondary-md-bold',
  'headline-secondary-sm',
  'headline-secondary-sm-bold',
  'title-lg',
  'title-lg-bold',
  'title-md',
  'title-md-bold',
  'title-sm',
  'title-sm-bold',
  'title-xs',
  'title-xs-bold',
  'label-lg-subtle',
  'label-md',
  'label-md-subtle',
  'label-sm',
  'body-xl',
  'body-lg',
  'body-md',
  'body-sm',
  'body-xs',
  'caption-lg',
  'caption-lg-bold',
  'caption-md',
  'caption-md-bold',
  'caption-sm',
  'caption-sm-bold',
  'overline',
  'overline-md',
  'overline-sm',
  'callout',
  'breadcrumb',
  'button-lg',
  'button-md',
  'button-label',
  'button-label-sm',
  'form-label',
  'form-input',
  'link-lg',
  'link-md',
  'link-sm',
  'link-xs',
  'tab-lg',
  'tab-lg-active',
  'tab-sm',
  'tab-sm-active',
  'tag',
] as const;

/**
 * Presets matching all the available typography tokens (tier-2 and tier-3)
 */
export type Preset = (typeof presets)[number];
