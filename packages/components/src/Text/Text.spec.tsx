import * as TextStoryFile from "./Text.stories";

import { render, screen } from "@testing-library/react";

import React from "react";
import Text from "./Text";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Text />", () => {
  generateSnapshots(TextStoryFile);

  it("should add the passthrough className", () => {
    render(
      <Text size="body" className="passthrough">
        Some Text
      </Text>,
    );
    expect(screen.getByText("Some Text")).toMatchInlineSnapshot(`
      <p
        class="passthrough typography sizeBody colorBase"
      >
        Some Text
      </p>
    `);
  });
});
