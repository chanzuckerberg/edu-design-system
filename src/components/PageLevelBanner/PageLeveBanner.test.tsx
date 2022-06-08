import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as PageLeveBannerStoryFile from './PageLeveBanner.stories';

describe('<PageLeveBanner />', () => {
  generateSnapshots(PageLeveBannerStoryFile);
});
