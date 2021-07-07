import * as ClickableStoryFile from "./Clickable.stories";

import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Clickable />", () => {
  generateSnapshots(ClickableStoryFile);
});
