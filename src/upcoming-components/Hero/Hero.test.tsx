import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Hero.stories';

describe('<Hero />', () => {
  generateSnapshots(stories);
});
