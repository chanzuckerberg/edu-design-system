import type { Status } from './variant-types';
import type { IconName } from '../icons/spritemap';

/**
 * Map statuses to existing icon names
 *
 * @param status component status
 * @returns the matching icon name
 */
export default function getIconNameFromStatus(status: Status): IconName {
  const map: Record<Status, IconName> = {
    informational: 'info-encircled-filled',
    critical: 'dangerous',
    warning: 'warning-filled',
    favorable: 'checkmark-encircled-filled',
  };
  return map[status];
}
