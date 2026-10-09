import { describe, expect, it } from 'vitest';
import * as EDS from './index';

// Third-party re-exports we don't own
const SKIPPED_EXPORTS = ['Transition'];

// Sub-components that reuse a shared component keep that component's name
const SHARED_SUBCOMPONENTS: Record<string, string> = {
  'Checkbox.Label': 'Label',
  'Radio.Label': 'Label',
  'InputField.Input': 'Input',
  'InputField.Label': 'FieldLabel',
  'TextareaField.Label': 'FieldLabel',
  'OrderedList.ListItem': 'ListItem',
  'UnorderedList.ListItem': 'ListItem',
};

const REACT_WRAPPERS = [
  Symbol.for('react.forward_ref'),
  Symbol.for('react.memo'),
];

const isComponent = (value: unknown) =>
  typeof value === 'function' ||
  (typeof value === 'object' &&
    value !== null &&
    REACT_WRAPPERS.includes((value as { $$typeof?: symbol }).$$typeof!));

/**
 * Collects every public component and its static sub-components (e.g. `Card.Header`),
 * keyed by the dotted path consumers use to reach it.
 */
const collectComponents = () => {
  const components: [string, { displayName?: string }][] = [];
  const visit = (path: string, value: unknown, seen: Set<unknown>) => {
    if (!isComponent(value) || seen.has(value)) return;
    components.push([path, value as { displayName?: string }]);
    const nextSeen = new Set(seen).add(value);
    Object.entries(value as object)
      .filter(([key]) => /^[A-Z][a-zA-Z]*$/.test(key))
      .forEach(([key, child]) => visit(`${path}.${key}`, child, nextSeen));
  };

  Object.entries(EDS)
    .filter(([name]) => /^[A-Z]/.test(name) && !SKIPPED_EXPORTS.includes(name))
    .forEach(([name, value]) => visit(name, value, new Set()));
  return components;
};

describe('displayName', () => {
  const components = collectComponents();

  it('finds the public components', () => {
    expect(components.length).toBeGreaterThan(50);
  });

  it.each(components)(
    '%s has a displayName matching its public name',
    (path, component) => {
      expect(component.displayName).toBe(SHARED_SUBCOMPONENTS[path] ?? path);
    },
  );
});
