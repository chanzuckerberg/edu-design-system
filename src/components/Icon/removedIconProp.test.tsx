import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Accordion from '../Accordion';
import Breadcrumbs from '../Breadcrumbs';
import Combobox from '../Combobox';
import Menu from '../Menu';
import Select from '../Select';

/**
 * v19 removed the per-instance icon props in favor of `IconProvider`. Untyped code never
 * sees the type error that replaced them, and React's own reporting is uneven: it names an
 * unknown camelCase prop, but forwards an unknown lowercase one to the DOM without comment.
 * So these components report the removal themselves, and keep the prop off the DOM either
 * way.
 *
 * TODO(next-major): remove, with `assertNoRemovedIconProp`.
 */
describe('the removed icon props', () => {
  let warn: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    // React reports the camelCase props on its own; that is not what is under test here.
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  // Written the way unmigrated JavaScript would, past the types that reject it.
  const legacy = (propName: string, value = 'chevron-up') =>
    ({ [propName]: value }) as Record<string, unknown>;

  const accordion = (props: Record<string, unknown>) => (
    <Accordion headingAs="h3">
      <Accordion.Row>
        <Accordion.Button title="Row" {...props} />
        <Accordion.Panel>Panel</Accordion.Panel>
      </Accordion.Row>
    </Accordion>
  );

  const cases = [
    [
      'Accordion.Button',
      'indicatorContent',
      accordion(legacy('indicatorContent')),
    ],
    ['Accordion.Button', 'trailingIcon', accordion(legacy('trailingIcon'))],
    [
      'Breadcrumbs.Item',
      'icon',
      <Breadcrumbs key="b">
        <Breadcrumbs.Item href="/a" text="A" {...legacy('icon')} />
        <Breadcrumbs.Item href="/b" text="B" />
      </Breadcrumbs>,
    ],
    [
      'Menu.Button',
      'icon',
      <Menu key="mi">
        <Menu.Button {...legacy('icon')}>Actions</Menu.Button>
      </Menu>,
    ],
    [
      'Menu.Button',
      'trailingContent',
      <Menu key="mt">
        <Menu.Button {...legacy('trailingContent')}>Actions</Menu.Button>
      </Menu>,
    ],
    [
      'Select.Button',
      'icon',
      <Select key="sb" label="L">
        <Select.Button {...legacy('icon')}>Pick</Select.Button>
      </Select>,
    ],
    [
      'Select.ButtonWrapper',
      'icon',
      <Select.ButtonWrapper key="sw" {...legacy('icon')}>
        Pick
      </Select.ButtonWrapper>,
    ],
    [
      'Combobox.Button',
      'icon',
      // These three read from `ComboboxContext`, so each needs its provider around it.
      <Combobox key="cb" label="L">
        <Combobox.Button {...legacy('icon')} />
      </Combobox>,
    ],
    [
      'Combobox.Input',
      'icon',
      <Combobox key="ci" label="L">
        <Combobox.Input {...legacy('icon')} />
      </Combobox>,
    ],
    [
      'Combobox.InputWrapper',
      'icon',
      <Combobox key="cw" label="L">
        <Combobox.InputWrapper {...legacy('icon')} />
      </Combobox>,
    ],
  ] as const;

  it.each(cases)('warns for %s %s', (componentName, propName, element) => {
    render(element);

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining(
        `${componentName} no longer takes \`${propName}\``,
      ),
    );
  });

  it.each(cases)('keeps %s %s off the DOM', (_name, propName, element) => {
    const { container } = render(element);

    // React lowercases an unknown prop on its way to becoming an attribute, so that is
    // what to look for rather than the prop's own spelling.
    /* eslint-disable-next-line testing-library/no-container */
    expect(container.querySelector(`[${propName.toLowerCase()}]`)).toBeNull();
  });

  it('stays quiet when none is passed', () => {
    render(accordion({}));
    render(
      <Menu>
        <Menu.Button>Actions</Menu.Button>
      </Menu>,
    );

    expect(warn).not.toHaveBeenCalled();
  });
});
