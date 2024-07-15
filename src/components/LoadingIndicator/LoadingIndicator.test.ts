import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './LoadingIndicator.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<LoadingIndicator />', () => {
  generateSnapshots(stories as StoryFile);
});
