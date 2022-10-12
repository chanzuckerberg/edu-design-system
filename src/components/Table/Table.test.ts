import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './Table.stories';

describe('<Table />', () => {
  generateSnapshots(stories);
});
