import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './InlineNotification.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<InlineNotification />', () => {
  generateSnapshots(stories as StoryFile);
});
