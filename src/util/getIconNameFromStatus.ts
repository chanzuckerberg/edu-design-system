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
    informational: 'info',
    critical: 'dangerous',
    warning: 'warning',
    favorable: 'check-circle',
  };
  return map[status];
}
