import * as HeadingStoryFile from "./Heading.stories";

import { render, screen } from "@testing-library/react";
import Heading from "./Heading";
import React from "react";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Heading />", () => {
  generateSnapshots(HeadingStoryFile);

  it("should pass the passthrough ref", () => {
    const headingRef = React.createRef();
    render(
      <Heading ref={headingRef} size="h1" tabIndex={-1}>
        Some Heading
      </Heading>,
    );

    headingRef.current.focus();

    const headingElement = screen.getByText("Some Heading");

    expect(headingElement).toHaveFocus();
  });
});
