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
 * Props that v19 removed in favor of `IconProvider`, so an implementation can read one
 * that arrives anyway without putting it back into a public API.
 *
 * TODO(next-major): remove, with `assertNoRemovedIconProp` and every destructure that
 * feeds it.
 */
export type WithRemovedIconProps<T, PropName extends string> = T &
  Partial<Record<PropName, unknown>>;

/**
 * Warns a consumer still passing one of the icon props that v19 removed in favor of
 * `IconProvider`.
 *
 * Worth a check of our own because neither route reaches untyped code. A typed consumer
 * gets TS2322 at the call site, but JavaScript never sees that, and what happens next
 * depends on the prop's name: React reports an unknown *camelCase* prop but forwards an
 * unknown *lowercase* one to the DOM in silence. So `icon` produced a stray attribute and
 * nothing else, while `indicatorContent` and friends produced a warning about React rather
 * than about EDS — nothing in either case saying the prop was removed, or what to do now.
 * Reading the prop here also keeps it off the DOM.
 *
 * The remediation stays general on purpose. This serves both kinds of removal: the migration
 * drops most of these props whatever their value, but leaves a non-default
 * `indicatorContent` or `trailingContent` in place for a person to decide on. Naming either
 * behaviour here would be wrong for the other half of the callers, so it points at the
 * action that is right for all of them — move the value to an `IconProvider` if it mattered.
 *
 * TODO(next-major): remove. By then `eds-migrate 18-to-19` is far enough back that code
 * still passing these is not worth carrying a runtime check for, and the destructures that
 * call this should go with it.
 *
 * @param componentName the component as a consumer writes it, e.g. `Breadcrumbs.Item`
 * @param propName the prop that was removed, e.g. `indicatorContent`
 * @param role the semantic icon role that supplies the icon now
 * @param value whatever arrived under that prop
 */
export function assertNoRemovedIconProp(
  componentName: string,
  propName: string,
  role: string,
  value: unknown,
): void {
  assertEdsUsage(
    [typeof value !== 'undefined'],
    `${componentName} no longer takes \`${propName}\`, and the one passed is ignored. It draws the \`${role}\` icon from \`IconProvider\` instead, so every component filling that role matches. Run \`npx eds-migrate 18-to-19\` to clean the prop up, and if its value mattered, set \`${role}\` on an \`IconProvider\` so the icon looks that way everywhere.`,
  );
}
