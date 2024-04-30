import type { Status } from './variant-types';
import type { IconName } from '../icons/spritemap-v2';

/**
 * Map statuses to existing icon names
 *
 * @param status component status
 * @returns the matching icon name
 */
export default function getIconNameFromStatus(status: Status): IconName {
  const map: Record<Status, IconName> = {
    // TODO-AH: do we need a filled version - informational: 'info',
    informational: 'info-encircled',
    critical: 'dangerous',
    warning: 'warning-filled',
    favorable: 'checkmark-encircled-filled',
  };
  return map[status];
}
