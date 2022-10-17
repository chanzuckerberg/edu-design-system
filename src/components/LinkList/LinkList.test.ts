import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './LinkList.stories';

describe('<LinkList />', () => {
  generateSnapshots(stories);
});
