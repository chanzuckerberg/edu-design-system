import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "./button";
import * as ButtonStoryFile from "./button.stories";

const { Default } = composeStories(ButtonStoryFile);

describe("<Button />", () => {
  generateSnapshots(ButtonStoryFile);

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
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Hi</Button>);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus();

    const button = screen.getByRole("button");
    expect(button).toHaveFocus();
  });
});
