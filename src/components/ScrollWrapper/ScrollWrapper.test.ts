import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './ScrollWrapper.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<ScrollWrapper />', () => {
  generateSnapshots(stories as StoryFile);
});
