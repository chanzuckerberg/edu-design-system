import {generateSnapshots} from '@chanzuckerberg/story-utils';
import * as stories from './NotificationList.stories';

describe('<NotificationList />', () => {
  generateSnapshots(stories);
});
