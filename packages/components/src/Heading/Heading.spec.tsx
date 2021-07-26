import * as HeadingStoryFile from "./Heading.stories";

import { render, screen } from "@testing-library/react";
import Heading from "./Heading";
import React from "react";
import { generateSnapshots } from "@chanzuckerberg/story-utils";

describe("<Heading />", () => {
  generateSnapshots(HeadingStoryFile);

  it("should pass through ref", () => {
    const headingRef = React.createRef<HTMLHeadingElement>();
    render(
      <Heading ref={headingRef} size="h1" tabIndex={-1}>
        Some Heading
      </Heading>,
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    headingRef.current!.focus();

    const headingElement = screen.getByText("Some Heading");

    expect(headingElement).toHaveFocus();
  });
});
