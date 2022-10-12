import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './Score.stories';

describe('<Score />', () => {
  generateSnapshots(stories);
});
