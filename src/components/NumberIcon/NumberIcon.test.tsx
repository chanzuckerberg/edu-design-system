import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './NumberIcon.stories';

describe('<NumberIcon />', () => {
  generateSnapshots(stories);
});
