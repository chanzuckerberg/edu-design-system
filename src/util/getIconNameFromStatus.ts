import type { Status } from './variant-types';
import type { IconName } from '../icons/spritemap';

/**
 * The icon each status is drawn with.
 *
 * Exported so the semantic icon defaults in `IconProvider` can reuse it: the four
 * status names are also semantic icon names, and their glyphs have to be the same in
 * both places.
 */
export const statusIconNames: Record<Status, IconName> = {
  informational: 'info-encircled-filled',
  critical: 'critical-encircled-filled',
  warning: 'warning-filled',
  favorable: 'checkmark-encircled-filled',
};

/**
 * Map statuses to existing icon names
 *
 * @param status component status
 * @returns the matching icon name
 */
export default function getIconNameFromStatus(status: Status): IconName {
  return statusIconNames[status];
}
