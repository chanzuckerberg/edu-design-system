import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './AppNotification.stories';
import type { StoryFile } from '../../../.storybook/utility-types';

describe('<AppNotification />', () => {
  generateSnapshots(stories as StoryFile);
});
