import * as BannerStoryFile from "./Banner.stories";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Banner />", () => {
  generateSnapshots(BannerStoryFile);
});
