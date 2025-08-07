import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import React from 'react';
import * as stories from './Breadcrumbs.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

const { LongList } = composeStories(stories);

mockResizeObserver();

describe('<Breadcrumbs />', () => {
  generateSnapshots(stories as StoryFile);

  describe('truncation', () => {
    it('truncates when its content overflows', async () => {
      render(<LongList />);
      const list = screen.getByRole('list');

      Object.defineProperty(list, 'clientWidth', { value: 100 });
      Object.defineProperty(list, 'scrollWidth', { value: 200 });
      expect(list.clientWidth).toBeLessThan(list.scrollWidth);

      window.dispatchEvent(new Event('resize'));

      await waitFor(() => {
        expect(screen.getAllByRole('listitem').length).toEqual(4);
      });
    });

    it('does not truncate when its content does not overflow', async () => {
      render(<LongList />);
      const list = screen.getByRole('list');

      Object.defineProperty(list, 'clientWidth', { value: 200 });
      Object.defineProperty(list, 'scrollWidth', { value: 200 });
      expect(list.clientWidth).toBeGreaterThanOrEqual(list.scrollWidth);

      window.dispatchEvent(new Event('resize'));

      await waitFor(() => {
        expect(screen.getAllByRole('listitem').length).toEqual(12);
      });
    });
  });
});
