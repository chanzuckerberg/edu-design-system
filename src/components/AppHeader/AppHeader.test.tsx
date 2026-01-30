import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import { AppHeader } from './AppHeader';

import * as stories from './AppHeader.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<AppHeader />', () => {
  generateSnapshots(stories as StoryFile);

  it('handles clicks on nav items types (horizontal)', async () => {
    const user = userEvent.setup();
    const onButtonClickMock = jest.fn();
    const onLinkClickMock = jest.fn();

    render(
      <AppHeader
        navGroups={[
          {
            name: 'group-1',
            navItems: [
              {
                name: 'Lakes',
                type: 'button',
                meta: {
                  name: 'track-value',
                  value: 3,
                },
              },
              {
                name: 'Oceans',
                type: 'button',
              },
              {
                name: 'sep1',
                type: 'separator',
              },
              {
                name: 'Rivers',
                type: 'link',
                href: 'https://example.org',
              },
            ],
          },
          {
            name: 'group-2',
            navItems: [
              {
                name: 'Profile',
                type: 'link',
                href: '#',
                icon: 'person-encircled',
                iconLayout: 'right',
                meta: {
                  name: 'track-value',
                  value: 4,
                  mutate: true,
                },
              },
            ],
          },
        ]}
        onButtonClick={onButtonClickMock}
        onLinkClick={onLinkClickMock}
        subTitle="They're cool!"
        title="Bodies of water"
      />,
    );

    await user.click(screen.getAllByRole('button')[0]);
    expect(onButtonClickMock.mock.calls[0][1]).toEqual({
      name: 'Lakes',
      type: 'button',
      meta: {
        name: 'track-value',
        value: 3,
      },
    });

    await user.click(screen.getAllByRole('button')[1]);
    expect(onButtonClickMock.mock.calls[1][1]).toEqual({
      name: 'Oceans',
      type: 'button',
    });

    expect(onButtonClickMock).toHaveBeenCalledTimes(2);

    await user.click(screen.getAllByRole('link')[1]);
    expect(onLinkClickMock).toHaveBeenCalled();
    expect(onLinkClickMock.mock.calls[0][1]).toEqual({
      name: 'Profile',
      type: 'link',
      href: '#',
      icon: 'person-encircled',
      iconLayout: 'right',
      meta: {
        name: 'track-value',
        value: 4,
        mutate: true,
      },
    });
  });

  it('handles clicks on nav item types (vertical)', async () => {
    const user = userEvent.setup();
    const onButtonClickMock = jest.fn();
    const onLinkClickMock = jest.fn();

    render(
      <AppHeader
        navGroups={[
          {
            name: 'group-1',
            navItems: [
              {
                name: 'Lakes',
                type: 'button',
              },
              {
                name: 'Oceans',
                type: 'button',
              },
              {
                name: 'sep1',
                type: 'separator',
              },
              {
                name: 'Rivers',
                type: 'link',
                href: 'https://example.org',
              },
            ],
          },
          {
            name: 'group-2',
            navItems: [
              {
                name: 'Profile',
                type: 'link',
                href: '#',
                icon: 'person-encircled',
                iconLayout: 'right',
              },
            ],
          },
        ]}
        onButtonClick={onButtonClickMock}
        onLinkClick={onLinkClickMock}
        orientation="vertical"
        subTitle="They're cool!"
        title="Bodies of water"
      />,
    );

    await user.click(screen.getAllByRole('button')[0]);
    expect(onButtonClickMock).toHaveBeenCalled();
    expect(onButtonClickMock.mock.calls[0][1]).toEqual({
      name: 'Lakes',
      type: 'button',
    });

    await user.click(screen.getAllByRole('link')[1]);
    expect(onLinkClickMock).toHaveBeenCalled();
    expect(onLinkClickMock.mock.calls[0][1]).toEqual({
      name: 'Profile',
      type: 'link',
      href: '#',
      icon: 'person-encircled',
      iconLayout: 'right',
    });
  });
});
