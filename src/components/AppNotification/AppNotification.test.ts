import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './AppNotification.stories';
import type { StoryFile } from '../../util/utility-types';

describe('<AppNotification />', () => {
  generateSnapshots(stories as StoryFile);
});
