import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './InlineNotification.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<InlineNotification />', () => {
  generateSnapshots(stories as StoryFile);
});
