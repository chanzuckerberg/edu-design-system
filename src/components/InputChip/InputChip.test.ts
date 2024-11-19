import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './InputChip.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<InputChip />', () => {
  generateSnapshots(stories as StoryFile);
});
