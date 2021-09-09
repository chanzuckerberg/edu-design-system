import { generateSnapshots } from "@chanzuckerberg/story-utils";
import * as ClickableStyleStoryFile from "./ClickableStyle.stories";

describe("<ClickableStyle />", () => {
  generateSnapshots(ClickableStyleStoryFile);
});
