import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { render, screen } from "@testing-library/react";
import React from "react";
import CloseButton from "./CloseButton";
import * as CloseButtonStoryFile from "./CloseButton.stories";

describe("<CloseButton />", () => {
  generateSnapshots(CloseButtonStoryFile);

  it("forwards refs", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<CloseButton ref={ref} onClose={() => console.log("closing...")} />);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus();

    const button = screen.getByRole("button");
    expect(button).toHaveFocus();
  });
});
