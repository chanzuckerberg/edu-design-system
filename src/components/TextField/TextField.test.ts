import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as TextFieldStoryFile from './TextField.stories';

describe('<TextField />', () => {
  generateSnapshots(TextFieldStoryFile);
});
