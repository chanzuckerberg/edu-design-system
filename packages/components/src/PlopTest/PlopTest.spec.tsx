import * as PlopTestStoryFile from "./PlopTest.stories";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<PlopTest />", () => {
  generateSnapshots(PlopTestStoryFile);
});
