import * as TextStoryFile from "./Text.stories";

import React, { useEffect, useRef } from "react";

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

  it("should pass the passthrough ref", async () => {
    const TestComponent = () => {
      const textRef = useRef<HTMLParagraphElement>(null);

      useEffect(() => {
        textRef.current && textRef.current.focus();
      });

      return (
        <Text ref={textRef} size="body" className="passthrough" tabIndex={-1}>
          Some Text
        </Text>
      );
    };
    render(<TestComponent />);
    const textElement = await screen.getByText("Some Text");

    expect(textElement).toEqual(document.activeElement);
  });
});
