import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as AvatarImageStoryFile from './AvatarImage.stories';

describe('<AvatarImage />', () => {
  generateSnapshots(AvatarImageStoryFile);
});
