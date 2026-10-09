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

  it('passes extra props through to the wrapping element', () => {
    // Held in a variable so `data-*` keys pass, as they would in JSX
    const props = {
      'data-testid': 'code-block',
      id: 'code-block-id',
      language: 'js',
      children: 'const answer = 42;',
    };
    render(React.createElement(CodeBlock, props));

    expect(screen.getByTestId('code-block')).toHaveAttribute(
      'id',
      'code-block-id',
    );
  });

  // TODO(next-major): add in vite tests to render the button, stub out the pastboard calls, and test copy content
});
