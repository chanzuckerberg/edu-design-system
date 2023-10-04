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
