import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import * as stories from './Breadcrumbs.stories';

const { LongList } = composeStories(stories);

describe('<Breadcrumbs />', () => {
  generateSnapshots(stories);

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
