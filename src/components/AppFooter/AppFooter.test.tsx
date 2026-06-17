import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import { AppFooter } from './AppFooter';

import * as stories from './AppFooter.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<AppFooter />', () => {
  generateSnapshots(stories as StoryFile);

  describe('event handling', () => {
    it('handles clicks on footer logo', async () => {
      const user = userEvent.setup();
      const onLinkClickMock = jest.fn();

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
      const onLinkClickMock = jest.fn();

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
      const onLinkClickMock = jest.fn();

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
    let consoleMock: jest.SpyInstance;
    beforeEach(() => {
      consoleMock = jest.spyOn(console, 'error');
      consoleMock.mockImplementation();
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
