import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { FieldNote } from './FieldNote';
import type { FieldNoteProps } from './FieldNote';

/**
 * Lives apart from `FieldNote.test.ts` so that file keeps generating the story snapshots
 * under its own name.
 *
 * `assertEdsUsage` writes to the console rather than throwing, so the only way to assert on
 * it is to watch `console.warn`.
 */
describe('<FieldNote /> usage warnings', () => {
  let warn: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('warns when an icon is set with no status', () => {
    render(<FieldNote icon="info-encircled">A note</FieldNote>);

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('FieldNote can only show an icon'),
    );
  });

  it.each(['critical', 'warning'] as const)(
    'stays quiet when an icon is set with status %s',
    (status) => {
      render(
        <FieldNote icon="info-encircled" status={status}>
          A note
        </FieldNote>,
      );

      expect(warn).not.toHaveBeenCalled();
    },
  );

  it('stays quiet for a status with no icon of its own', () => {
    render(<FieldNote status="critical">A note</FieldNote>);

    expect(warn).not.toHaveBeenCalled();
  });

  it('stays quiet when neither is set', () => {
    render(<FieldNote>A note</FieldNote>);

    expect(warn).not.toHaveBeenCalled();
  });

  it('warns for a status outside the two it supports', () => {
    // TypeScript rejects this: `status` is `'default' | 'warning' | 'critical'`, so
    // `informational` cannot be passed from typed code. Covered because a JS consumer can
    // still get here, and because the warning has to describe that case correctly rather
    // than claiming no status was given.
    render(
      <FieldNote
        icon="info-encircled"
        status={'informational' as FieldNoteProps['status']}
      >
        A note
      </FieldNote>,
    );

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('FieldNote can only show an icon'),
    );
  });
});
