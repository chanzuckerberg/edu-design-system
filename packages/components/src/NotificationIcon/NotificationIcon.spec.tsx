import * as NotificationIconStoryFile from "./NotificationIcon.stories";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<NotificationIcon />", () => {
  generateSnapshots(NotificationIconStoryFile);
});
