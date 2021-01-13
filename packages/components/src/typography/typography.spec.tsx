import * as TypographyStoryFile from "./typography.stories";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Typography />", () => {
  generateSnapshots(TypographyStoryFile);
});
