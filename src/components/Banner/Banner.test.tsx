import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as BannerStoryFile from './Banner.stories';

describe('<Banner />', () => {
  generateSnapshots(BannerStoryFile);
});
