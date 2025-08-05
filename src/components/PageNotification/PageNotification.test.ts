import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './PageNotification.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<PageNotification />', () => {
  generateSnapshots(stories as StoryFile);
});
