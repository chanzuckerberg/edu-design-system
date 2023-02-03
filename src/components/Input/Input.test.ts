import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as InputStoryFile from './Input.stories';

describe('<Input />', () => {
  generateSnapshots(InputStoryFile);
});
