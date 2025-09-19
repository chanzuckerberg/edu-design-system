import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import { AppHeader } from './AppHeader';

import * as stories from './AppHeader.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<AppHeader />', () => {
  generateSnapshots(stories as StoryFile);

  it('handles button clicks on button types (horizontal)', async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();

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
                href: 'https://example.org',
                icon: 'person-encircled',
                iconLayout: 'right',
              },
            ],
          },
        ]}
        onButtonClick={onClickMock}
        subTitle="They're cool!"
        title="Bodies of water"
      />,
    );

    await user.click(screen.getAllByRole('button')[0]);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('handles button clicks on button types (vertical)', async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();

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
                href: 'https://example.org',
                icon: 'person-encircled',
                iconLayout: 'right',
              },
            ],
          },
        ]}
        onButtonClick={onClickMock}
        orientation="vertical"
        subTitle="They're cool!"
        title="Bodies of water"
      />,
    );

    await user.click(screen.getAllByRole('button')[0]);
    expect(onClickMock).toHaveBeenCalled();
  });
});
