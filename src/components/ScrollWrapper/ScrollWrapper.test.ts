import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { setShadowStates } from './ScrollWrapper';

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
});
