import * as TextStoryFile from "./Text.stories";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Text />", () => {
  generateSnapshots(TextStoryFile);
});
