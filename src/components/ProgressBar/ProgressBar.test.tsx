import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';
import * as stories from './ProgressBar.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<ProgressBar />', () => {
  beforeEach(() => {
    // Add in mocks for the calls that can occur in implementation to suppress logging in tests
    const consoleMock = jest.spyOn(console, 'error');
    const consoleWarnMock = jest.spyOn(console, 'warn');
    consoleMock.mockImplementation();
    consoleWarnMock.mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  generateSnapshots(stories as StoryFile);

  // TODO(next-major): add in tests for assertions

  describe('the computed value label', () => {
    it('reports progress as a whole percentage', () => {
      render(<ProgressBar aria-label="progress" value={0.33} />);

      expect(screen.getByText('33%')).toBeInTheDocument();
    });

    it('reports against a custom max', () => {
      render(<ProgressBar aria-label="progress" max={200} value={50} />);

      expect(screen.getByText('25%')).toBeInTheDocument();
    });

    it('never reports a fraction', () => {
      const { container } = render(
        <ProgressBar aria-label="progress" max={10} value={3} />,
      );

      expect(container).not.toHaveTextContent('/');
      expect(screen.getByText('30%')).toBeInTheDocument();
    });

    it('clamps a value above the max rather than reporting over 100%', () => {
      render(<ProgressBar aria-label="progress" max={10} value={30} />);

      expect(screen.getByText('100%')).toBeInTheDocument();
      expect(screen.getByText('100%')).not.toHaveClass(
        'counter__count--invalid',
      );
    });

    it('clamps a value below zero rather than reporting a negative', () => {
      render(<ProgressBar aria-label="progress" max={10} value={-5} />);

      expect(screen.getByText('0%')).toBeInTheDocument();
    });

    it('gives way to a caller-supplied valueLabel', () => {
      const { container } = render(
        <ProgressBar aria-label="progress" value={0.33} valueLabel="Step 1" />,
      );

      expect(screen.getByText('Step 1')).toBeInTheDocument();
      expect(container).not.toHaveTextContent('33%');
    });

    it('is suppressed entirely by an empty valueLabel', () => {
      const { container } = render(
        <ProgressBar aria-label="progress" value={0.33} valueLabel="" />,
      );

      expect(screen.queryByText('33%')).not.toBeInTheDocument();
      // Nothing is left to label the bar with, so the label row drops out entirely
      expect(container).not.toHaveTextContent(/\S/);
    });

    it('is not rendered when the bar is embedded', () => {
      const { container } = render(
        <ProgressBar aria-label="progress" context="embedded" value={0.33} />,
      );

      expect(container).not.toHaveTextContent('33%');
    });
  });
});
