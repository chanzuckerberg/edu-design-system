import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './DataTable.stories';

describe('<DataTable />', () => {
  generateSnapshots(stories);
});
