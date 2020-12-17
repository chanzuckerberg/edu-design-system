import { Colors, Examples, SizeRamp } from "./typography.stories";
import { axe } from "jest-axe";
import { render } from "@testing-library/react";

describe("<Typography />", () => {
  it("renders the component", () => {
    const { container } = render(Examples());
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <p
          color="base"
        >
          Default body text
        </p>
        <p
          color="brand"
        >
          Brand color text
        </p>
        <h1
          color="base"
        >
          Bold heading 1
        </h1>
        <h1
          color="base"
        >
          Heading 1 styled as Heading 4
        </h1>
      </div>
    `);
  });

  it("passes semantic accessibility checks", async () => {
    const { container } = render(SizeRamp());
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("passes color accessibility checks", async () => {
    const { container } = render(Colors());
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
