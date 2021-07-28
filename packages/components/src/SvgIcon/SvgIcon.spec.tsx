import * as SvgIconStoryFile from "./SvgIcon.stories";

import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<SvgIcon />", () => {
  generateSnapshots(SvgIconStoryFile);
});
