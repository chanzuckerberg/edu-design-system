import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Tag.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Tag />', () => {
  generateSnapshots(stories as StoryFile);
});
