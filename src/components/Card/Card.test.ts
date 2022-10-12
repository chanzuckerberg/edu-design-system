import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './Card.stories';

describe('<Card />', () => {
  generateSnapshots(stories);
});
