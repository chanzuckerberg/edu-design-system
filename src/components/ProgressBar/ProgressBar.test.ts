import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './ProgressBar.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<ProgressBar />', () => {
  generateSnapshots(stories as StoryFile);
});
