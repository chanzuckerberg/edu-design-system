import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './DragDrop.stories';

describe('<DragDrop />', () => {
  generateSnapshots(stories);
});
