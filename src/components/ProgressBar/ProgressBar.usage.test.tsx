import { render } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ProgressBar } from './ProgressBar';

/**
 * Lives apart from `ProgressBar.test.tsx` so that file keeps generating the story snapshots
 * under its own name.
 *
 * `assertEdsUsage` writes to the console rather than throwing, so the only way to assert on
 * it is to watch the console. `error` is watched alongside `warn` because the embedded-label
 * assertion used to log at that level, and a quiet case has to stay quiet on both.
 */
describe('<ProgressBar /> usage warnings', () => {
  let warn: ReturnType<typeof vi.spyOn>;
  let error: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    error = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Nothing here is a broken-usage case, so the louder level is never the right one
    expect(error).not.toHaveBeenCalled();

    vi.restoreAllMocks();
  });

  describe('labels in an embedded context', () => {
    it.each([0, 0.33, 1])(
      'stays quiet for an embedded bar with no labels at value %s',
      (value) => {
        render(
          <ProgressBar
            aria-label="progress"
            context="embedded"
            value={value}
          />,
        );

        expect(warn).not.toHaveBeenCalled();
      },
    );

    it('warns when a valueLabel is set on an embedded bar', () => {
      render(
        <ProgressBar
          aria-label="progress"
          context="embedded"
          value={0.33}
          valueLabel="Step 1"
        />,
      );

      expect(warn).toHaveBeenCalledWith(
        'Labels are not allowed when context is embedded',
      );
    });

    it('warns when a descriptionLabel is set on an embedded bar', () => {
      render(
        <ProgressBar
          context="embedded"
          descriptionLabel="Label"
          value={0.33}
        />,
      );

      expect(warn).toHaveBeenCalledWith(
        'Labels are not allowed when context is embedded',
      );
    });

    it('warns once when both labels are set on an embedded bar', () => {
      render(
        <ProgressBar
          context="embedded"
          descriptionLabel="Label"
          value={0.33}
          valueLabel="Step 1"
        />,
      );

      expect(warn).toHaveBeenCalledTimes(1);
    });

    it('stays quiet for an empty valueLabel, which suppresses rather than adds a label', () => {
      render(
        <ProgressBar
          aria-label="progress"
          context="embedded"
          value={0.33}
          valueLabel=""
        />,
      );

      expect(warn).not.toHaveBeenCalled();
    });

    it('stays quiet for labels on a standalone bar, which renders them', () => {
      render(
        <ProgressBar
          descriptionLabel="Label"
          value={0.33}
          valueLabel="Step 1"
        />,
      );

      expect(warn).not.toHaveBeenCalled();
    });
  });

  describe('a value outside the allowed range', () => {
    it('warns for a value above the max', () => {
      render(<ProgressBar aria-label="progress" max={10} value={30} />);

      expect(warn).toHaveBeenCalledWith(
        'Value 30 outside allowed range between 0 and 10',
      );
    });

    it('warns for a value below zero', () => {
      render(<ProgressBar aria-label="progress" max={10} value={-5} />);

      expect(warn).toHaveBeenCalledWith(
        'Value -5 outside allowed range between 0 and 10',
      );
    });

    it('stays quiet for a value at either end of the range', () => {
      render(<ProgressBar aria-label="progress" max={10} value={0} />);
      render(<ProgressBar aria-label="progress" max={10} value={10} />);

      expect(warn).not.toHaveBeenCalled();
    });
  });
});
