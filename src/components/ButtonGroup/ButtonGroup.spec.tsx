import { generateSnapshots } from "@chanzuckerberg/story-utils";
import * as ButtonGroupStoryFile from "./ButtonGroup.stories";

describe("<ButtonGroup />", () => {
  generateSnapshots(ButtonGroupStoryFile);
});
