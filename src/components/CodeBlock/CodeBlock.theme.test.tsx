import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { CodeBlock } from './CodeBlock';
import lightTheme from './theme';
import darkTheme from './theme-dark';

const SNIPPET = 'const answer = 42;';
const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)';

/** The inline color Prism gave the `const` keyword, as written to the DOM. */
function keywordColor() {
  return screen.getByText('const').getAttribute('style') ?? '';
}

function expectKeywordColor(hex: string) {
  expect(keywordColor().toLowerCase()).toContain(hex.toLowerCase());
}

/**
 * Sets or clears `<html data-theme>`. The hook hears about it through a MutationObserver,
 * which reports in a microtask, so the change settles inside `act`.
 */
async function setPageTheme(theme?: 'light' | 'dark') {
  /* eslint-disable-next-line require-await */
  await act(async () => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    } else {
      delete document.documentElement.dataset.theme;
    }
  });
}

/** Makes the operating system report a dark preference while leaving the rest of matchMedia alone. */
function preferDarkScheme() {
  const matchMedia = window.matchMedia.bind(window);
  vi.spyOn(window, 'matchMedia').mockImplementation((query) => {
    const list = matchMedia(query);
    if (query === DARK_SCHEME_QUERY) {
      Object.defineProperty(list, 'matches', { value: true });
    }
    return list;
  });
}

/**
 * Lives apart from `CodeBlock.test.ts` so that file keeps generating the story snapshots
 * under its own name. These cover which Prism theme the block renders with.
 */
describe('<CodeBlock /> color scheme', () => {
  afterEach(async () => {
    await setPageTheme();
    vi.restoreAllMocks();
  });

  it('renders the light theme when nothing asks for dark', () => {
    render(<CodeBlock language="ts">{SNIPPET}</CodeBlock>);

    expectKeywordColor(lightTheme.keyword.color);
  });

  it('renders the dark theme when <html data-theme="dark">', async () => {
    await setPageTheme('dark');
    render(<CodeBlock language="ts">{SNIPPET}</CodeBlock>);

    expectKeywordColor(darkTheme.keyword.color);
  });

  it('switches themes when data-theme changes after mount', async () => {
    render(<CodeBlock language="ts">{SNIPPET}</CodeBlock>);
    expectKeywordColor(lightTheme.keyword.color);

    await setPageTheme('dark');
    expectKeywordColor(darkTheme.keyword.color);

    await setPageTheme('light');
    expectKeywordColor(lightTheme.keyword.color);
  });

  it('follows the operating system preference when data-theme is unset', () => {
    preferDarkScheme();
    render(<CodeBlock language="ts">{SNIPPET}</CodeBlock>);

    expectKeywordColor(darkTheme.keyword.color);
  });

  it('lets data-theme="light" override an operating system dark preference', async () => {
    preferDarkScheme();
    await setPageTheme('light');
    render(<CodeBlock language="ts">{SNIPPET}</CodeBlock>);

    expectKeywordColor(lightTheme.keyword.color);
  });
});
