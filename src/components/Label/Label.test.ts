import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as LabelStoryFile from './Label.stories';

describe('<Label />', () => {
  generateSnapshots(LabelStoryFile);
});
