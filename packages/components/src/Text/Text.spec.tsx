import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { render, screen } from "@testing-library/react";

import React from "react";
import Text from "./Text";
import * as TextStoryFile from "./Text.stories";

describe("<Text />", () => {
  generateSnapshots(TextStoryFile);

  it("should add the passthrough className", () => {
    render(
      <Text className="passthrough" size="body">
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
    const textRef = React.createRef<HTMLSpanElement>();
    render(
      <Text ref={textRef} size="body" tabIndex={-1}>
        Some Text
      </Text>,
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    textRef.current!.focus();

    const textElement = screen.getByText("Some Text");
    expect(textElement).toHaveFocus();
  });
});
