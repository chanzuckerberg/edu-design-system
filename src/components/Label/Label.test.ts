import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Label.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Label />', () => {
  generateSnapshots(stories as StoryFile);
});
