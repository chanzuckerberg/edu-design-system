import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './ProjectCard.stories';

describe('<ProjectCard />', () => {
  generateSnapshots(stories);
});
