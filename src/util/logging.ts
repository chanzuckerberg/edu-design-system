import identity from 'lodash/identity';

type Check = boolean;
type LogLevel = 'warn' | 'error';

/**
 * Logging function used to check whether a usage of EDS is proper and advised. When using, it defaults
 * to warning, where it will print a message to the console for developers to see. LogLevel supported.
 *
 * @param list of truthy checks to assert whether the component usages are appropriate
 * @param message Message to print when ANY of the checks are true
 * @param [loglevel] Severity of the tracked issue
 */
export function assertEdsUsage(
  checks: Check[],
  message: string,
  loglevel: LogLevel = 'warn',
): void {
  if (process.env.NODE_ENV !== 'production' && [...checks].some(identity)) {
    console[loglevel](message);
  }
}
