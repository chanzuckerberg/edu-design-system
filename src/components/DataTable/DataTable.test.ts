import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './DataTable.stories';
import type { StoryFile } from '../../util/utility-types';

// Stubbing out this class b/c it doesn't exist in non-browser contexts
export class IntersectionObserver {
  root = null;
  rootMargin = '';
  thresholds = [];

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return [];
  }

  unobserve() {
    return null;
  }
}
window.IntersectionObserver = IntersectionObserver;
global.IntersectionObserver = IntersectionObserver;

describe('<DataTable />', () => {
  generateSnapshots(stories as StoryFile);
});
