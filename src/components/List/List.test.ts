import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as OlStories from './OrderedList.stories';
import * as UlStories from './UnorderedList.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<UnorderedList />', () => {
  generateSnapshots(UlStories as StoryFile);
});

describe('<OrderedList />', () => {
  generateSnapshots(OlStories as StoryFile);
});
