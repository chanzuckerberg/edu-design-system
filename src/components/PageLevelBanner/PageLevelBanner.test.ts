import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './PageLevelBanner.stories';

describe('<PageLevelBanner />', () => {
  generateSnapshots(stories);
});
