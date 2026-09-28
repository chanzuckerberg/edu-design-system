import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { Avatar, getInitials } from './Avatar';
import * as stories from './Avatar.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Avatar />', () => {
  generateSnapshots(stories as StoryFile);

  // Testing handling of surrogate pairs, et al
  // https://javascript.info/unicode#surrogate-pairs
  describe('.getInitials', () => {
    it.each`
      givenName                     | expectedInitials
      ${'John Smith'}               | ${'JS'}
      ${'Jenny C. Sallow'}          | ${'JS'}
      ${'Thomas Stroughton-Felton'} | ${'TS'}
      ${'Young Yarn Lad'}           | ${'YL'}
      ${'Tim 肇廷'}                 | ${'T肇'}
      ${'Ãndrew 🙂'}                | ${'Ã🙂'}
      ${'你好世界'}                 | ${'你'}
      ${'🧶👦🏽'}                     | ${'🧶'}
      ${'𩷶'}                       | ${'𩷶'}
      ${'𝒳'}                        | ${'𝒳'}
      ${'☹️ 🙂'}                    | ${'☹️🙂'}
      ${'👦🏽🧶'}                     | ${'👦🏽'}
      ${'🧙‍♂️'}                       | ${'🧙‍♂️'}
      ${''}                         | ${''}
      ${' Leading Space'}           | ${'LS'}
      ${'Trailing Space '}          | ${'TS'}
      ${'Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘'}                    | ${'Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍'}
    `(
      'generates initials $expectedInitials when given $givenName',
      ({ givenName, expectedInitials }) => {
        expect(getInitials(givenName)).toEqual(expectedInitials);
      },
    );
  });

  it('falls back to a question mark when a small avatar has no name to abbreviate', () => {
    render(React.createElement(Avatar, { size: 'sm', user: { fullName: '' } }));

    expect(screen.getByText('?')).toBeInTheDocument();
  });
});
