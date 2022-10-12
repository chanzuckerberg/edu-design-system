import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as ToastStoryFile from './Toast.stories';

describe('<Toast />', () => {
  generateSnapshots(ToastStoryFile);
});
