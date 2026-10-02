import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ScrollWrapper, setShadowStates } from './ScrollWrapper';

import * as stories from './ScrollWrapper.stories';

import type { StoryFile } from '../../../.storybook/utility-types';

describe('<ScrollWrapper />', () => {
  generateSnapshots(stories as StoryFile);

  describe('setShadowStates', () => {
    it('handles showing top/bottom edge shadows', () => {
      expect(
        setShadowStates({
          scrollTop: 10, // scrolled just below the top left corner
          scrollLeft: 0,
          scrollHeight: 300, // there's more to see vertically
          clientHeight: 200,
          scrollWidth: 300, // there's no more to see horizontally
          clientWidth: 300,
        } as HTMLDivElement),
      ).toEqual({ top: true, bottom: true, start: false, end: false });
    });

    it('handles showing start/end (left/right) edge shadows', () => {
      expect(
        setShadowStates({
          scrollTop: 0, // scrolled just off the top left corner
          scrollLeft: 10,
          scrollHeight: 300, // there's no more to see vertically
          clientHeight: 300,
          scrollWidth: 300, // there's more to see horizontally
          clientWidth: 200,
        } as HTMLDivElement),
      ).toEqual({ top: false, bottom: false, start: true, end: true });
    });

    it('handles showing only a top edge shadow', () => {
      expect(
        setShadowStates({
          scrollTop: 200, // scrolled to the bottom left corner
          scrollLeft: 0,
          scrollHeight: 300, // there's more to see vertically
          clientHeight: 200,
          scrollWidth: 300, // there's no more to see horizontally
          clientWidth: 300,
        } as HTMLDivElement),
      ).toEqual({ top: true, bottom: false, start: false, end: false });
    });

    it('handles showing only a right edge shadow', () => {
      expect(
        setShadowStates({
          scrollTop: 0, // scrolled just off the top left corner
          scrollLeft: 0,
          scrollHeight: 300, // there's no more to see vertically
          clientHeight: 300,
          scrollWidth: 300, // there's more to see horizontally
          clientWidth: 200,
        } as HTMLDivElement),
      ).toEqual({ top: false, bottom: false, start: false, end: true });
    });

    it('handles showing only a bottom edge shadow', () => {
      expect(
        setShadowStates({
          scrollTop: 0, // scrolled to the top left corner
          scrollLeft: 0,
          scrollHeight: 300, // there's more to see vertically
          clientHeight: 200,
          scrollWidth: 300, // there's no more to see horizontally
          clientWidth: 300,
        } as HTMLDivElement),
      ).toEqual({ top: false, bottom: true, start: false, end: false });
    });

    it('handles showing only a left edge shadow', () => {
      expect(
        setShadowStates({
          scrollTop: 0, // scrolled to the top right corner
          scrollLeft: 200,
          scrollHeight: 300, // there's no more to see vertically
          clientHeight: 300,
          scrollWidth: 300, // there's more to see horizontally
          clientWidth: 200,
        } as HTMLDivElement),
      ).toEqual({ top: false, bottom: false, start: true, end: false });
    });
  });

  describe('shadows', () => {
    afterEach(() => {
      vi.useRealTimers();
    });

    const shadowClasses = [
      'scroll-wrapper--has-top-shadow',
      'scroll-wrapper--has-bottom-shadow',
      'scroll-wrapper--has-start-shadow',
      'scroll-wrapper--has-end-shadow',
    ];

    const scrollTo = (
      element: HTMLElement,
      metrics: Partial<Record<keyof HTMLDivElement, number>>,
    ) => {
      Object.entries(metrics).forEach(([key, value]) => {
        Object.defineProperty(element, key, { configurable: true, value });
      });
      fireEvent.scroll(element);
    };

    it('adds shadows on scroll and clears them on resize', () => {
      vi.useFakeTimers();
      const { container } = render(
        <ScrollWrapper>
          <p>Scrollable content</p>
        </ScrollWrapper>,
      );
      const outer = container.firstChild as HTMLElement;
      const inner = screen.getByText('Scrollable content')
        .parentElement as HTMLElement;

      // scrolled to the middle both ways, so every edge has more to see
      scrollTo(inner, {
        scrollTop: 50,
        scrollLeft: 50,
        scrollHeight: 300,
        clientHeight: 200,
        scrollWidth: 300,
        clientWidth: 200,
      });

      shadowClasses.forEach((shadowClass) => {
        expect(outer.className).toContain(shadowClass);
      });

      act(() => {
        window.dispatchEvent(new Event('resize'));
        vi.advanceTimersByTime(250);
      });

      shadowClasses.forEach((shadowClass) => {
        expect(outer.className).not.toContain(shadowClass);
      });
      expect(outer.className).toContain('scroll-wrapper--shadow-type-cover');
    });

    it('stops listening for events when unmounted', () => {
      const removeEventListener = vi.spyOn(window, 'removeEventListener');
      const { unmount } = render(
        <ScrollWrapper>
          <p>Scrollable content</p>
        </ScrollWrapper>,
      );

      unmount();

      expect(removeEventListener).toHaveBeenCalledWith(
        'resize',
        expect.any(Function),
      );
    });
  });
});
