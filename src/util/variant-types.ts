/**
 * This contains the broad types of the common programmatic variants: e.g.,
 * - base component props
 * - size
 * - align
 * - preset
 *
 * use Extract to trim any unsupported variants
 */

/**
 * Component props used by any/every cmoponent in the system. Pick<> to grab any subset
 */
export type EDSBase = {
  /**
   * Sub-components and other elements appropriate for this parent component (See Sub-components if applicable)
   */
  children?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * Size range for components, set at named intervals. Sizes need not be precisely
 * some distant or multiple apart; they can be defined as a set that increases with
 * each unit.
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

/**
 * Alignment variants, for horizontal components and sub-components
 * TODO(next-major): warn on using left/right
 */
export type Align = 'leading' | 'trailing' | 'left' | 'center' | 'right';

/**
 * Hints are form field directions on how to use the field and whether it requires a value.
 */
export type Hint = 'none' | 'required' | 'optional';

/**
 * Statuses tied to the state of information being displayed
 */
export type Status = 'informational' | 'warning' | 'favorable' | 'critical';

/**
 * List of tier-2 and -3 tokens for use in types:
 * - src/design-tokens/tier-2-usage/typography.json
 *
 * By setting the array `as const`, we can treat each array value as
 * read-only and a unique type.
 *
 * TODO: generate this from the tokens statically, if possible
 */
export const presets = [
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
  'overline-lg',
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
