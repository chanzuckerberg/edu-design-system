import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Icon } from './Icon';
import type { IconName } from './Icon';
import { defaultSemanticIcons, IconProvider } from './IconProvider';
import * as stories from './IconProvider.stories';
import type { StoryFile } from '../../../.storybook/utility-types';
import Accordion from '../Accordion';
import AppHeader from '../AppHeader';
import Breadcrumbs from '../Breadcrumbs';
import InlineNotification from '../InlineNotification';
import InputChip from '../InputChip';
import Link from '../Link';
import Menu from '../Menu';
import { Select } from '../Select/Select';

/* eslint-disable testing-library/no-container */

/**
 * EDS icons draw their paths inline from the spritemap rather than referencing a sprite
 * by id, and a decorative icon is `aria-hidden` with no accessible name. So the only way
 * to tell which glyph a component drew is to compare its paths against the icon it should
 * have been.
 */
function glyphOf(name: IconName) {
  const { container, unmount } = render(
    <Icon name={name} purpose="decorative" />,
  );
  const glyph = container.querySelector('svg')?.innerHTML ?? '';
  unmount();

  return glyph;
}

/**
 * Whether any icon in the tree drew the given glyph. Uses `includes` rather than equality
 * because an informative icon puts a `<title>` alongside the paths.
 */
function hasGlyph(container: HTMLElement, name: IconName) {
  const glyph = glyphOf(name);

  return Array.from(container.querySelectorAll('svg')).some((svg) =>
    svg.innerHTML.includes(glyph),
  );
}

function countGlyph(container: HTMLElement, name: IconName) {
  const glyph = glyphOf(name);

  return Array.from(container.querySelectorAll('svg')).filter((svg) =>
    svg.innerHTML.includes(glyph),
  ).length;
}

const expandableMenu = (
  <Menu>
    <Menu.Button>Actions</Menu.Button>
  </Menu>
);

describe('<IconProvider />', () => {
  generateSnapshots(stories as StoryFile);

  it('renders the EDS default when no provider wraps the tree', () => {
    const { container } = render(expandableMenu);

    expect(hasGlyph(container, 'chevron-down')).toBe(true);
  });

  it('applies an override to the component drawing that role', () => {
    const { container } = render(
      <IconProvider icons={{ expand: 'chevron-right' }}>
        {expandableMenu}
      </IconProvider>,
    );

    expect(hasGlyph(container, 'chevron-right')).toBe(true);
    expect(hasGlyph(container, 'chevron-down')).toBe(false);
  });

  it('applies one override across every component drawing the same role', () => {
    const { container } = render(
      <IconProvider icons={{ expand: 'chevron-right' }}>
        {expandableMenu}
        <Accordion headingAs="h3">
          <Accordion.Row>
            <Accordion.Button title="Row" />
            <Accordion.Panel>Panel</Accordion.Panel>
          </Accordion.Row>
        </Accordion>
        {/*
         * `Select`'s indicator is here rather than in that component's own stories because
         * every `Select` story snapshots as a single hidden input: HeadlessUI's listbox does
         * not render its button in this environment, so a snapshot cannot show the glyph.
         * `Select.ButtonWrapper` draws it directly.
         */}
        <Select.ButtonWrapper>Pick one</Select.ButtonWrapper>
      </IconProvider>,
    );

    expect(countGlyph(container, 'chevron-right')).toBe(3);
  });

  it('leaves the roles it was not given alone', () => {
    const { container } = render(
      <IconProvider icons={{ expand: 'chevron-right' }}>
        <InlineNotification status="critical" title="Something went wrong" />
      </IconProvider>,
    );

    expect(hasGlyph(container, 'critical-encircled-filled')).toBe(true);
  });

  it('renders a node in place of an icon name', () => {
    const { container } = render(
      <IconProvider icons={{ expand: <span data-testid="custom" /> }}>
        {expandableMenu}
      </IconProvider>,
    );

    expect(container.querySelector('[data-testid="custom"]')).not.toBeNull();
    expect(hasGlyph(container, 'chevron-down')).toBe(false);
  });

  it('merges a nested provider over the one around it', () => {
    const { container } = render(
      <IconProvider icons={{ close: 'add', expand: 'chevron-right' }}>
        <IconProvider icons={{ expand: 'chevron-up' }}>
          {expandableMenu}
          <InputChip label="Tag" />
        </IconProvider>
      </IconProvider>,
    );

    // The inner provider wins for the role it names.
    expect(hasGlyph(container, 'chevron-up')).toBe(true);
    expect(hasGlyph(container, 'chevron-right')).toBe(false);
    // It says nothing about `close`, so that stays the outer override rather than
    // falling back to the EDS default.
    expect(hasGlyph(container, 'add')).toBe(true);
    expect(hasGlyph(container, 'close')).toBe(false);
  });

  // Every entry has to draw something. A role resolving to nothing leaves whatever draws it
  // in a state no component can make sense of, so it is a configuration error rather than
  // something to fall back from.
  it.each([
    ['undefined', undefined],
    ['null', null],
    ['false', false],
    ['an empty array', []],
    ['an array of empties', [null, false]],
    // eslint-disable-next-line react/jsx-no-useless-fragment
    ['an empty fragment', <></>],
    ['the empty string', ''],
    ['a name the spritemap does not have', 'not-an-icon'],
  ])('throws for a role set to %s', (_label, value) => {
    expect(() =>
      render(
        <IconProvider icons={{ close: value }}>
          <InputChip label="Tag" />
        </IconProvider>,
      ),
    ).toThrow(/Every entry has to be an EDS icon name or content that renders/);
  });

  it('says how to write a conditional override in the error', () => {
    // The shape that used to be supported: a conditional that resolves to nothing. The
    // error has to point at the alternative, since the type system allows this.
    const isCustom = [false][0];

    expect(() =>
      render(
        <IconProvider icons={{ close: isCustom ? <span /> : null }}>
          <InputChip label="Tag" />
        </IconProvider>,
      ),
    ).toThrow(/omit it rather than passing an empty value/);
  });

  it('renders nothing for a role name the map does not own', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});

    // `Link.icon` names a role, and untyped code can pass one that is not. The map inherits
    // from `Object.prototype`, so `'toString'` used to resolve to the inherited function,
    // travel through `IconSlot` as content, and reach React as a child it cannot render.
    const { container } = render(
      <Link context="standalone" href="/" {...({ icon: 'toString' } as object)}>
        Go
      </Link>,
    );

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('is not a semantic icon role'),
    );
    expect(error).not.toHaveBeenCalled();
    expect(container.querySelector('svg')).toBeNull();
  });

  it('leaves Icon to report a bad name given to it directly', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    // The provider can no longer hand one down, but a content slot a consumer fills goes
    // straight to `Icon`, so its own guard still earns its place. `''` cannot arrive through
    // a slot, since `hasSlotContent` reads it as no content, so it is driven directly.
    const { container } = render(
      <Icon name={'' as IconName} purpose="decorative" />,
    );

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('is not an EDS icon'),
    );
    expect(container.querySelector('svg')).toBeNull();
  });

  it('keeps controls named when a role is overridden with a node', () => {
    render(
      <IconProvider icons={{ close: <span />, back: <span /> }}>
        <InputChip label="Tag" />
        <Breadcrumbs>
          <Breadcrumbs.Item href="#" text="Home" />
          <Breadcrumbs.Item href="#" text="Child" />
        </Breadcrumbs>
      </IconProvider>,
    );

    // `IconSlot` leaves custom content's accessible treatment to its author, so a name
    // carried by the icon would vanish under an override. Both controls name themselves.
    expect(
      screen.getByRole('button', { name: 'remove Tag' }),
    ).toBeInTheDocument();
    // Two, because the back crumb is a clone of the second-to-last item, shown only at
    // narrow widths. Before, that clone was the one link with no accessible name at all.
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2);
  });

  it('reports a key that is not a role, and ignores it', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    // A misspelling used to do nothing in silence: the key was merged, no component ever
    // asked for it, and the icon the consumer meant to change kept its default.
    const { container } = render(
      <IconProvider icons={{ expnd: 'chevron-up' } as object}>
        {expandableMenu}
      </IconProvider>,
    );

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('"expnd" is not a semantic icon role'),
    );
    expect(hasGlyph(container, 'chevron-down')).toBe(true);
  });

  it('does not let a non-role key be read back as one', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    // `{ toString: 'custom' }` would otherwise put `toString` on the merged map as an own
    // property, so an unmigrated `Link icon="toString"` found it there and was reported as
    // a role set to a bad icon rather than as no role at all.
    render(
      <IconProvider icons={{ toString: 'custom' } as object}>
        <Link
          context="standalone"
          href="/"
          {...({ icon: 'toString' } as object)}
        >
          Go
        </Link>
      </IconProvider>,
    );

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('"toString" is not a semantic icon role'),
    );
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining(
        'is not a semantic icon role, so nothing renders',
      ),
    );
  });

  it('reaches the close button AppHeader renders through a portal', () => {
    render(
      <IconProvider icons={{ close: 'remove' }}>
        <AppHeader
          navGroups={[
            {
              name: 'group',
              navItems: [{ name: 'Item', type: 'button' }],
            },
          ]}
          title="Title"
        />
      </IconProvider>,
    );

    // That button renders outside the component's own tree, so no story snapshot can show
    // it. `screen` queries the document, which is the only way to assert on it.
    const close = screen.getByLabelText('Close popover menu');

    expect(close.innerHTML).toContain(glyphOf('remove'));
  });

  it('stays authoritative against a prop that arrives from unmigrated code', () => {
    // `Menu.Button` no longer declares `icon`, but `Button` still takes one, so an `icon`
    // reaching it from JavaScript that skipped the codemod used to be spread in after the
    // resolved one and win — putting the button back to a per-instance icon and defeating
    // the point of the provider.
    const unmigrated = { icon: 'add' } as Record<string, unknown>;

    const { container } = render(
      <Menu>
        <Menu.Button {...unmigrated}>Actions</Menu.Button>
      </Menu>,
    );

    expect(hasGlyph(container, 'chevron-down')).toBe(true);
    expect(hasGlyph(container, 'add')).toBe(false);
  });

  it('does not let the shipped defaults be reassigned', () => {
    // The same object backs the context's default value, so a write here used to change
    // what every tree without an override rendered — from anywhere in an app.
    expect(Object.isFrozen(defaultSemanticIcons)).toBe(true);
    expect(() => {
      (defaultSemanticIcons as Record<string, unknown>).close = null;
    }).toThrow();

    const { container } = render(<InputChip label="Tag" />);

    expect(hasGlyph(container, 'close')).toBe(true);
  });

  it('ships a default for every semantic role', () => {
    expect(Object.values(defaultSemanticIcons).every(Boolean)).toBe(true);
  });
});
