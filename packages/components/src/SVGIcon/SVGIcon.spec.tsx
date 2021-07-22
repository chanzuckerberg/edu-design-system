import * as SVGIconStoryFile from "./SVGIcon.stories";

import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<SVGIcon />", () => {
  generateSnapshots(SVGIconStoryFile);
});
