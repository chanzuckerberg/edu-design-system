import * as TestComponentStoryFile from "./TestComponent.stories";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<TestComponent />", () => {
  generateSnapshots(TestComponentStoryFile);
});
