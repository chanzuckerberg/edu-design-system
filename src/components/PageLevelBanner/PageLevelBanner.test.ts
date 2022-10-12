import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as PageLevelBannerStoryFile from './PageLevelBanner.stories';

describe('<PageLevelBanner />', () => {
  generateSnapshots(PageLevelBannerStoryFile);
});
