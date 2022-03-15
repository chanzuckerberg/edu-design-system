import { generateSnapshots } from "@chanzuckerberg/story-utils";
import * as NotificationIconStoryFile from "./NotificationIcon.stories";

describe("<NotificationIcon />", () => {
  generateSnapshots(NotificationIconStoryFile);
});
