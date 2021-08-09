import { generateSnapshots } from "@chanzuckerberg/story-utils";
import * as ButtonStoryFile from "./button.stories";

describe("<Button />", () => {
  generateSnapshots(ButtonStoryFile);
});
