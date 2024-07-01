import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './SearchBar.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<SearchField />', () => {
  generateSnapshots(stories as StoryFile);
});
