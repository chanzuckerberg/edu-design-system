import { generateSnapshots } from "@chanzuckerberg/story-utils";
import * as TooltipStoryFile from "./Tooltip.stories";

describe("<Tooltip />", () => {
  generateSnapshots(TooltipStoryFile, {
    getElement: (wrapper) => {
      return wrapper.baseElement;
    },
  });
});
