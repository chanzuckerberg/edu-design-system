import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import React from "react";
import Link from "./Link";
import * as LinkStoryFile from "./Link.stories";

const { Default } = composeStories(LinkStoryFile);

describe("<Link />", () => {
  generateSnapshots(LinkStoryFile);

  it("passes test ids down properly", () => {
    render(<Default data-testid="example-test-id" />);
    expect(screen.getByTestId("example-test-id")).toMatchSnapshot();
  });

  it("passes class names down properly", () => {
    render(
      <Default className="exampleClassName" data-testid="example-class-name" />,
    );
    expect(screen.getByTestId("example-class-name")).toMatchSnapshot();
  });

  it("forwards refs", () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(
      <Link href="https://go.czi.team/eds" ref={ref}>
        Hi
      </Link>,
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus();

    const link = screen.getByRole("link");
    expect(link).toHaveFocus();
  });
});
