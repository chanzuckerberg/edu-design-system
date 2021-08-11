import { generateSnapshots, prepareStory } from "@chanzuckerberg/story-utils";
import { render, screen } from "@testing-library/react";
import React from "react";
import * as ButtonStoryFile from "./button.stories";

describe("<Button />", () => {
  generateSnapshots(ButtonStoryFile);

  it("forwards refs", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(prepareStory(ButtonStoryFile.Primary, { ref }));

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus();

    const button = screen.getByRole("button");
    expect(button).toHaveFocus();
  });
});
