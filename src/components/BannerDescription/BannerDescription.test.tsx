import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './BannerDescription.stories';

describe('<BannerDescription />', () => {
  generateSnapshots(stories);
});
