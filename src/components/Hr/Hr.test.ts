import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Hr.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Hr />', () => {
  generateSnapshots(stories as StoryFile);
});
