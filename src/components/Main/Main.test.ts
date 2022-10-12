import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './Main.stories';

describe('<Main />', () => {
  generateSnapshots(stories);
});
