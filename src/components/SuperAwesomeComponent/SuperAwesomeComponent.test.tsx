import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './SuperAwesomeComponent.stories';

describe('<SuperAwesomeComponent />', () => {
  generateSnapshots(stories);
});
