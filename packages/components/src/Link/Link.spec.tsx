import { generateSnapshots, prepareStory } from "@chanzuckerberg/story-utils";
import { render, screen } from "@testing-library/react";
import React from "react";
import Link from "./Link";
import * as LinkStoryFile from "./Link.stories";

describe("<Link />", () => {
  generateSnapshots(LinkStoryFile);

  it("passes test ids down properly", () => {
    render(<Link data-testid="example-test-id">Link with data-testid</Link>);
    expect(screen.getByTestId("example-test-id")).toMatchSnapshot();
  });

  it("passes class names down properly", () => {
    render(
      <Link className="exampleClassName" data-testid="example-class-name">
        Link with example className
      </Link>,
    );
    expect(screen.getByTestId("example-class-name")).toMatchSnapshot();
  });

  it("forwards refs", () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(prepareStory(LinkStoryFile.StandardLink, { ref }));

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus();

    const Link = screen.getByRole("link");
    expect(Link).toHaveFocus();
  });
});
