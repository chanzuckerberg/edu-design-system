import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import React from "react";
import { Heading } from "./Heading";
import * as HeadingStoryFile from "./Heading.stories";

describe("<Heading />", () => {
  generateSnapshots(HeadingStoryFile);

  it("should add the passthrough className", () => {
    render(
      <Heading className="passthrough" size="h1">
        Some Heading
      </Heading>,
    );
    expect(screen.getByText("Some Heading").classList).toContain("passthrough");
  });
  it("should handle refs", async () => {
    const HelperComponent = () => {
      const refContainer = React.useRef(null);
      const onButtonClick = () => {
        expect(refContainer.current).toBe(
          screen.getByText("Ref container parent test"),
        );
      };
      return (
        <>
          <Heading ref={refContainer} size="h1">
            Ref container parent test
          </Heading>
          <button onClick={onButtonClick}>Test ref</button>
        </>
      );
    };
    render(<HelperComponent />);
    expect(screen.getByText("Ref container parent test")).toBeTruthy();
    userEvent.click(screen.getByRole("button"));
  });
  it('should console warn if attempting to use "info" variant', () => {
    const consoleWarnMock = jest
      .spyOn(global.console, "warn")
      .mockImplementation();
    render(
      <Heading size="h2" variant="info">
        Some Heading 2
      </Heading>,
    );
    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toBeCalledWith(
      "Info variant is deprecated and will be removed in an upcoming release. Please use the consider another variant instead.",
    );
    consoleWarnMock.mockRestore();
  });
});
