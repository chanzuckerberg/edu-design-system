import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Skeleton.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Skeleton />', () => {
  generateSnapshots(stories as StoryFile);
});
