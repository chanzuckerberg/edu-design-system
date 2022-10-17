import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as LayoutStoryFile from './Layout.stories';

describe('<Layout />', () => {
  generateSnapshots(LayoutStoryFile);
});
