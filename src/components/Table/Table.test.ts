import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Table.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<Table />', () => {
  generateSnapshots(stories as StoryFile);
});
