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

/**
 * The `icon` prop v19 replaced with `IconProvider`, so an implementation can read one that
 * arrives anyway without putting it back into a public API.
 *
 * TODO(next-major): remove, with `assertNoRemovedIconProp` and every `icon` destructure
 * that feeds it.
 */
export type WithRemovedIconProp<T> = T & { icon?: unknown };

/**
 * Warns a consumer still passing the `icon` prop that v19 replaced with `IconProvider`.
 *
 * These props need this and the ones removed alongside them do not, because of their names.
 * React forwards an unknown *lowercase* attribute to the DOM without comment, so `icon`
 * lands there as a stray attribute and a consumer who skipped `eds-migrate` gets no signal
 * at all: no type error, since untyped code never sees one, and nothing in the console. The
 * camelCase props removed at the same time (`indicatorContent`, `trailingContent`,
 * `trailingIcon`) are already reported by React itself.
 *
 * TODO(next-major): remove. By then `eds-migrate 18-to-19` is far enough back that code
 * still passing `icon` is not worth carrying a runtime check for, and the destructures that
 * call this should go with it.
 *
 * @param componentName the component as a consumer writes it, e.g. `Breadcrumbs.Item`
 * @param role the semantic icon role that now supplies the icon
 * @param icon whatever arrived under `icon`
 */
export function assertNoRemovedIconProp(
  componentName: string,
  role: string,
  icon: unknown,
): void {
  assertEdsUsage(
    [typeof icon !== 'undefined'],
    `${componentName} no longer takes an \`icon\` prop, and the one passed is ignored. It draws the \`${role}\` icon from \`IconProvider\` instead, so every component filling that role matches. Run \`npx eds-migrate 18-to-19\` to remove the prop, and set \`${role}\` on an \`IconProvider\` to change the icon.`,
  );
}
