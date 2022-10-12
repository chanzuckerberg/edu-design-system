import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './Logo.stories';

describe('<Logo />', () => {
  generateSnapshots(stories);
});
