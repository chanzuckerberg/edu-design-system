import { generateSnapshots } from "@chanzuckerberg/story-utils";
import * as ClickableStyleWrapperStoryFile from "./ClickableStyleWrapper.stories";

describe("<ClickableStyleWrapper />", () => {
  generateSnapshots(ClickableStyleWrapperStoryFile);
});
