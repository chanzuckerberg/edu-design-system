import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { fireEvent, screen } from "@testing-library/react";
import * as DropdownStoryFile from "./Dropdown.stories";

describe("<Dropdown />", () => {
  generateSnapshots(DropdownStoryFile, {
    getElement: async () => {
      const openButton = await screen.findByRole("button");
      fireEvent.click(openButton);
      await screen.findAllByRole("option");
      return screen.getByTestId("dropdown");
    },
  });
});
