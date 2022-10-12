import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as IconStoryFile from './Icon.stories';

describe('<Icon />', () => {
  generateSnapshots(IconStoryFile);
});
