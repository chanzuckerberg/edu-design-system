import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Icon.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Icon />', () => {
  generateSnapshots(stories as StoryFile);
});
