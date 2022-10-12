import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './LayoutContainer.stories';

describe('<LayoutContainer />', () => {
  generateSnapshots(stories);
});
