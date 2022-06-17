import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './KeyValueTable.stories';

describe('<KeyValueTable />', () => {
  generateSnapshots(stories);
});
