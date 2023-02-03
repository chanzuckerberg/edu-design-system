import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as InputFieldStoryFile from './InputField.stories';

describe('<TextField />', () => {
  generateSnapshots(InputFieldStoryFile);
});
