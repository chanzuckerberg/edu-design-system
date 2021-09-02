import { generateSnapshots, prepareStory } from "@chanzuckerberg/story-utils";
import { render, screen } from "@testing-library/react";
import React from "react";
import * as LinkStoryFile from "./Link.stories";

describe("<Link />", () => {
  generateSnapshots(LinkStoryFile);

  it("forwards refs", () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(prepareStory(LinkStoryFile.StandardLink, { ref }));

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus();

    const Link = screen.getByRole("link");
    expect(Link).toHaveFocus();
  });
});
