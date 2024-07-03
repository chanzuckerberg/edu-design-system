import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Card.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<Card />', () => {
  generateSnapshots(stories as StoryFile);
});
