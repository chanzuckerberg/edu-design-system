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
 * Emphasis variants, for use when determining how much an element should stand out
 */
export type Emphasis = 'low' | 'high';

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
 * These are the reusable presets: the ones any code can reach for. Presets that
 * belong to a single component live in `componentPresets` instead.
 *
 * NOTE: To reduce maintenance, generate this from the tokens statically
 */
export const presets = [
  'headline-xl',
  'headline-lg',
  'headline-md',
  'headline-sm',
  'headline-decorative-md',
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
  'code-xl',
  'code-lg',
  'code-md',
  'code-sm',
  'code-xs',
] as const;

/**
 * Presets that exist for one component's own use, and are not part of the reusable
 * scale. They are styled in `Text.module.css` next to the reusable presets, but only
 * the internal compositions (`InternalText`, `InternalHeading`) accept them, which
 * keeps them out of custom code.
 *
 * Each of these has a reusable preset with identical CSS. When one is retired, map it
 * to that equivalent in the current migration (`src/bin/migrate/migrations`) so
 * consumers land somewhere that looks the same.
 */
export const componentPresets = [
  'input-md',
  'input', // TODO(next-major): consider removing
  'tab-lg-active',
  'tab-lg',
  'tab-sm-active',
  'tab-sm',
  'tag',
  'appHeader-label',
  'appHeader-subLabel',
  'dataTable-headerCell',
] as const;

/**
 * Presets matching the reusable typography tokens (tier-2 and tier-3). This is what
 * `Text` and `Heading` accept.
 */
export type Preset = (typeof presets)[number];

/**
 * Presets reserved for a single component's own use. See `componentPresets`.
 */
export type ComponentPreset = (typeof componentPresets)[number];

/**
 * Any preset, reusable or component-specific. Only for the internal compositions that
 * need to render a component-specific preset.
 */
export type AnyPreset = Preset | ComponentPreset;
