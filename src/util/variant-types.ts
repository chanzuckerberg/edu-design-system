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
 */
export type Align = 'leading' | 'trailing' | 'center';

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
 * NOTE: To reduce maintenance, generate this from the tokens statically
 */
export const presets = [
  'headline-xl',
  'headline-lg',
  'headline-md',
  'headline-sm',
  'headline-decorative-inline-xl',
  'headline-decorative-inline-lg',
  'headline-decorative-inline-md',
  'headline-decorative-inline-sm',
  'title-xl',
  'title-lg',
  'title-md',
  'title-sm',
  'title-xs',
  'body-xl',
  'body-xl-bold',
  'body-lg',
  'body-lg-bold',
  'body-md',
  'body-md-bold',
  'body-sm',
  'body-sm-bold',
  'body-xs',
  'body-xs-bold',
  'label-xl',
  'label-lg',
  'label-md',
  'label-sm',
  'overline-lg',
  'overline-md',
  'overline-sm',
  'caption-md',
  'caption-sm',
  'input',
  'tab-lg-active',
  'tab-lg',
  'tab-sm-active',
  'tab-sm',
] as const;

/**
 * Presets matching all the available typography tokens (tier-2 and tier-3)
 */
export type Preset = (typeof presets)[number];
