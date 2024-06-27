import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Icon.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Icon />', () => {
  generateSnapshots(stories as StoryFile);
});
