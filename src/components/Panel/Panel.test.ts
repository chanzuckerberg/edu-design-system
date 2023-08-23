import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Panel.stories';

describe('<Panel />', () => {
  generateSnapshots(stories);
});
