import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './BannerTitle.stories';

describe('<BannerTitle />', () => {
  generateSnapshots(stories);
});
