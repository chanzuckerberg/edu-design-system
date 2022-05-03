import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { render } from "@testing-library/react";
import React from "react";
import { Checkbox } from "./Checkbox";
import * as CheckboxStoryFile from "./Checkbox.stories";

describe("<Checkbox />", () => {
  generateSnapshots(CheckboxStoryFile);

  test("throws an error if no label or aria-label", () => {
    expect(() => {
      render(<Checkbox />);
    }).toThrow(/must provide a visible label or aria-label/);
  });

  test("Disabled story renders snapshot", () => {
    const { container } = render(<Checkbox disabled label="Disabled" />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
