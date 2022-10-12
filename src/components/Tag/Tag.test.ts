import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as TagStoryFile from './Tag.stories';

describe('<Tag />', () => {
  generateSnapshots(TagStoryFile);
});
