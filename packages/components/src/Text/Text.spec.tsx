import * as TextStoryFile from "./Text.stories";

import React, { useEffect } from "react";

import { render, screen } from "@testing-library/react";
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

  it("should pass the passthrough ref", () => {
    const textRef = React.createRef();
    render(
      <Text ref={textRef} size="body" tabIndex={-1}>
        Some Text
      </Text>,
    );

    textRef.current.focus();

    const textElement = screen.getByText("Some Text");
    expect(textElement).toEqual(document.activeElement);
  });
});
