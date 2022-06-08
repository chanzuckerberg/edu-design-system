import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as TextInputStoryFile from './TextInput.stories';

describe('<TextInput />', () => {
  generateSnapshots(TextInputStoryFile);
});
