import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as stories from './InlineNotification.stories';

describe('<InlineNotification />', () => {
  generateSnapshots(stories);
});
