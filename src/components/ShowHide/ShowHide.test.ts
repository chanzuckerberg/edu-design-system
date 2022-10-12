import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './ShowHide.stories';

describe('<ShowHide />', () => {
  generateSnapshots(stories);
});
