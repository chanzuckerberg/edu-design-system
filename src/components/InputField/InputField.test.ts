import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as InputFieldStoryFile from './InputField.stories';

describe('<InputField />', () => {
  generateSnapshots(InputFieldStoryFile);
});
