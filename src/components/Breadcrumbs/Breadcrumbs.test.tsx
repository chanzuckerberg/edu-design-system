import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { composeStories } from '@storybook/react-vite';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from './Breadcrumbs.stories';
import type { StoryFile } from '../../../.storybook/utility-types';
import Breadcrumbs from './index';

const { LongList } = composeStories(stories);

describe('<Breadcrumbs />', () => {
  generateSnapshots(stories as StoryFile);

  describe('the back crumb', () => {
    it('names itself from the item text', () => {
      render(
        <Breadcrumbs>
          <Breadcrumbs.Item href="/a" text="Parent" />
          <Breadcrumbs.Item href="/b" text="Here" />
        </Breadcrumbs>,
      );

      // The back crumb is a clone of the second-to-last item, so it borrows that text.
      expect(screen.getAllByRole('link', { name: 'Parent' })).toHaveLength(2);
    });

    it('falls back to a label when the item has no text', () => {
      render(
        <Breadcrumbs>
          <Breadcrumbs.Item href="/a" />
          <Breadcrumbs.Item href="/b" />
        </Breadcrumbs>,
      );

      // `text` is optional and this variant renders an icon rather than a label, so without
      // a fallback the link would reach assistive tech with no accessible name at all.
      expect(screen.getByRole('link', { name: 'Back' })).toBeInTheDocument();
    });
  });

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
