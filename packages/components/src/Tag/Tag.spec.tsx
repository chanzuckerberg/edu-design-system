// @flow

import * as TagStoryFile from "./Tag.stories";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Tag />", () => {
  generateSnapshots(TagStoryFile);
});
