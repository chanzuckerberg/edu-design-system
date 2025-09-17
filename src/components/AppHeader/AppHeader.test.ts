import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './AppHeader.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<AppHeader />', () => {
  generateSnapshots(stories as StoryFile);
});
