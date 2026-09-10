import type { SemanticIconMap } from '../components/Icon';

/**
 * A second icon for each semantic role, for the stories that show what an `IconProvider`
 * changes.
 *
 * Storybook-only. Every component drawing a semantic icon has a story wrapped in an
 * `IconProvider` given this one map, so the same override is visible from each component's
 * own page and it reads as one app-wide setting rather than a per-component prop. Only the
 * roles a given component draws change on its page; the rest of the map does nothing there.
 *
 * Each alternative still reads as its role, which is the constraint on picking one at all.
 * The outline statuses pair with the filled defaults, `arrow-left` points the same way
 * `chevron-left` does, the doubled chevrons still mean expand and collapse, and
 * `dots-horizontal` is the other conventional mark for a menu. `close` becomes `remove`
 * because the spritemap has exactly one X glyph, and a minus is the nearest thing to
 * "dismiss this" left in the set. It also matches the label `InputChip` already gives its
 * own action button ("remove <label>").
 *
 * `warning` is deliberately absent. A role a provider says nothing about keeps the icon it
 * inherits, and a map that covered everything could not show that.
 */
export const alternativeSemanticIcons: Partial<SemanticIconMap> = {
  back: 'arrow-left',
  close: 'remove',
  collapse: 'chevron-up-double',
  copy: 'document',
  critical: 'critical',
  expand: 'chevron-down-double',
  favorable: 'check',
  informational: 'info-encircled',
  menu: 'dots-horizontal',
  'open-in-new': 'link',
};
