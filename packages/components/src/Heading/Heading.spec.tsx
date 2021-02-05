import * as HeadingStoryFile from "./Heading.stories";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Heading />", () => {
  generateSnapshots(HeadingStoryFile);
});
