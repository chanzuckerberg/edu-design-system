// @flow

import * as ToastStoryFile from "./Toast.stories";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Toast />", () => {
  generateSnapshots(ToastStoryFile);
});
