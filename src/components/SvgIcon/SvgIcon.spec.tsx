import { generateSnapshots } from "@chanzuckerberg/story-utils";
import * as SvgIconStoryFile from "./SvgIcon.stories";

describe("<SvgIcon />", () => {
  generateSnapshots(SvgIconStoryFile);
});
