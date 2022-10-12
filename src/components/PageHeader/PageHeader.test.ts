import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './PageHeader.stories';

describe('<PageHeader />', () => {
  generateSnapshots(stories);
});
