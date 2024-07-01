import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './ButtonGroup.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<ButtonGroup />', () => {
  generateSnapshots(stories as StoryFile);
});
