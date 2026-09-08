import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import {
  type Mock,
  vi,
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
} from 'vitest';
import { AppFooter, type AppFooterCSSProperties } from './AppFooter';

import * as stories from './AppFooter.stories';
import type { StoryFile } from '../../../.storybook/utility-types';
import type { NavLink } from '../../util/utility-types';

/**
 * Valid colors that no theme token resolves to, so an assertion cannot pass on an emphasis
 * default by coincidence.
 */
const CUSTOM_BG = 'rebeccapurple';
const CUSTOM_FG = 'papayawhip';

const EMPHASES = ['low', 'high'] as const;

/**
 * The two properties, each paired with the other one, so every case runs against both and a
 * property set on its own cannot quietly leak into the other.
 */
const CUSTOM_PROPERTIES: {
  name: string;
  value: string;
  style: AppFooterCSSProperties;
  otherName: string;
}[] = [
  {
    name: '--app-footer__bg',
    value: CUSTOM_BG,
    style: { '--app-footer__bg': CUSTOM_BG },
    otherName: '--app-footer__fg',
  },
  {
    name: '--app-footer__fg',
    value: CUSTOM_FG,
    style: { '--app-footer__fg': CUSTOM_FG },
    otherName: '--app-footer__bg',
  },
];

const NAV_ITEMS: NavLink[] = [
  {
    type: 'link',
    name: 'Support',
    href: '#support',
  },
];

describe('<AppFooter />', () => {
  generateSnapshots(stories as StoryFile);

  describe('the color custom properties', () => {
    it('leaves them alone when the caller does not set them, so the emphasis default applies', () => {
      const { container } = render(
        <AppFooter navItems={NAV_ITEMS} title="text" />,
      );

      const footer = container.firstElementChild as HTMLElement;

      expect(footer.style.getPropertyValue('--app-footer__bg')).toBe('');
      expect(footer.style.getPropertyValue('--app-footer__fg')).toBe('');
    });

    it.each(EMPHASES)(
      'takes a caller value over the %s emphasis colors',
      (emphasis) => {
        const { container } = render(
          <AppFooter
            emphasis={emphasis}
            navItems={NAV_ITEMS}
            style={{
              '--app-footer__bg': CUSTOM_BG,
              '--app-footer__fg': CUSTOM_FG,
            }}
            title="text"
          />,
        );

        const footer = container.firstElementChild as HTMLElement;

        // The emphasis class declares the defaults and the caller's inline value lands on the
        // same element, which is what lets the inline value win. This asserts the two coexist;
        // that the cascade resolves in the caller's favor is covered by the Chromatic snapshot
        // of the `CustomColors` story, since jsdom does not apply the stylesheet.
        expect(footer.className).toContain(`app-footer--emphasis-${emphasis}`);
        expect(footer).toHaveStyle({
          '--app-footer__bg': CUSTOM_BG,
          '--app-footer__fg': CUSTOM_FG,
        });
      },
    );

    it.each(CUSTOM_PROPERTIES)(
      'accepts $name on its own, leaving $otherName to its default',
      ({ name, value, style, otherName }) => {
        const { container } = render(
          <AppFooter navItems={NAV_ITEMS} style={style} title="text" />,
        );

        const footer = container.firstElementChild as HTMLElement;

        expect(footer.style.getPropertyValue(name)).toBe(value);
        expect(footer.style.getPropertyValue(otherName)).toBe('');
      },
    );

    it('keeps them alongside the regular CSS properties on the style prop', () => {
      const { container } = render(
        <AppFooter
          navItems={NAV_ITEMS}
          style={{
            '--app-footer__bg': CUSTOM_BG,
            '--app-footer__fg': CUSTOM_FG,
            position: 'sticky',
          }}
          title="text"
        />,
      );

      expect(container.firstElementChild).toHaveStyle({
        '--app-footer__bg': CUSTOM_BG,
        '--app-footer__fg': CUSTOM_FG,
        position: 'sticky',
      });
    });

    it('does not accept the pre-v19 `-color` suffixed names', () => {
      const { container: bgContainer } = render(
        <AppFooter
          navItems={NAV_ITEMS}
          // @ts-expect-error renamed in v19; `-color` was dropped to match the other components
          style={{ '--app-footer__bg-color': CUSTOM_BG }}
          title="text"
        />,
      );
      const { container: fgContainer } = render(
        <AppFooter
          navItems={NAV_ITEMS}
          // @ts-expect-error renamed in v19; `-color` was dropped to match the other components
          style={{ '--app-footer__fg-color': CUSTOM_FG }}
          title="text"
        />,
      );

      const bgFooter = bgContainer.firstElementChild as HTMLElement;
      const fgFooter = fgContainer.firstElementChild as HTMLElement;

      // React passes any `--` prefixed key straight through, so the old names still reach the
      // DOM. They just no longer drive anything, which is what these assert.
      expect(bgFooter.style.getPropertyValue('--app-footer__bg')).toBe('');
      expect(bgFooter.style.getPropertyValue('--app-footer__bg-color')).toBe(
        CUSTOM_BG,
      );
      expect(fgFooter.style.getPropertyValue('--app-footer__fg')).toBe('');
      expect(fgFooter.style.getPropertyValue('--app-footer__fg-color')).toBe(
        CUSTOM_FG,
      );
    });
  });

  describe('event handling', () => {
    it('handles clicks on footer logo', async () => {
      const user = userEvent.setup();
      const onLinkClickMock = vi.fn();

      render(
        <AppFooter
          href="#homepage"
          navItems={[
            {
              type: 'link',
              name: 'Support',
              href: '#support',
              meta: {
                name: 'track-value',
                value: 4,
                mutate: true,
              },
            },
          ]}
          onLinkClick={onLinkClickMock}
          title={<div className="fpo h-[40px] w-[175px]">Logo goes here</div>}
        />,
      );

      await user.click(screen.getAllByRole('link')[0]);
      expect(onLinkClickMock.mock.calls[0][1]).toEqual({
        href: '#homepage',
        name: 'EDS-footer-logo',
        type: 'link',
      });
    });

    it('handles clicks on footer fallback text logo', async () => {
      const user = userEvent.setup();
      const onLinkClickMock = vi.fn();

      render(
        <AppFooter
          href="#homepage"
          navItems={[
            {
              type: 'link',
              name: 'Support',
              href: '#support',
              meta: {
                name: 'track-value',
                value: 4,
                mutate: true,
              },
            },
          ]}
          onLinkClick={onLinkClickMock}
          title="text"
        />,
      );

      await user.click(screen.getAllByRole('link')[0]);
      expect(onLinkClickMock.mock.calls[0][1]).toEqual({
        href: '#homepage',
        name: 'EDS-footer-logo',
        type: 'link',
      });
    });

    it('handles clicks on any nav items', async () => {
      const user = userEvent.setup();
      const onLinkClickMock = vi.fn();

      render(
        <AppFooter
          navItems={[
            {
              type: 'link',
              name: 'Support',
              href: '#support',
              meta: {
                name: 'track-value',
                value: 4,
                mutate: true,
              },
            },
          ]}
          onLinkClick={onLinkClickMock}
          title={<div className="fpo h-[40px] w-[175px]">Logo goes here</div>}
        />,
      );

      await user.click(screen.getAllByRole('link')[0]);
      expect(onLinkClickMock.mock.calls[0][1]).toEqual({
        href: '#support',
        name: 'Support',
        type: 'link',
        meta: {
          name: 'track-value',
          value: 4,
          mutate: true,
        },
      });
    });
  });

  describe('emits warnings when misused', () => {
    let consoleMock: Mock;
    beforeEach(() => {
      consoleMock = vi.spyOn(console, 'error');
      consoleMock.mockImplementation(() => {});
    });

    afterEach(() => {
      consoleMock.mockRestore();
    });

    it('warns when a menu item has invalid type', () => {
      render(
        <AppFooter
          navItems={[
            {
              // @ts-expect-error testing bad type on purpose
              type: 'undefined',
              name: 'Support',
              href: '#support',
              meta: {
                name: 'track-value',
                value: 4,
                mutate: true,
              },
            },
          ]}
          title={<div className="fpo h-[40px] w-[175px]">Logo goes here</div>}
        />,
      );

      expect(consoleMock).toHaveBeenCalledTimes(1);
    });
  });
});
