import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Label.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Label />', () => {
  generateSnapshots(stories as StoryFile);
});
