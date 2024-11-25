import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './SelectionChip.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<SelectionChip />', () => {
  generateSnapshots(stories as StoryFile);
});
