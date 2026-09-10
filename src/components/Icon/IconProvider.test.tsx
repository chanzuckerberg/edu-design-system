import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Icon } from './Icon';
import type { IconName } from './Icon';
import { defaultSemanticIcons, IconProvider } from './IconProvider';
import * as stories from './IconProvider.stories';
import type { StoryFile } from '../../../.storybook/utility-types';
import Accordion from '../Accordion';
import InlineNotification from '../InlineNotification';
import InputChip from '../InputChip';
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

  it('ships a default for every semantic role', () => {
    expect(Object.values(defaultSemanticIcons).every(Boolean)).toBe(true);
  });
});
