import identity from 'lodash/identity';

type Check = boolean;
type LogLevel = 'warn' | 'error';

/**
 * Logging function used to check whether a usage of EDS is proper and advised. When using, it defaults
 * to warning, where it will print a message to the console for developers to see. LogLevel supported.
 *
 * @param checks set of boolean checks to assert whether the component usages are compatible
 * @param message Message to print when the component is not being used as advised
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
