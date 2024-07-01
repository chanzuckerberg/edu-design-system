import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Toggle.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Toggle />', () => {
  generateSnapshots(stories as StoryFile);
});
