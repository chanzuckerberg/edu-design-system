import * as ClickableStoryFile from "./clickable.stories";

import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Clickable />", () => {
  generateSnapshots(ClickableStoryFile);
});
