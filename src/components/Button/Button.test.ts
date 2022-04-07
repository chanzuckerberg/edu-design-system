import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as ButtonStoryFile from './Button.stories';

describe('<Button />', () => {
  generateSnapshots(ButtonStoryFile);
});
