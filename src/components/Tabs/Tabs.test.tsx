import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './Tabs.stories';

describe('<Tabs />', () => {
  generateSnapshots(stories);
});
