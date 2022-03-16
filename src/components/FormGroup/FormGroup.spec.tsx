import { generateSnapshots } from "@chanzuckerberg/story-utils";
import * as FormGroupStoryFile from "./FormGroup.stories";

describe("<FormGroup />", () => {
  generateSnapshots(FormGroupStoryFile);
});
