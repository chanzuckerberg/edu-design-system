import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Skeleton } from './Skeleton';
import * as stories from './Skeleton.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Skeleton />', () => {
  generateSnapshots(stories as StoryFile);

  describe.each([
    ['Skeleton', Skeleton],
    ['Skeleton.Text', Skeleton.Text],
    ['Skeleton.Circle', Skeleton.Circle],
  ])('%s', (_, Component) => {
    it('passes extra props through to the rendered element', () => {
      const onClick = vi.fn();
      // Held in a variable so `data-*` keys pass, as they would in JSX
      const props = {
        'aria-busy': true,
        'data-testid': 'skeleton',
        id: 'skeleton-id',
        onClick,
        width: 40,
      };
      render(React.createElement(Component, props));

      const skeleton = screen.getByTestId('skeleton');
      expect(skeleton).toHaveAttribute('id', 'skeleton-id');
      expect(skeleton).toHaveAttribute('aria-busy', 'true');
      expect(skeleton).toHaveStyle({ width: '40px' });

      fireEvent.click(skeleton);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
