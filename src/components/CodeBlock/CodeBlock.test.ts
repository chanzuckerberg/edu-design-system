import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { CodeBlock } from './CodeBlock';
import * as stories from './CodeBlock.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<CodeBlock />', () => {
  generateSnapshots(stories as StoryFile);

  it('renders plain code when no language is given', () => {
    render(
      React.createElement(CodeBlock, { language: '', children: 'plain text' }),
    );

    const code = screen.getByText('plain text');
    expect(code.tagName).toBe('CODE');
    expect(code).not.toHaveAttribute('class');
  });

  // TODO(next-major): add in vite tests to render the button, stub out the pastboard calls, and test copy content
});
