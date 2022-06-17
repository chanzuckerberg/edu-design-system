import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Band.stories';

describe('<Band />', () => {
  generateSnapshots(stories);
});
