import { render, screen } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Card } from './Card';
import type { CardHeaderProps } from './Card';

/**
 * Lives apart from `Card.test.ts` so that file keeps generating the story snapshots under
 * its own name.
 *
 * `assertEdsUsage` writes to the console rather than throwing, so the only way to assert
 * on it is to watch `console.warn`.
 */
describe('<Card.Header /> title heading level', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('renders the title as an h3 by default', () => {
    render(<Card.Header title="Text Complexity" />);

    expect(
      screen.getByRole('heading', { level: 3, name: 'Text Complexity' }),
    ).toBeInTheDocument();
  });

  it.each(['h2', 'h3'] as const)('renders the title as %s', (titleAs) => {
    render(<Card.Header title="Text Complexity" titleAs={titleAs} />);

    expect(
      screen.getByRole('heading', {
        level: Number(titleAs.slice(1)),
        name: 'Text Complexity',
      }),
    ).toBeInTheDocument();
  });

  it('falls back to an h3 for a level outside the two it supports', () => {
    // TypeScript rejects this: `titleAs` is `'h2' | 'h3'`, so `h1` cannot be passed from
    // typed code. Covered because a JS consumer can still get here, and because the guard
    // has to keep the title out of a level a card never belongs at.
    render(
      <Card.Header
        title="Text Complexity"
        titleAs={'h1' as CardHeaderProps['titleAs']}
      />,
    );

    expect(
      screen.getByRole('heading', { level: 3, name: 'Text Complexity' }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
  });

  it('keeps the title treatment the same across both levels', () => {
    render(<Card.Header title="Text Complexity" titleAs="h2" />);
    render(<Card.Header title="Text Complexity" titleAs="h3" />);

    expect(screen.getByRole('heading', { level: 2 }).className).toEqual(
      screen.getByRole('heading', { level: 3 }).className,
    );
  });
});

describe('<Card.Header /> usage warnings', () => {
  let warn: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('warns for a level outside the two it supports', () => {
    render(
      <Card.Header
        title="Text Complexity"
        titleAs={'h4' as CardHeaderProps['titleAs']}
      />,
    );

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('Card.Header takes only `h2` or `h3`'),
    );
  });

  it.each(['h2', 'h3'] as const)(
    'stays quiet for the supported level %s',
    (titleAs) => {
      render(<Card.Header title="Text Complexity" titleAs={titleAs} />);

      expect(warn).not.toHaveBeenCalled();
    },
  );

  it('stays quiet when the level is left off', () => {
    render(<Card.Header title="Text Complexity" />);

    expect(warn).not.toHaveBeenCalled();
  });
});
