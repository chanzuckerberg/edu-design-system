import * as ButtonStoryFile from "./button.stories";

import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Button />", () => {
  generateSnapshots(ButtonStoryFile);
});
