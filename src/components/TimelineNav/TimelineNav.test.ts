import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './TimelineNav.stories';

describe('<TimelineNav />', () => {
  generateSnapshots(stories);
});
