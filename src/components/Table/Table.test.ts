import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Table.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Table />', () => {
  generateSnapshots(stories as StoryFile);
});
