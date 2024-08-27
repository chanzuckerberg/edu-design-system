import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './DataTable.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<DataTable />', () => {
  generateSnapshots(stories as StoryFile);
});
