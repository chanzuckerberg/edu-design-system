import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './BannerNotification.stories';

describe('<BannerNotification />', () => {
  generateSnapshots(stories);
});
