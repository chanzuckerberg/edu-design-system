import { generateSnapshots } from '@chanzuckerberg/story-utils';
import * as BreadcrumbsStoryFile from './Breadcrumbs.stories';

describe('<Tag />', () => {
  generateSnapshots(BreadcrumbsStoryFile);
});
