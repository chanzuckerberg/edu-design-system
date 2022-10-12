import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './Toolbar.stories';

describe('<Toolbar />', () => {
  generateSnapshots(stories);
});
