import { generateSnapshots, prepareStory } from "@chanzuckerberg/story-utils";
import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "./button";
import * as ButtonStoryFile from "./button.stories";

describe("<Button />", () => {
  generateSnapshots(ButtonStoryFile);

  render(
    <Button data-testid="example-test-id">Button with data-testid</Button>,
  );
  expect(screen.getByTestId("example-test-id")).toMatchSnapshot(); // eslint-disable-line jest/no-standalone-expect

  render(
    <Button className="exampleClassName" data-testid="example-class-name">
      Button with example className
    </Button>,
  );
  expect(screen.getByTestId("example-class-name")).toMatchSnapshot(); // eslint-disable-line jest/no-standalone-expect

  it("forwards refs", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(prepareStory(ButtonStoryFile.Primary, { ref }));

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus();

    const button = screen.getByRole("button");
    expect(button).toHaveFocus();
  });
});
