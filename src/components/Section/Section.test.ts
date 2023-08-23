import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Section.stories';

describe('<Section />', () => {
  generateSnapshots(stories);
});
