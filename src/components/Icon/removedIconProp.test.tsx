import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Accordion from '../Accordion';
import Breadcrumbs from '../Breadcrumbs';
import Combobox from '../Combobox';
import Menu from '../Menu';
import Select from '../Select';

/**
 * The `icon` prop v19 replaced with `IconProvider` is lowercase, so React forwards an
 * unmigrated one to the DOM as a stray attribute without saying anything: untyped code sees
 * no type error and the console stays quiet. These components report it themselves.
 *
 * TODO(next-major): remove, with `assertNoRemovedIconProp`.
 */
describe('the removed `icon` prop', () => {
  let warn: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  // Each is written the way unmigrated JavaScript would, past the types that reject it.
  const unmigrated = { icon: 'chevron-down' } as Record<string, unknown>;

  const cases = [
    [
      'Breadcrumbs.Item',
      <Breadcrumbs key="b">
        <Breadcrumbs.Item href="/a" text="A" {...unmigrated} />
        <Breadcrumbs.Item href="/b" text="B" />
      </Breadcrumbs>,
    ],
    [
      'Menu.Button',
      <Menu key="m">
        <Menu.Button {...unmigrated}>Actions</Menu.Button>
      </Menu>,
    ],
    [
      'Select.Button',
      <Select key="sb" label="L" onChange={() => {}}>
        <Select.Button {...unmigrated}>Pick</Select.Button>
      </Select>,
    ],
    [
      'Select.ButtonWrapper',
      <Select.ButtonWrapper key="sw" {...unmigrated}>
        Pick
      </Select.ButtonWrapper>,
    ],
    [
      'Combobox.Button',
      // These three read from `ComboboxContext`, so each needs its provider around it.
      <Combobox key="cb" label="L">
        <Combobox.Button {...unmigrated} />
      </Combobox>,
    ],
    [
      'Combobox.Input',
      <Combobox key="ci" label="L">
        <Combobox.Input {...unmigrated} />
      </Combobox>,
    ],
    [
      'Combobox.InputWrapper',
      <Combobox key="cw" label="L">
        <Combobox.InputWrapper {...unmigrated} />
      </Combobox>,
    ],
  ] as const;

  it.each(cases)('warns for %s', (name, element) => {
    render(element);

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining(`${name} no longer takes an \`icon\` prop`),
    );
  });

  it.each(cases)('does not leave %s an icon attribute on the DOM', (_, el) => {
    const { container } = render(el);

    /* eslint-disable-next-line testing-library/no-container */
    expect(container.querySelector('[icon]')).toBeNull();
  });

  it('stays quiet when no icon is passed', () => {
    render(
      <Accordion headingAs="h3">
        <Accordion.Row>
          <Accordion.Button title="Row" />
          <Accordion.Panel>Panel</Accordion.Panel>
        </Accordion.Row>
      </Accordion>,
    );
    render(
      <Menu>
        <Menu.Button>Actions</Menu.Button>
      </Menu>,
    );

    expect(warn).not.toHaveBeenCalled();
  });
});
