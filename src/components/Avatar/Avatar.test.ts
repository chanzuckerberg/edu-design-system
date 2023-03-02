import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Avatar.stories';

describe('<Avatar />', () => {
  generateSnapshots(stories);
});
