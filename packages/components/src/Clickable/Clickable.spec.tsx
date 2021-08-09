import { generateSnapshots } from "@chanzuckerberg/story-utils";
import * as ClickableStoryFile from "./Clickable.stories";

describe("<Clickable />", () => {
  generateSnapshots(ClickableStoryFile);
});
