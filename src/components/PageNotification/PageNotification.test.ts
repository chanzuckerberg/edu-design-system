import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './PageNotification.stories';

describe('<PageNotification />', () => {
  generateSnapshots(stories);
});
