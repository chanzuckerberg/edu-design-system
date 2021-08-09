import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { render, screen } from "@testing-library/react";
import React from "react";
import Heading from "./Heading";
import * as HeadingStoryFile from "./Heading.stories";

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
