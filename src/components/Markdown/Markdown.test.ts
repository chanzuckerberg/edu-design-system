import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Markdown } from './Markdown';
import * as stories from './Markdown.stories';

import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Markdown />', () => {
  generateSnapshots(stories as StoryFile);

  it('runs custom remark plugins alongside GitHub-flavored markdown', () => {
    const transformer = vi.fn();
    const remarkPlugin = () => transformer;

    render(
      React.createElement(Markdown, {
        remarkPlugins: [remarkPlugin],
        children: '| Lake |\n| --- |\n| Tahoe |',
      }),
    );

    expect(transformer).toHaveBeenCalledTimes(1);
    // tables come from remark-gfm, so it is still applied
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
